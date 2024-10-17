const Node = {
  "id": "5bae876f7cc8d3b2",
  "type": "debug",
  "z": "5f6ef472b7d9e1e9",
  "name": "CSV upload error",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "{\t    \"sftp\": \"Upload error\",\t    \"error\": error.message,\t    \"eui\": deviceEui,\t    \"filename\": payload.filename\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 590,
  "y": 620,
  "wires": []
}

module.exports = Node;