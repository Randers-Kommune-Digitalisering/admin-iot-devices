const Node = {
  "id": "8891153565a76019",
  "type": "debug",
  "z": "b1af099441f07c56",
  "name": "stdout",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "payload.warningCount > 0\t? { $flowContext(\"maalepunkt_metadata_tablename\"): \"table exists\" }\t:\t{ $flowContext(\"maalepunkt_metadata_tablename\"): \"table created\" }\t/*:{\"warningstatus\" : payload.warningCount}*/",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 1560,
  "y": 480,
  "wires": []
}

module.exports = Node;