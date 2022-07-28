import { createApi } from "unsplash-js";
import { NextApiRequest, NextApiResponse } from "next";

// get splash access key from env variables
const api = createApi({
  accessKey: process.env.NEXT_UNSPLASH_ACCESS_KEY!,
});

// gets random 10 photos from unsplash
export default async function getRandomPhotos(
  req: NextApiRequest,
  res: NextApiResponse
) {
  api.photos
    .getRandom({ count: 10 })
    .then((result) => {
      // console.log(result, "result");
      return res.status(200).json({
        unsplash: result,
      });
    })
    .catch((e) => {
      console.log("something went wrong!");
      return res.status(400).json({ error: (e as Error).message });
    });
}
