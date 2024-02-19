const Node = {
  "id": "2ae0f3656dd0968d",
  "type": "debug",
  "z": "b1af099441f07c56",
  "name": "stdout",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "payload.warningCount > 0\t? { $flowContext(\"maaler_metadata_tablename\"): \"table exists\" }\t:\t{ $flowContext(\"maaler_metadata_tablename\"): \"table created\" }\t/*:{\"warningstatus\" : payload.warningCount}*/",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 1560,
  "y": 140,
  "wires": []
}

module.exports = Node;