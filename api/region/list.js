export default function handler(req, res) {
  if (req.method === 'POST') {
    return res.status(200).json({
      success: true,
      message: "Region details retrieved successfully",
      data: [
        { routeCode: "00001", routeDescription: "ACCESS" },
        { routeCode: "00054", routeDescription: "BDC" }
      ]
    });
  }

  return res.status(405).json({ message: "Method not allowed" });
}
