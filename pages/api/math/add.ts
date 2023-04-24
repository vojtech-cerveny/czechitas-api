import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  result?: number;
  error?: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { a, b } = req.query;

  if (!a || !b) {
    return res.status(400).json({ error: 'Both "a" and "b" query parameters are required.' });
  }

  const numA = Number(a);
  const numB = Number(b);

  if (!isNaN(numA) && !isNaN(numB)) {
    const result = numA + numB;
    res.status(200).json({ result });
  } else {
    res.status(400).json({ error: 'Both a and b should be numbers.' });
  }
}