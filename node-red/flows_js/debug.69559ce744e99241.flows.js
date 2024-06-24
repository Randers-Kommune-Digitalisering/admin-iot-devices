const Node = {
  "id": "69559ce744e99241",
  "type": "debug",
  "z": "b05183ed45071965",
  "g": "8a834a469e6df311",
  "name": "stdout",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "payload.affectedRows > 0 ?\t{\t    $globalContext(\"metadataTablename\").decoder: \"new decoder(s) inserted\",\t    \"count\": $$.payload.affectedRows,\t    \"decoderList\": $$.newItems\t}\t:\t{\t    $globalContext(\"metadataTablename\").decoder: \"no decoders inserted\",\t    \"error\": $$.payload.error ~> $exists() ? $$.payload.error : $$.error\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 1060,
  "y": 2060,
  "wires": []
}

module.exports = Node;