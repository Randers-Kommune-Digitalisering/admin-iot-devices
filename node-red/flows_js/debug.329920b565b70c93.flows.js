const Node = {
  "id": "329920b565b70c93",
  "type": "debug",
  "z": "bd0288d62c2263f6",
  "name": "stdout",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "payload.changedRows = 1 ?\t{\t    $flowContext(\"metadata_tablename\"): \"metadata updated\",\t    \"uid\": data.id,\t    \"observatedAt\": data.observedAt\t}\t:\t{\t    $flowContext(\"metadata_tablename\"): \"error updating metadata\"\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 880,
  "y": 1560,
  "wires": []
}

module.exports = Node;