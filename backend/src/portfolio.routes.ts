import * as express from "express";
import { ObjectId } from "mongodb";
import { collections } from "./database";

export const portfolioRouter = express.Router();
portfolioRouter.use(express.json());

portfolioRouter.get("/", async (_req, res) => {
    try {
        const portfolio = await collections?.portfolio?.find({}).toArray();
        res.status(200).send(portfolio);
    } catch (error) {
        res.status(500).send(error instanceof Error ? error.message : "Unknown error");
    }
});
portfolioRouter.post("/", async (req, res) => {
    try {
        const portfolio = req.body;
        const result = await collections?.portfolio?.insertOne(portfolio);

        if (result?.acknowledged) {
            res.status(201).send(`Created a new portfolio: ID ${result.insertedId}.`);
        } else {
            res.status(500).send("Failed to create a new portfolio.");
        }
    } catch (error) {
        console.error(error);
        res.status(400).send(error instanceof Error ? error.message : "Unknown error");
    }
});
portfolioRouter.get("/:id", async (req, res) => {
    try {
        const id = req?.params?.id;
        const query = { _id: new ObjectId(id) };
        const portfolio = await collections?.portfolio?.findOne(query);

        if (portfolio) {
            res.status(200).send(portfolio);
        } else {
            res.status(404).send(`Failed to find an portfolio: ID ${id}`);
        }
    } catch (error) {
        res.status(404).send(`Failed to find an portfolio: ID ${req?.params?.id}`);
    }
});
portfolioRouter.put("/:id", async (req, res) => {
    try {
        const id = req?.params?.id;
        const portfolio = req.body;
        const query = { _id: new ObjectId(id) };
        const result = await collections?.portfolio?.updateOne(query, { $set: portfolio });

        if (result && result.matchedCount) {
            res.status(200).send(`Updated an portfolio: ID ${id}.`);
        } else if (!result?.matchedCount) {
            res.status(404).send(`Failed to find an portfolio: ID ${id}`);
        } else {
            res.status(304).send(`Failed to update an portfolio: ID ${id}`);
        }
    } catch (error) {
        const message = error instanceof Error ? error.message : "Unknown error";
        console.error(message);
        res.status(400).send(message);
    }
});
portfolioRouter.delete("/:id", async (req, res) => {
    try {
        const id = req?.params?.id;
        const query = { _id: new ObjectId(id) };
        const result = await collections?.portfolio?.deleteOne(query);

        if (result && result.deletedCount) {
            res.status(202).send(`Removed an portfolio: ID ${id}`);
        } else if (!result) {
            res.status(400).send(`Failed to remove an portfolio: ID ${id}`);
        } else if (!result.deletedCount) {
            res.status(404).send(`Failed to find an portfolio: ID ${id}`);
        }
    } catch (error) {
        const message = error instanceof Error ? error.message : "Unknown error";
        console.error(message);
        res.status(400).send(message);
    }
});