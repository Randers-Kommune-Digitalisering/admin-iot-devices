const Node = {
  "id": "b8567fc92cabd328",
  "type": "debug",
  "z": "5f6ef472b7d9e1e9",
  "name": "stdout",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "payload ~> $count() > 0 ?\t{\t    $flowContext(\"metadata_tablename\"): \"metadata exists for sensor\",\t    \"sensorUid\": maaler.nummer,\t    \"lastPull\": payload[0].lastPull\t}\t:\t{\t    $flowContext(\"metadata_tablename\"): \"metadata created for sensor\",\t    \"sensorUid\": maaler.nummer\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 1120,
  "y": 640,
  "wires": []
}

module.exports = Node;