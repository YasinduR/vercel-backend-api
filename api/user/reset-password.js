export default function handler(req, res) {
  if (req.method === 'POST') {
    return res.status(200).json(
    { "success": true, "message": "Password has been changed successfully" }
    );
  }
  return res.status(405).json({ message: "Method not allowed" });
}

