import { NextApiRequest, NextApiResponse } from "next";
import { quotes } from "./[...slug]";

function getNextId() {
  return Math.max(...quotes.map((quote) => quote.id)) + 1;
}

type Data = {
  result?: Quote;
  error?: string;
};

export type Quote = {
  id: number;
  quote: string
}

// generate documentation
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  // Handle POST request for creating a new lecture
  if (req.method === "POST") {
    const newLecture: Partial<Quote> = JSON.parse(req.body);

    // Validate the request body
    if (
      !newLecture.quote
    ) {
      return res.status(400).json({ error: "Invalid request body" });
    }

    // Create a new lecture and add it to the lectures array
    const quote: Quote = {
      id: getNextId(),
      quote: newLecture.quote,
    };

    quotes.push(quote);

    // Return the created lecture
    return res.status(201).json({ result: quote });
  }

  // Handle other HTTP methods
  return res.status(400).json({ error: "Unsupported method" });
}