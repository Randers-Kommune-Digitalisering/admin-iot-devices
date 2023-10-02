const Node = {
  "id": "77c0e199e10ca28f",
  "type": "debug",
  "z": "6f89a22d2f227f45",
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
  "wires": [],
  "_order": 56
}

module.exports = Node;