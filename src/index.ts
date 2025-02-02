import { JsonRpcProvider, id } from "ethers";
import * as dotenv from 'dotenv';
dotenv.config();

const provider = new JsonRpcProvider(`https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`)

async function pollBlock(blockNumber: number) {
  const logs = await provider.getLogs({
    address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    fromBlock: blockNumber,
    toBlock: blockNumber,
    topics: [id("Transfer(address,address,uint256)")]
  })
  console.log(logs);
}

pollBlock(21758651);
