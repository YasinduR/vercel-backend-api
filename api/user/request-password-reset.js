export default function handler(req, res) {
  if (req.method === 'POST') {
    return res.status(200).json(
{ "success": true, "message": "Reset Password Token has been sent to ******6319" }
    );
  }
  return res.status(405).json({ message: "Method not allowed" });
}

