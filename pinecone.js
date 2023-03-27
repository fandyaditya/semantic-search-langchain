import * as dotenv from 'dotenv';
dotenv.config();
import { PineconeClient } from '@pinecone-database/pinecone';
const pinecone = new PineconeClient();
await pinecone.init({
    environment: process.env.PINECONE_ENVIRONMENT,
    apiKey: process.env.PINECONE_API_KEY
});


export const index = pinecone.Index('article')