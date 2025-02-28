import cors from "./cors";

export default async function handler(req, res) {
  cors(req, res, () => {
    if (req.method === "GET") {
      res.status(200).json({ message: "Hello, World!" });
    } else {
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  });
}
