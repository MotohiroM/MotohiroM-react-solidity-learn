/**
 * Ethreum methodの型定義
 */
type ETHEREUM_METHOD_TYPE = {
  ETH_ACCOUNTS: string,
  ETH_REQUEST_ACCOUNTS: string,
  ETH_SEND_TRANSACTION: string,
};

/**
 * Ethreum methodで利用するconst
 */
export const ETHEREUM_METHOD: ETHEREUM_METHOD_TYPE = {
  ETH_ACCOUNTS: 'eth_accounts',
  ETH_REQUEST_ACCOUNTS: 'eth_requestAccounts',
  ETH_SEND_TRANSACTION: 'eth_sendTransaction',
};
