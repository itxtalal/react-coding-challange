import { createApi } from "unsplash-js";
import { NextApiRequest, NextApiResponse } from "next";

const api = createApi({
  accessKey: process.env.NEXT_UNSPLASH_ACCESS_KEY!,
});

export default async function sendEmail(
  req: NextApiRequest,
  res: NextApiResponse
) {
  api.search
    .getPhotos({ query: "cat" })
    .then((result) => {
      //   console.log(result, "result");
      return res.status(200).json({
        result,
      });
    })
    .catch((e) => {
      console.log("something went wrong!");
      return res.status(400).json({ error: (e as Error).message });
    });
}
