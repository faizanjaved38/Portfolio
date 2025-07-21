import { MongoClient } from 'mongodb';
import * as mongodb from "mongodb";
import { Portfolio } from './portfolio';

export const collections: {
    portfolio?: mongodb.Collection<Portfolio>;
} = {};
export async function connectToDatabase(uri: string) {
    const client = new MongoClient(uri);

    try {
        await client.connect();
        console.log('Connected to MongoDB Atlas');
        const db = client.db('faizan-portfolio');
        const portfolioCollection = db.collection<Portfolio>("portfolio");
        collections.portfolio = portfolioCollection;

    } catch (error) {
        console.error('Error connecting to MongoDB Atlas:', error);
    }
}
