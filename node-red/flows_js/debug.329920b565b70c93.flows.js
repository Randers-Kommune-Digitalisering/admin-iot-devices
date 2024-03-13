const Node = {
  "id": "329920b565b70c93",
  "type": "debug",
  "z": "bd0288d62c2263f6",
  "name": "stdout",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "payload.changedRows = 1 ?\t{\t    $globalContext(\"metadataTablename.maaler\"): \"metadata updated\",\t    \"deviceEui\": data.deviceEui,\t    \"observatedAt\": data.observedAt\t}\t:\t{\t    $globalContext(\"metadataTablename.maaler\"): \"error updating metadata\",\t    \"error\": error\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 720,
  "y": 1540,
  "wires": []
}

module.exports = Node;