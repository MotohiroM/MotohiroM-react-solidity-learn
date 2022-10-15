import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h2>BlockChans</h2>
      </div>
      <ul className="navLinks">
        <li>マーケット</li>
        <li>交換</li>
        <li>ブロックチェーン</li>
        <li>ウォレット</li>
      </ul>
      <button type="button">ログイン</button>
    </nav>
  );
};

export default Navbar;
