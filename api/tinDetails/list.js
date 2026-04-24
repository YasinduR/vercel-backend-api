export default function handler(req, res) {
  if (req.method === 'POST') {
    return res.status(200).json(
    {
    "success": true,
    "message": "TIN data details retrieved successfully",
    "data": {
        "details": [
            {
                "loadedNo": "PTIBDM2024091001960",
                "prodHierCode": "003BAJ023GEN",
                "partNo": "36AA1004",
                "quantity": 3,
                "priceWithTaxes": 3360,
                "discount": 672,
                "net": 2688,
                "totalTaxes": 410
            },
            {
                "loadedNo": "PTIBDM2024091001960",
                "prodHierCode": "001BAJ129GEN",
                "partNo": "DK101565",
                "quantity": 4,
                "priceWithTaxes": 3080,
                "discount": 616,
                "net": 2464,
                "totalTaxes": 376
            }
            ],
        "taxes": [
            {
                "loadedNo": "PTIBDM2024091001960",
                "partNo": "36AA1004",
                "taxCode": "VAT18",
                "taxAmount": 410,
                "prodHierCode": "003BAJ023GEN"
            },
            {
                "loadedNo": "PTIBDM2024091001960",
                "partNo": "DK101565",
                "taxCode": "VAT18",
                "taxAmount": 376,
                "prodHierCode": "001BAJ129GEN"
            }
        ]
        },
        "errors": null
    }
    );
  }
  return res.status(405).json({ message: "Method not allowed" });
}

