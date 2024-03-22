import hre from "hardhat";


// verify contracts on etherscan
async function main(): Promise<void> {
    const deployer = await hre.ethers.getSigners();
    const owners = [deployer[0].address, "0xBCb1C76EAba4C0f66f22E63e4B651b4125916d77", "0xaE3a3978b74B374F251374eC1B117c87236487AB"]
    await hre.run("verify:verify", {
        address: "0x8F1b14f5dC3235471203590f52B90716298b2fc3",
        constructorArguments: [
        ],
    });

    await hre.run("verify:verify", {
        address: "0x1e3F26F8db5375dc1E9bac445049c6B15CA7D4f7",
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
