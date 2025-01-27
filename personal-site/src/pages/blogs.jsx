export default function handler(req, res) {
  if (req.method === "POST") {
    const { title, content, date } = req.body;

    // Add your logic to save the blog (e.g., save to a database or file)
    console.log("New Blog Post:", { title, content, date });

    return res.status(201).json({ message: "Blog post created successfully!" });
  }

  return res.status(405).json({ message: "Method not allowed" });
}
