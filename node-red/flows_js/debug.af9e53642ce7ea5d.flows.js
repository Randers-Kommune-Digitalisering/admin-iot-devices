const Node = {
  "id": "af9e53642ce7ea5d",
  "type": "debug",
  "z": "bd0288d62c2263f6",
  "name": "stdout",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "payload ~> $count() > 0 ?\t{\t    $flowContext(\"metadata_tablename\"): \"metadata exists for sensor\",\t    \"sensorUid\": data.id,\t    \"lastObservation\": payload[0].last_observation\t}\t:\t{\t    $flowContext(\"metadata_tablename\"): \"metadata created for sensor\",\t    \"sensorUid\": data.id\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 880,
  "y": 720,
  "wires": []
}

module.exports = Node;