export default function handler(req, res) {
  if (req.method === 'POST') {

    const body = req.body;
    const timestamp = Date.now();
    const invoiceNumber = `INV${timestamp}`;
    const invoiceTime = new Date().toISOString();

    const responseData = {
      ...body,
      invoiceNumber: invoiceNumber,
      invoiceTime: invoiceTime,
    };

    return res.status(200).json({
      success: true,
      message: "invoice saved successfully",
      data: responseData,
      errors: null
    });
  }

  return res.status(405).json({ message: "Method not allowed" });
}