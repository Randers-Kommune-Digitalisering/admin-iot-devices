const Node = {
  "id": "69559ce744e99241",
  "type": "debug",
  "z": "b05183ed45071965",
  "name": "stdout",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "payload.affectedRows > 0 ?\t{\t    $globalContext(\"metadataTablename\").decoder: \"new decoder(s) inserted\",\t    \"count\": $$.payload.affectedRows,\t    \"decoderList\": $$.decoders\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 1120,
  "y": 980,
  "wires": []
}

module.exports = Node;