const Node = {
  "id": "1eb8816c66188f57",
  "type": "debug",
  "z": "bd0288d62c2263f6",
  "name": "stdout",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "payload.warningCount > 0 ?\t{\t    data.tablename: \"data insert error\"\t}\t:\t{\t    data.tablename: \"new data inserted\",\t    \"rows\": payload.affectedRows\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 1020,
  "y": 1300,
  "wires": []
}

module.exports = Node;