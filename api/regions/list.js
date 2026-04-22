export default function handler(req, res) {
  if (req.method === 'POST') {
    return res.status(200).json(

{
    "success": true,
    "message": "Region details retrieved successfully",
    "data": [
        {
            "routeCode": "00001",
            "routeDescription": "ACCESS"
        },
        {
            "routeCode": "00054",
            "routeDescription": "BDC"
        },
        {
            "routeCode": "00055",
            "routeDescription": "BDN"
        },
        {
            "routeCode": "00056",
            "routeDescription": "BDS"
        },
        {
            "routeCode": "00041",
            "routeDescription": "BNA"
        },
        {
            "routeCode": "00038",
            "routeDescription": "CMB"
        },
        {
            "routeCode": "00002",
            "routeDescription": "CNC"
        },
        {
            "routeCode": "00003",
            "routeDescription": "CNI"
        },
        {
            "routeCode": "00048",
            "routeDescription": "COA"
        },
        {
            "routeCode": "00004",
            "routeDescription": "COA - ALL"
        },
        {
            "routeCode": "00033",
            "routeDescription": "COA - FRI"
        },
        {
            "routeCode": "00005",
            "routeDescription": "COA - MON"
        },
        {
            "routeCode": "00006",
            "routeDescription": "COA - MON, THURS"
        },
        {
            "routeCode": "00030",
            "routeDescription": "COA - MON, WED"
        },
        {
            "routeCode": "00007",
            "routeDescription": "COA - MON, WED, FRI"
        },
        {
            "routeCode": "00008",
            "routeDescription": "COA - THURS"
        },
        {
            "routeCode": "00009",
            "routeDescription": "COA - TUE"
        },
        {
            "routeCode": "00010",
            "routeDescription": "COA - TUE, FRI"
        },
        {
            "routeCode": "00039",
            "routeDescription": "COA - TUE, THURS"
        },
        {
            "routeCode": "00011",
            "routeDescription": "COA - WED"
        },
        {
            "routeCode": "00047",
            "routeDescription": "COA - WED,FRI"
        },
        {
            "routeCode": "00049",
            "routeDescription": "COB"
        },
        {
            "routeCode": "00034",
            "routeDescription": "COB - ACCESS"
        },
        {
            "routeCode": "00028",
            "routeDescription": "COB - FRI"
        },
        {
            "routeCode": "00012",
            "routeDescription": "COB - MON"
        },
        {
            "routeCode": "00032",
            "routeDescription": "COB - MON, THURS"
        },
        {
            "routeCode": "00040",
            "routeDescription": "COB - MON, WED"
        },
        {
            "routeCode": "00035",
            "routeDescription": "COB - MONDAY, FRI"
        },
        {
            "routeCode": "00013",
            "routeDescription": "COB - THURS"
        },
        {
            "routeCode": "00031",
            "routeDescription": "COB - TUE"
        },
        {
            "routeCode": "00014",
            "routeDescription": "COB - TUE, FRI"
        },
        {
            "routeCode": "00015",
            "routeDescription": "COB - WED"
        },
        {
            "routeCode": "00016",
            "routeDescription": "COB - WED, FRI"
        },
        {
            "routeCode": "00017",
            "routeDescription": "COS"
        },
        {
            "routeCode": "00043",
            "routeDescription": "DOC"
        },
        {
            "routeCode": "00046",
            "routeDescription": "DOK"
        },
        {
            "routeCode": "00044",
            "routeDescription": "DON"
        },
        {
            "routeCode": "00045",
            "routeDescription": "DOS"
        },
        {
            "routeCode": "00018",
            "routeDescription": "DSO"
        },
        {
            "routeCode": "00019",
            "routeDescription": "FEA"
        },
        {
            "routeCode": "00020",
            "routeDescription": "HCO"
        },
        {
            "routeCode": "00057",
            "routeDescription": "IWD"
        },
        {
            "routeCode": "00052",
            "routeDescription": "NCE"
        },
        {
            "routeCode": "00021",
            "routeDescription": "NEA"
        },
        {
            "routeCode": "00042",
            "routeDescription": "NES"
        },
        {
            "routeCode": "00036",
            "routeDescription": "NOA"
        },
        {
            "routeCode": "00029",
            "routeDescription": "NON OPERATING"
        },
        {
            "routeCode": "00022",
            "routeDescription": "NOT"
        },
        {
            "routeCode": "00023",
            "routeDescription": "NWE"
        },
        {
            "routeCode": "00024",
            "routeDescription": "RTP"
        },
        {
            "routeCode": "00051",
            "routeDescription": "SEC"
        },
        {
            "routeCode": "00037",
            "routeDescription": "SOA"
        },
        {
            "routeCode": "00027",
            "routeDescription": "TERMINATED - P&A\r\n"
        },
        {
            "routeCode": "00025",
            "routeDescription": "UCO"
        },
        {
            "routeCode": "00053",
            "routeDescription": "WSC"
        },
        {
            "routeCode": "00026",
            "routeDescription": "WSO"
        }
    ],
    "errors": null
}
  );
  }

  return res.status(405).json({ message: "Method not allowed" });
}

