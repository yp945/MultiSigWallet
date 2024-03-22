
import hre from "hardhat";

async function main() {
  const deployer = await hre.ethers.getSigners();
  const owners = [deployer[0].address, "0xBCb1C76EAba4C0f66f22E63e4B651b4125916d77", "0xaE3a3978b74B374F251374eC1B117c87236487AB"]
  const multiSigWalletFactory = await hre.ethers.getContractFactory("MultiSigWalletFactory");
  const multiSigWalletFactoryContract = await multiSigWalletFactory.deploy();

  await multiSigWalletFactoryContract.deployed();

  console.log(
    `MultiSigWalletFacotry with deployed to ${multiSigWalletFactoryContract.address}`
  );

  let tx = await multiSigWalletFactoryContract.create(owners, 2);
  console.log('tx hash: ', tx.hash);

  const receipt = await tx.wait();

  if (receipt.status) {
    console.log(
      `MultiSigWallet with deployed to ${receipt.events?.[0]?.args?.[1]}`
    );
    console.log('tx success');
  } else {
    throw new Error(`failed to init wallet`);
    // }
  }

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

