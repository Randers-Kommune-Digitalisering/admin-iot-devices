const Node = {
  "id": "fbc9ac5f7c387ec6",
  "type": "debug",
  "z": "b05183ed45071965",
  "g": "8a834a469e6df311",
  "name": "stdout",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "payload.affectedRows > 0 ?\t{\t    $globalContext(\"metadataTablename\").decoder: \"decoder(s) removed\",\t    \"count\": $$.payload.affectedRows,\t    \"decoderList\": $$.deletedItems\t}\t:\t{\t    $globalContext(\"metadataTablename\").decoder: \"no decoders removed\",\t    \"error\": $$.payload.error ~> $exists() ? $$.payload.error : $$.error\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 1060,
  "y": 2400,
  "wires": []
}

module.exports = Node;