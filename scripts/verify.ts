import hre from "hardhat";


// verify contracts on etherscan
async function main(): Promise<void> {
    const deployer = await hre.ethers.getSigners();
    const owners = [deployer[0].address, "0xBCb1C76EAba4C0f66f22E63e4B651b4125916d77", "0xaE3a3978b74B374F251374eC1B117c87236487AB"]
    await hre.run("verify:verify", {
        address: "0xa377b5583230bc3C0a15fA1f9A1FFAAEE9efE349",
        constructorArguments: [
        ],
    });

    await hre.run("verify:verify", {
        address: "0xecc67a2875869bd1e4d54a74e599d36a2a9d32d5",
        constructorArguments: [
            owners, 2
        ],
    });

}

main()
    .then(() => process.exit(0))
    .catch((error: Error) => {
        console.error(error);
        process.exit(1);
    });
