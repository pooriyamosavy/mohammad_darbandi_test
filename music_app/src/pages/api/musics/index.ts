import { Tmusic } from "@/@types/music";
import { faker } from "@faker-js/faker";
import type { NextApiRequest, NextApiResponse } from "next";

export type TmusicsResponse = { musics: Tmusic[] };

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TmusicsResponse>
) {
  if (req.method === "GET") {
    const musicMockData: Tmusic[] = Array.from({ length: 10 }).map(() => {
      return {
        album_name: faker.music.genre(),
        artist_name: faker.person.fullName(),
        image: faker.image.url(),
        title: faker.music.songName(),
      };
    });

    return res.status(200).json({ musics: musicMockData });
  } else {
    res.status(404);
  }
}
