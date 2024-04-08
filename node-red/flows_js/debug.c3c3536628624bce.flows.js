const Node = {
  "id": "c3c3536628624bce",
  "type": "debug",
  "z": "b05183ed45071965",
  "name": "New OS2 Request",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "{\t    $globalContext(\"metadataTablename\").os2status: \"request updated\",\t    \"timestamp\": $now(),\t    \"request\": {\t        \"uid\": insertId,\t        \"endpoint\": endpoint,\t        \"body\": requestBody\t    }\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 1400,
  "y": 160,
  "wires": []
}

module.exports = Node;