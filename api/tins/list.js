export default function handler(req, res) {
  if (req.method === 'POST') {

    const { dealerCode } = req.body;

    const allData = [
      {
        tinNo: "PTIBDM2024091001960",
        customer: "AC2005033754",
        route: "00048",
        totalDiscount: 1288,
        totalTaxes: 786,
        totalValue: 5152,
        payOnDelivery: "N",
        incentiveStatus: "N",
        customerRefNo: "SDCVGF",
        dealer: "AC2005033754",
        distributorCode: "AC2005033754",
        incentiveMonth: "",
        creditStatus: ""
      },
      {
        tinNo: "PTIBDM2026020502134",
        customer: "AC2005033754",
        route: "00048",
        totalDiscount: 19066,
        totalTaxes: 11633.49,
        totalValue: 76264,
        payOnDelivery: "Y",
        incentiveStatus: "N",
        customerRefNo: "66CCCCCCCCCCCCCCCCCC",
        dealer: "AC2005033754",
        distributorCode: "AC2005033754",
        incentiveMonth: "",
        creditStatus: "N"
      }
    ];

    let filteredData = [];

    if (dealerCode) {
      filteredData = allData.filter(
        item => item.dealer === dealerCode
      );
    }

    return res.status(200).json({
      success: true,
      message: "TIN details retrieved successfully",
      data: filteredData,
      errors: null
    });
  }

  return res.status(405).json({ message: "Method not allowed" });
}
