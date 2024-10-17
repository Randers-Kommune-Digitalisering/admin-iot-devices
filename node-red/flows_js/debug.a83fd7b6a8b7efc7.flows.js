const Node = {
  "id": "a83fd7b6a8b7efc7",
  "type": "debug",
  "z": "5f6ef472b7d9e1e9",
  "name": "CSV upload error",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "{\t    \"sftp\": \"Upload error\",\t    \"error\": error.message,\t    \"eui\": deviceEui,\t    \"filename\": payload.filename,\t    \"isRetry\": isRetry\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 150,
  "y": 440,
  "wires": []
}

module.exports = Node;