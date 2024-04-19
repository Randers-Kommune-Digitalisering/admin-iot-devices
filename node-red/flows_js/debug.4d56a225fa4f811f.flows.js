const Node = {
  "id": "4d56a225fa4f811f",
  "type": "debug",
  "z": "e4e3eef16c2dc327",
  "d": true,
  "name": "stdout",
  "active": true,
  "tosidebar": true,
  "console": false,
  "tostatus": false,
  "complete": "payload.warningCount > 0\t? { data.tablename: \"table exists\" }\t:\t{ data.tablename: \"table created\" }",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 1110,
  "y": 820,
  "wires": []
}

module.exports = Node;