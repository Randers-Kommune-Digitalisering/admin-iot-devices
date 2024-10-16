const Node = {
  "id": "e52d80fed6524176",
  "type": "debug",
  "z": "5f6ef472b7d9e1e9",
  "name": "Export CSV",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "{\t   \"eui\": deviceEui,\t   \"filename\": payload.filename,\t   \"status\": payload ~> $exists() ?\t            (\t            payload = '' ?\t                \"CSV blank\" : \"CSV OK\"\t            )\t                : \"CSV error\"\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 840,
  "y": 340,
  "wires": []
}

module.exports = Node;