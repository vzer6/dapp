import {ethers, JsonRpcProvider} from 'ethers';
import fs from 'fs';
import dotenv from "dotenv";
dotenv.config("./.env");

export async function mint(to,uri){
    const provider = new JsonRpcProvider("http://127.0.0.1:8545");
    const signer = await provider.getSigner(0);
    const contractAddress = process.env.NFT;
    const abi = JSON.parse(fs.readFileSync('./abis/MyNFT.json').toString());
    const contract = new ethers.Contract("0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512", abi, provider);
    const result = await contract.connect(signer).safeMint(to,uri);
    console.log(result.hash);
}
