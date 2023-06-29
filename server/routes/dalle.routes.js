import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import {Configuration, OpenAIApi} from "openai";

dotenv.config();
const router = express.Router();

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openAi = new OpenAIApi(config)
// Now we will call this API to generate the images.


router.route('/').get((req, res) => {
    res.status(200).json({message: "Hey From DALL.E Route"})
})

// To get prompt from frontend we will create thi route
router.route('/').post(async (req, res) => {
    try {
        const { prompt } = req.body;

        const response = await openAi.createImage({
            prompt,
            n: 1,
            size: '1024x1024',
            response_format: 'b64_json'
        });

        const image = response?.data?.data[0]?.b64_json;

        res.status(200).json({ photo: image });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong" })
    }
})

export default router;