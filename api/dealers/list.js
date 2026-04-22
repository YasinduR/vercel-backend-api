export default function handler(req, res) {
  if (req.method === 'POST') {
    return res.status(200).json(

{
    "success": true,
    "message": "Region details retrieved successfully",
    "data": [
          {
            "customerCode": "AC2004112488",
            "customerDescription": null,
            "customerName": "ISURU SERVICE CENTRE",
            "address1": "NO 171 A, GALLE ROAD, NORTH THALPITIYA,",
            "address2": "WADDUWA",
            "isVatRegistered": "N",
            "vatRegNo": "",
            "usableAmount": "35191"
        },
        {
            "customerCode": "AC2004113867",
            "customerDescription": null,
            "customerName": "SAMPATH MOTORS",
            "address1": "MADAGALLA ROAD,",
            "address2": "POLPITHIGAMA",
            "isVatRegistered": "N",
            "vatRegNo": "",
            "usableAmount": "149574"
        },
        {
            "customerCode": "AC2004115548",
            "customerDescription": null,
            "customerName": "RISHANA MOTORS AND ENGINEERS",
            "address1": "NO 59, RASSAGALA ROAD,",
            "address2": "BALANGODA",
            "isVatRegistered": "N",
            "vatRegNo": "",
            "usableAmount": "56837"
        },
        {
            "customerCode": "AC2005033754",
            "customerDescription": null,
            "customerName": "ASHEN MOTORS",
            "address1": "NO .08 , KADAWATHA ROAD",
            "address2": "KALUBOWILA",
            "isVatRegistered": "N",
            "vatRegNo": "",
            "usableAmount": "5000"
        },
    ],
    "errors": null
}
  );
  }

  return res.status(405).json({ message: "Method not allowed" });
}

