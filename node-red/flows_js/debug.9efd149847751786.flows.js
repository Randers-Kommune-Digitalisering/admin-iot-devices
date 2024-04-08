const Node = {
  "id": "9efd149847751786",
  "type": "debug",
  "z": "b05183ed45071965",
  "name": "OS2 Request Update",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "{\t    $globalContext(\"metadataTablename\").os2status: \"reattempting request\",\t    \"timestamp\": $now(),\t    \"request\": {\t        \"uid\": insertId,\t        \"endpoint\": endpoint,\t        \"body\": requestBody,\t        \"attempt\": requestCount\t    },\t    \"requestSucces\": requestSuccessful\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 1410,
  "y": 340,
  "wires": []
}

module.exports = Node;