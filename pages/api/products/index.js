import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";

export default async function handler(request, response) {
  await dbConnect();
  try {
    if (request.method === "GET") {
      const products = await Product.find();
      return response.status(200).json(products);
    } else if (request.method === "POST") {
      const productData = request.body;
      await Product.create(productData);
      return response.status(201).json({ status: "Product created" });
    } else {
      return response.status(405).json({ message: "Method not allowed" });
    }
  } catch (error) {
    console.error(error);
    return response.status(400).json({ error: error.message });
  }
}
