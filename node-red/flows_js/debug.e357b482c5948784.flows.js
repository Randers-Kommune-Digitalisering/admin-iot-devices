const Node = {
  "id": "e357b482c5948784",
  "type": "debug",
  "z": "b05183ed45071965",
  "g": "8a834a469e6df311",
  "name": "stdout",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "payload.affectedRows > 0 ?\t{\t    $globalContext(\"metadataTablename\").deviceprofile: \"new device profile(s) inserted\",\t    \"count\": $$.payload.affectedRows,\t    \"profileList\": $$.profiles\t}\t:\t{\t    $globalContext(\"metadataTablename\").deviceprofile: \"no device profiles inserted\",\t    \"error\": $$.payload.error ~> $exists() ? $$.payload.error : $$.error\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 1100,
  "y": 2840,
  "wires": []
}

module.exports = Node;