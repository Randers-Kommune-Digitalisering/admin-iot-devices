const Node = {
  "id": "9a69ed5c62db0965",
  "type": "debug",
  "z": "6f89a22d2f227f45",
  "name": "stdout",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "payload.warningCount > 0\t? { $flowContext(\"metadata_tablename\"): \"table exists\" }\t:\t{ $flowContext(\"metadata_tablename\"): \"table created\" }\t/*:{\"warningstatus\" : payload.warningCount}*/",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 880,
  "y": 360,
  "wires": []
}

module.exports = Node;