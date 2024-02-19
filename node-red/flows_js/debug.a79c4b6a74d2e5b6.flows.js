const Node = {
  "id": "a79c4b6a74d2e5b6",
  "type": "debug",
  "z": "5f6ef472b7d9e1e9",
  "name": "stdout",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "payload.warningCount > 0\t? { $flowContext(\"metadata_tablename\"): \"table exists\" }\t:\t{ $flowContext(\"metadata_tablename\"): \"table created\" }\t/*:{\"warningstatus\" : payload.warningCount}*/",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 1200,
  "y": 200,
  "wires": []
}

module.exports = Node;