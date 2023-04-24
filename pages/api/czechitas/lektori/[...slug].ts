import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  result?: Lecture | Lecture[] | Partial<Lecture> | string[];
  error?: string;
};

export type Lecture = {
  id: number;
  firstName: string;
  lastName: string;
  lectures: string[]
};

const lectures: Lecture[] = [
  {
    id: 0,
    firstName: "Pavel",
    lastName: "Kutáč",
    lectures: [
      "git1",
      "git2",
      "wtf",
      "git-uz-nikdy-vice",
      "git-git-git-shit-shit-shit",
    ],
  },
  {
    id: 1,
    firstName: "Vojta",
    lastName: "Barta",
    lectures: [
      "uvod-do-testingu",
      "uvod-do-testingu2",
      "uvod-do-testing3",
      "uvod-do-testingu4",
      "uvod-do-sveta-dymek",
      "dymka-a-ja",
      "dymka-a-jeji-dopad-na-zdravi",
      "jak-rozpoznat-zavilost",
      "chybis-mi-ma-dymko",
    ],
  },
  {
    id: 2,
    firstName: "Robin",
    lastName: "Weiss",
    lectures: [
      "management-testingu",
      "management-testingu2",
      "jira-jak-na-to",
      "jira-peklo-na-zemi",
      "uvod-do-italske-kuchyne",
      "uvod-do-italske-kuchyne2",
    ],
  },
  {
    id: 3,
    firstName: "Vojta",
    lastName: "Červený",
    lectures: [
      "api1",
      "api2",
      "api3",
      "api4",
      "nikdy-to-neskonci",
      "api-forever",
      "api-je-laska",
      "api-je-zivot",
      "api-je-vse",
    ],
  },
  {
    id: 0,
    firstName: "Lukas",
    lastName: "Muller",
    lectures: [
      "html-pro-novacky",
      "css-nikdy-to-nebude-pekne",
      "oh-my-co-jsem-to-stvoril",
    ],
  },
];


function getNextId() {
  return Math.max(...lectures.map((lecture) => lecture.id)) + 1;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { slug } = req.query;

  // 10% chance of error
  if (Math.random() < 0.1) {
    return res.status(500).json({ error: "Internal Server Error" });
  }

  // all, random, number, number/quotes, number/lectures, name
  if (slug && slug.length == 1) {
    if (Number(slug[0]) > lectures.length || Number(slug[0]) < 0) {
      return res
        .status(400)
        .json({
          error: `To si jako myslis, ze tady mame "${slug[0]}" lektoru?! V zadnem pripade!`,
        });
    }
    if (!isNaN(Number(slug[0]))) {
      await new Promise((resolve) =>
        setTimeout(resolve, Math.random() * 10000)
      );
      return res.status(200).json({ result: lectures[Number(slug[0])] });
    }
    if (slug[0] === "random") {
      return res
        .status(200)
        .json({
          result: lectures[Math.floor(Math.random() * lectures.length)],
        });
    }
    if (slug[0] === "all") {
      return res.status(200).json({ result: lectures });
    }
    if (isNaN(Number(slug[0]))) {
      const filteredLectures = lectures.filter(
        (lecture) => lecture.firstName.toLowerCase() === slug[0].toLowerCase()
      );

      if (filteredLectures.length > 0) {
        return res.status(200).json({ result: filteredLectures });
      } else {
        return res
          .status(404)
          .json({ error: "No lectures found for the given first name" });
      }
    }
    return res.status(404).json({ error: "Route not found" });
  }

  if (slug && slug.length == 2) {
    if (Number(slug[0]) > lectures.length || Number(slug[0]) < 0) {
      return res
        .status(400)
        .json({ error: "Ne. Takhle ne pratele. Takhle ROZHODNE ne." });
    }
    if (slug[1] === "lectures") {
      if (lectures[Number(slug[0])].lectures) {
        return res
          .status(200)
          .json({ result: lectures[Number(slug[0])].lectures });
      } else {
        return res.status(200).json({ result: [] });
      }
    }
  }

  return res.status(404).json({ error: "Route not found" });
}
