import * as functions from "firebase-functions";

import axios from "axios";

export const search = functions
  .region("asia-northeast1")
  .https.onRequest(async ({ query: { q } }, response) => {
    response.set("Access-Control-Allow-Origin", "https://recigle.kk-web.link");

    const { data } = await axios.get("http://www.google.com/complete/search", {
      params: {
        q,
        output: "toolbar",
      },
    });

    response.send(data);
  });
