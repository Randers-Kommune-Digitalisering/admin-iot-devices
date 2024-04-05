const Node = {
  "id": "1eb8816c66188f57",
  "type": "debug",
  "z": "bd0288d62c2263f6",
  "name": "stdout",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "payload.warningCount > 0 or error ~> $exists() ?\t{\t    data.tablename: \"data insert error\",\t    \"error\": error.message,\t    \"warning\": warning\t}\t:\t{\t    data.tablename: \"new data inserted\",\t    \"rows\": payload.affectedRows\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 940,
  "y": 1340,
  "wires": []
}

module.exports = Node;