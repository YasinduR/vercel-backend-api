// export default function handler(req, res) {
//   if (req.method === 'POST') {

//     const body = req.body;
//     const timestamp = Date.now();
//     const returnId = `RET${timestamp}`;
//     const returnTime = new Date().toISOString();

//     const responseData = {
//       ...body,
//       returnId: returnId,
//       returnTime: returnTime,
//     };

//     return res.status(200).json({
//       success: true,
//       message: "return saved successfully",
//       data: responseData,
//       errors: null
//     });
//   }

//   return res.status(405).json({ message: "Method not allowed" });
// }