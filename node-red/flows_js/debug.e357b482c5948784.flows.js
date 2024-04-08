const Node = {
  "id": "e357b482c5948784",
  "type": "debug",
  "z": "b05183ed45071965",
  "name": "stdout",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "payload.affectedRows > 0 ?\t{\t    $globalContext(\"metadataTablename\").decoder: \"new device profile(s) inserted\",\t    \"count\": $$.payload.affectedRows,\t    \"profileList\": $$.profiles\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 1120,
  "y": 1360,
  "wires": []
}

module.exports = Node;