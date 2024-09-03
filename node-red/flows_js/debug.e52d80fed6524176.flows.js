const Node = {
  "id": "e52d80fed6524176",
  "type": "debug",
  "z": "5f6ef472b7d9e1e9",
  "name": "Export CSV",
  "active": true,
  "tosidebar": true,
  "console": false,
  "tostatus": false,
  "complete": "payload ~> $exists() ? (payload = '' ? \"CSV blank\" : \"CSV written\") : \"CSV error\"",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 730,
  "y": 140,
  "wires": []
}

module.exports = Node;