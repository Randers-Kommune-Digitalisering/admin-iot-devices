const Node = {
  "id": "60fa95bf6fa112b1",
  "type": "debug",
  "z": "bd0288d62c2263f6",
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
  "x": 1130,
  "y": 760,
  "wires": []
}

module.exports = Node;