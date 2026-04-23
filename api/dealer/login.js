// export default function handler(req, res) {
//   if (req.method === 'POST') {
//     return res.status(200).json(
// {
//     "success": true,
//     "message": "Successfully logged",
//     "data": [
//     ],
//     "errors": null
// }
//   );
//   }
//   return res.status(405).json({ message: "Method not allowed" });
// }


export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { dealerCode } = req.body; 
  switch (dealerCode) {
    case "AC2004112488":
      return res.status(401).json({
        success: false,
        message: "Unauthorized access",
        data: null,
        errors: null
      });

    case "AC2004115548":
      return res.status(403).json({
        success: false,
        message: "Access forbidden for this user",
        data: null,
        errors: null
      });


    case "AC2004113867":
      return res.status(423).json({
        success: false,
        message: "Account locked due to multiple attempts",
        data: null,
        errors: null
      });

    default:
      return res.status(200).json({
        success: true,
        message: "Successfully retrieved dealers",
        data: null,
        errors: null
      });
  }
}
