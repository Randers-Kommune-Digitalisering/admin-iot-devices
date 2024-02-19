const Node = {
  "id": "e092d1ec211d8b17",
  "type": "debug",
  "z": "5f6ef472b7d9e1e9",
  "name": "stdout",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "{\t    $flowContext(\"maaler_metadata_tablename\"): \"data export requested\",\t    \"sensorCount\": payload ~> $count(),\t    \"sensorList\": payload   \t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 1100,
  "y": 360,
  "wires": []
}

module.exports = Node;