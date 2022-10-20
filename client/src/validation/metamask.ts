import { ETHEREUM_METHOD } from '../constants/constants';
import { MetamaskException } from '../exception/exception';

const { ethereum } = window as any;

/**
 * metamaskインストール判別
 * @returns true: インストール済
 */
export const isMetamaskInstalled = async () => {
  if(!ethereum) {
    return false;
  }
  return true;
};

/**
 * metamaskアカウント保持判別
 * @returns true: アカウント保持済
 */
export const isMetamaskAccountCreateed = async () => {
  if(!(await isMetamaskInstalled())) return false;

  // metamaskのアカウントIDを取得
  const accounts = await ethereum.request({ method: ETHEREUM_METHOD.ETH_ACCOUNTS });
  if(accounts[0] === undefined) {
    return false;
  }
  return true;
};

/**
 * metamask接続判別
 * @returns true: metamask接続済
 */
export const isMetamaskWalConnected = async () => {
  if(!(await isMetamaskInstalled())) return false;

  try {
    const connect = await ethereum.request({ method: ETHEREUM_METHOD.ETH_REQUEST_ACCOUNTS });
    if(connect[0].length > 0) {
      return true;
    }
    return false;
  } catch (error) {
    MetamaskException(error);
    return false;
  }
};
