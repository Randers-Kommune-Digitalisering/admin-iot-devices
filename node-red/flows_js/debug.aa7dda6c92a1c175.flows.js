const Node = {
  "id": "aa7dda6c92a1c175",
  "type": "debug",
  "z": "31eb0ab05cfa21a8",
  "name": "CSV",
  "active": true,
  "tosidebar": true,
  "console": false,
  "tostatus": false,
  "complete": "(payload ~> $substring(0, 200))\t& \"\\n\\n ... \\n\\n\" &\t(payload ~> $substring((payload ~> $length())-200, 200))",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 910,
  "y": 1280,
  "wires": []
}

module.exports = Node;