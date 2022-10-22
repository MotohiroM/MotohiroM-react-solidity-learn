import React, { createContext, useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { contactABI, contactAddress } from '../utils/connect';
import { isMetamaskInstalled, isMetamaskAccountCreateed, isMetamaskWalConnected } from '../validation/metamask';
import { ETHEREUM_METHOD } from '../constants/constants';

let connectWallet: any;
let sendTransaction: any;
let handleChange: any;
let inputFormData: any;
export const TransactionContext = createContext({
  connectWallet, sendTransaction, handleChange, inputFormData,
});

const { ethereum } = window as any;

// スマートコントラクトを取得
const getSmartContract = () => {
  try {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contactAddress, contactABI, signer);

    return transactionContract;
  } catch (error) {
    console.log(error);
  }
};

// ウォレット連携など
export const TransactionProvider = ({ children }) => {
  const [crrentAccount, setCrrentAccount] = useState('');
  const [inputFormData, setInputFormData] = useState({
    addressTo: '',
    amount: '',
  });

  handleChange = (error: any, name: any) => {
    setInputFormData((prevInputFromData) => ({
      ...prevInputFromData,
      [name]: error.target.value,
    }));
  };

  /**
   * metamaskと連携
   */
  const metamaskWalletConnect = async () => {
    if(await isMetamaskAccountCreateed()) {
      // metamaskのアカウントIDを取得
      const accounts = await ethereum.request({ method: ETHEREUM_METHOD.ETH_ACCOUNTS });
      setCrrentAccount(accounts[0]);
    }
  };

  // metamask wallet連携
  connectWallet = async () => {
    const walletConnectButtonId = document.getElementById('wallet-connect');
    if(walletConnectButtonId instanceof HTMLButtonElement) {
      if(await isMetamaskWalConnected()) {
        walletConnectButtonId.disabled = true;
      } else {
        walletConnectButtonId.disabled = false;
      }
    }
  };

  // 実際に通貨の取引を行う
  sendTransaction = async () => {
    if(!(await isMetamaskInstalled())) return false;
    const transactionContract = getSmartContract();
    const { addressTo, amount } = inputFormData;
    const parseAmount = ethers.utils.parseEther(amount)._hex;
    const transactionParameters = {
      gas: '0.00001',
      to: addressTo,
      from: crrentAccount,
      value: parseAmount,
    };

    const txHash = await ethereum.request({ // eslint-disable-line no-unused-vars
      method: ETHEREUM_METHOD.ETH_SEND_TRANSACTION,
      params: [transactionParameters],
    });

    try {
      // 送金者から受信者に対して通貨送金が可能
      if(transactionContract instanceof ethers.Contract) {
        const transactionHash = await transactionContract.addToBlockchain(
          addressTo,
          parseAmount,
        );
        console.log(`ロード中・・・${transactionHash.txHash}`);
        await transactionHash.wait();
        console.log(`送金に成功！${transactionHash.txHash}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    metamaskWalletConnect();
  }, []);

  return (
    <TransactionContext.Provider value={{
      connectWallet, sendTransaction, handleChange, inputFormData,
    }}
    >
      { children }
    </TransactionContext.Provider>
  );
};
