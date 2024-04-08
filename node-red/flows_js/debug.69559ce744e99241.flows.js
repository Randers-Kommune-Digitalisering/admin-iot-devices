const Node = {
  "id": "69559ce744e99241",
  "type": "debug",
  "z": "b05183ed45071965",
  "g": "901a8796f39b5fb8",
  "name": "stdout",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "payload.affectedRows > 0 ?\t{\t    $globalContext(\"metadataTablename\").decoder: \"new decoder(s) inserted\",\t    \"count\": $$.payload.affectedRows,\t    \"decoderList\": $$.decoders\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 1100,
  "y": 1660,
  "wires": []
}

module.exports = Node;