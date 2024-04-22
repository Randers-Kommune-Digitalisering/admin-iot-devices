const Node = {
  "id": "84e9652093b5e435",
  "type": "debug",
  "z": "e4e3eef16c2dc327",
  "name": "stdout",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "payload.changedRows = 1 ?\t{\t    $globalContext(\"metadataTablename.maaler\"): \"metadata updated\",\t    \"deviceEui\": data.deviceEui,\t    \"observatedAt\": data.observedAt\t}\t:\t{\t    $globalContext(\"metadataTablename.maaler\"): \"error updating metadata\",\t    \"error\": error\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 920,
  "y": 1600,
  "wires": []
}

module.exports = Node;