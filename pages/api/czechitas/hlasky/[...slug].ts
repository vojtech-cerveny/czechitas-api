import { NextApiRequest, NextApiResponse } from "next";

export const quotes = [
  {
    id: 1,
    quote:
      "“Quality is free, but only to those who are willing to pay heavily for it.”— DeMarco and Lister",
  },
  {
    id: 2,
    quote:
      "“The bitterness of poor quality remains long after the sweetness of low price is forgotten.”— Benjamin Franklin",
  },
  { id: 3, quote: "“Quality is not an act, it is a habit.”— Aristotle" },
  {
    id: 4,
    quote:
      "“Software never was perfect and won’t get perfect. But is that a license to create garbage? The missing ingredient is our reluctance to quantify quality.”— Boris Beizer",
  },
  {
    id: 5,
    quote:
      "“Geeks are people who love something so much that all the details matter.”— Marissa Mayer, Yahoo! CEO",
  },
  {
    id: 6,
    quote:
      "“Be a yardstick of quality. Some people aren’t used to an environment where excellence is expected.”— Steve Jobs ",
  },
  {
    id: 7,
    quote:
      "“If you’re relentlessly focused on lowering cost, you’ll quickly become oblivious to opportunities to increase value.” — Michael Bolton",
  },
  {
    id: 8,
    quote:
      "“…Quality debt focuses on the impact of implementation and quality decisions on the end user and business; how those decisions affect their ability to do their day-to day-job.”— Jordan Setters",
  },
  {
    id: 9,
    quote:
      "“Quality means doing it right even when no one is looking.”— Henry Ford",
  },
  { id: 10, quote: "“Fast, good, cheap: pick any two.”— Anonymous" },
  {
    id: 11,
    quote:
      "“Testers don’t like to break things; they like to dispel the illusion that things work.”— Kaner, Bach, Pettichord",
  },
  {
    id: 12,
    quote:
      "“Pretty good testing is easy to do (that’s partly why some people like to say ‘testing is dead’– they think testing isn’t needed as a special focus because they note that anyone can find at least some bugs some of the time). Excellent testing is quite hard to do.”— James Bach",
  },
  {
    id: 13,
    quote:
      "“A pinch of probability is worth a pound of perhaps.”— James Thurber",
  },
  {
    id: 14,
    quote:
      "“Testing is not responsible for the bugs inserted into software any more than the sun is responsible for creating dust in the air.”— Dorothy Graham",
  },
  {
    id: 15,
    quote:
      "“To those who say that “if you need testing at the end, you’re doing it wrong”, would you prefer a Boeing, or are you going Air Icarus?”— Michael Bolton",
  },
  {
    id: 16,
    quote:
      "“The problem is not that testing is the bottleneck. The problem is that you don’t know what’s in the bottle. That’s a problem that testing addresses.“— Michael Bolton",
  },
  {
    id: 17,
    quote:
      "“As ironic as it seems, the challenge of a tester is to test as little as possible. Test less, but test smarter.” — Federico Toledo",
  },
  {
    id: 18,
    quote:
      "“I am pretty sure there is a difference between “this has not been proven” and “this is false.”— Ron Jeffries",
  },
  {
    id: 19,
    quote:
      "“Testing is a skill. While this may come as a surprise to some people it is a simple fact.”— Fewster and Graham",
  },
  {
    id: 20,
    quote:
      "“You can be a great tester if you have programming skills. You can also be a great tester if you have no programming skills at all. And, you can be a lousy tester with or without programming skills. A great tester will learn what skills she needs to continue to be great, in her own style.”— Jerry Weinberg",
  },
  {
    id: 21,
    quote:
      "“No amount of testing can prove a software right, a single test can prove a software wrong.”— Amir Ghahrai",
  },
  {
    id: 22,
    quote:
      "“Discovering the unexpected is more important than confirming the known.“— George E. P. Box",
  },
  {
    id: 23,
    quote:
      "“The most exciting phrase to hear in science, the one that heralds discoveries, is not ‘Eureka!’ but ‘Now that’s funny…'”— Isaac Asimov",
  },
  {
    id: 24,
    quote:
      "“Testing is an infinite process of comparing the invisible to the ambiguous in order to avoid the unthinkable happening to the anonymous.”— James Bach",
  },
  { id: 25, quote: "“We only see what we know.”— Goethe" },
];

type Data = {
  result?: string | { id: number; quote: string }[];
  error?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { slug } = req.query;

  if (slug && slug.length > 0) {
    if (Number(slug[0]) > quotes.length || Number(slug[0]) < 0) {
      return res.status(400).json({ error: "Your ID is too high or too low" });
    }
    if (!isNaN(Number(slug[0]))) {
      return res.status(200).json({ result: quotes[Number(slug[0])].quote });
    }
    if(slug[0] === "random"){
      return res.status(200).json({ result: quotes[Math.floor(Math.random() * quotes.length)].quote });
    }
    if(slug[0] === "all"){
      return res.status(200).json({ result: quotes.map((quote) => quote) });
    }
    if(isNaN(Number(slug[0]))){
      return res.status(400).json({ error: "You should use number to pick" });
    }
  }
}
