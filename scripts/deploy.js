const { ethers, run, network } = require("hardhat");
require("dotenv").config;

async function main() {
  const ToDoStorageFactory = await ethers.getContractFactory("ToDoStorage");
  console.log("Deploying...");
  const todoStorage = await ToDoStorageFactory.deploy();
  await todoStorage.deployed();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
