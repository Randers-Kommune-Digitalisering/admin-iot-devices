const Node = {
  "id": "452deceb0c5abb36",
  "type": "debug",
  "z": "b05183ed45071965",
  "g": "7dd315ad06879230",
  "name": "OS2 Request Update",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "{\t    $globalContext(\"metadataTablename\").os2status: \"request updated\",\t    \"timestamp\": $now(),\t    \"request\": {\t        \"uid\": insertId,\t        \"endpoint\": endpoint,\t        \"method\": method,\t        \"body\": requestBody,\t        \"attempt\": requestCount\t    },\t    \"requestSucces\": requestSuccessful = 1,\t    \"response\": requestSuccessful = 0 ? response\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 1670,
  "y": 320,
  "wires": []
}

module.exports = Node;