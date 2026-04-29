export default function handler(req, res) {
  if (req.method === 'POST') {
    return res.status(200).json(
{
 "success": true,
 "message": "Password changed successfully",
 "data": {},
 "errors": null
}
    );
  }
  return res.status(405).json({ message: "Method not allowed" });
}





