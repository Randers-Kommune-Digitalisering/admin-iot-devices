const Node = {
  "id": "70bf149b81ccec9c",
  "type": "debug",
  "z": "6f89a22d2f227f45",
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