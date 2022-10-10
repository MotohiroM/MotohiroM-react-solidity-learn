import { ethers } from "hardhat";

const deploy = async () => {
  const Transactions = await ethers.getContractFactory("Transactions");
  const transactions = await Transactions.deploy();

  await transactions.deployed();

  console.log("Transactions deoloyed to: ", transactions.address);
}

const runDeploy = async () => {
  try {
    await deploy();
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

runDeploy();
