const Node = {
  "id": "d5ac7a01bc0f94d0",
  "type": "debug",
  "z": "6f89a22d2f227f45",
  "name": "stdout",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "payload.warningCount > 0 ?\t{\t    data.tablename: \"data insert error\"\t}\t:\t{\t    data.tablename: \"new data inserted\",\t    \"rows\": payload.affectedRows\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 1280,
  "y": 1360,
  "wires": []
}

module.exports = Node;