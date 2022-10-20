import React, { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';

const Main = () => {
  const {
    connectWallet, sendTransaction, handleChange, inputFormData,
  } = useContext(TransactionContext);
  const handleSubmit = () => {
    const { addressTo, amount } = inputFormData;
    if(addressTo === '' || amount === '') {
      return;
    }
    sendTransaction();
  };
  return (
    <div className="container">
      <div className="mainContainer">
        <div className="cryptContainer">
          <h1 className="title">Crypt Card</h1>
          <button className="cryptContainerButton" type="button" id="wallet-connect" onClick={connectWallet}>
            <p>wallet connect</p>
          </button>
        </div>
        {/** 右側 */}
        <div className="inputContainer">
          <input type="text" placeholder="アドレス" name="addressTo" onChange={(e) => handleChange(e, 'addressTo')} />
          <input type="number" placeholder="通貨(ETH)" name="amount" step="0.0001" onChange={(e) => handleChange(e, 'amount')} />
          <button type="button" onClick={handleSubmit}>送信</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
