import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    // Parse the request body
    const { message } = await req.json();
    console.log(message)
    console.log(process.env.GEMINI_API_KEY)
    if (!message) {
      return NextResponse.json(
        { status: "error", message: "Message is required" },
        { status: 400 }
      );
    }

    // Initialize the Google Generative AI client
    // const genAI = new GoogleGenerativeAI({
    //   apiKey: process.env.GEMINI_API_KEY, // Ensure the API key is set in your .env.local file
    // });

    // // Get the Gemini model
    // const model = await genAI.getGenerativeModel({ model: "gemini-pro" });

    // // Generate the content using the Gemini model
    // const result = await model.generateMessage({
    //   prompt: message,
    // });
    /////////

    const genAI = new GoogleGenerativeAI("AIzaSyCtTw_rCkFVUFw_QhRKKK02FFO6RysNdJ4");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


const result = await model.generateContent(message+" give only html code no extra information just html in tailwind css");

    // Extract the generated text
    const output = result.response.text() 

    return NextResponse.json({ status: "success", output });
  } catch (error) {
    console.error("Error in Gemini API:", error);
    return NextResponse.json(
      { status: "error", message: "Failed to generate content", error: error.message },
      { status: 500 }
    );
  }
}
