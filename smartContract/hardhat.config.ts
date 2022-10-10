import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  defaultNetwork: "goerli",
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/olLw8ylerGjgYpOgu2XnOQSb6Ee6KRzG",
      accounts: [
        // 自分のMetamaskの秘密鍵
        "",
      ]
    }
  }
};

export default config;
