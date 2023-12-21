import dbConnect from "@/db/connect";
import Artist from "@/db/models/Artist";

export default async function handler(request, response) {
  await dbConnect();
  try {
    if (request.method === "GET") {
      const artists = await Artist.find();
      return response.status(200).json(artists);
    } else if (request.method === "POST") {
      const artistData = request.body;
      await Artist.create(artistData);
      return response.status(201).json({ status: "Artist created" });
    } else {
      return response.status(405).json({ message: "Method not allowed" });
    }
  } catch (error) {
    console.error(error);
    return response.status(400).json({ error: error.message });
  }
}
