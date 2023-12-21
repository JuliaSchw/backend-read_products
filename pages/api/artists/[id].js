import dbConnect from "@/db/connect";
import Artist from "@/db/models/Artist";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const artist = await Artist.findById(id);

    if (!artist) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(artist);
  }
}
