const Node = {
  "id": "93936d9222b4ad8e",
  "type": "debug",
  "z": "e4e3eef16c2dc327",
  "name": "stdout",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "payload.warningCount > 0 or error ~> $exists() ?\t{\t    data.tablename: \"data insert error\",\t    \"sql\": sql,\t    \"error\": error.message,\t    \"warning\": warning\t}\t:\t{\t    data.tablename: \"new data inserted\",\t    \"rows\": payload.affectedRows\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 920,
  "y": 1400,
  "wires": []
}

module.exports = Node;