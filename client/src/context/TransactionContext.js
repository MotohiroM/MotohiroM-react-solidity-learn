import { createContext, useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { contactABI, contactAddress } from '../utils/connect';

export const TransactionContext = createContext();

// スマートコントラクトを取得
const getSmartContract = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(contactAddress, contactABI, signer);

  return transactionContract;
};

// ウォレット連携など
export const TransactionProvider = ({ children }) => {
  const [crrentAccount, setCrrentAccount] = useState('');
  const [inputFormData, setInputFormData] = useState({
    addressTo: '',
    amount: '',
  });

  const handleChange = (error, name) => {
    setInputFormData((prevInputFromData) => ({
      ...prevInputFromData,
      [name]: error.target.value,
    }));
  };

  const isMetamaskInstalled = () => {
    if(!window.ethereum) return console.log('please metamask install');
  };

  // metamaskと連携しているか確認
  const isMetamaskWalletConnect = async () => {
    isMetamaskInstalled();

    // metamaskのアカウントIDを取得
    const accounts = await window.ethereum.request({ method: 'eth_accounts' });
    setCrrentAccount(accounts[0]);
  };

  // metamask wallet連携
  const connectWallet = async () => {
    isMetamaskInstalled();

    // metamaskを持っていればコネクトを行う
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  };

  // 実際に通貨の取引を行う
  const sendTransaction = async () => {
    isMetamaskInstalled();
    const transactionContract = getSmartContract();
    const { addressTo, amount } = inputFormData;
    const parseAmount = ethers.utils.parseEther(amount)._hex;
    const transactionParameters = {
      gas: '0',
      to: addressTo,
      from: crrentAccount,
      value: parseAmount,
    };

    const txHash = await window.ethereum.request({ // eslint-disable-line no-unused-vars
      method: 'eth_sendTransaction',
      params: [transactionParameters],
    });

    // 送金者から受信者に対して通貨送金が可能
    const transactionHash = await transactionContract.addToBlockchain(
      addressTo,
      parseAmount,
    );
    console.log(`ロード中・・・${transactionHash.txHash}`);
    await transactionHash.wait();
    console.log(`送金に成功！${transactionHash.txHash}`);
  };

  useEffect(() => {
    isMetamaskWalletConnect();
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
