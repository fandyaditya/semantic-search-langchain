import * as dotenv from 'dotenv';
dotenv.config();
import { OpenAIEmbeddings } from 'langchain/embeddings';
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';
import { PineconeStore } from 'langchain/vectorstores';
import * as fs from 'fs';

const textSplitter = new RecursiveCharacterTextSplitter({ chunkSize: 200, chunkOverlap: 0});
const embedder = new OpenAIEmbeddings();
import { index } from './pinecone.js';


(async () => {
    const article = await fs.readFileSync('article.txt', { encoding: 'utf-8' });
    const splittedText = await textSplitter.createDocuments([article]);
    PineconeStore.fromDocuments(splittedText, embedder, { pineconeIndex: index, namespace: 'langchain' });
})()