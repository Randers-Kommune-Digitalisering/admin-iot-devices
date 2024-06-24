const Node = {
  "id": "a159bc6ef3ac22b9",
  "type": "debug",
  "z": "b05183ed45071965",
  "g": "8a834a469e6df311",
  "name": "stdout",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "payload.affectedRows > 0 ?\t{\t    $globalContext(\"metadataTablename\").decoder: \"decoder(s) updated\",\t    \"count\": $$.payload.affectedRows,\t    \"decoderList\": $$.updatedItems\t}\t:\t{\t    $globalContext(\"metadataTablename\").decoder: \"no decoders updated\",\t    \"error\": $$.payload.error ~> $exists() ? $$.payload.error : $$.error\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 880,
  "y": 2300,
  "wires": []
}

module.exports = Node;