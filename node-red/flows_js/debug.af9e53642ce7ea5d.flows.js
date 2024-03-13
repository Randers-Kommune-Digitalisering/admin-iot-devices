const Node = {
  "id": "af9e53642ce7ea5d",
  "type": "debug",
  "z": "bd0288d62c2263f6",
  "name": "stdout",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "payload ~> $count() > 0 ?\t{\t    data.deviceEui: \"device is already registered\",\t    \"lastObservation\": payload[0].lastObservation = \"0000-00-00 00:00:00\" ?\t                        \"no observation\" : payload[0].lastObservation\t}\t:\t{\t    data.deviceEui: \"device is NOT registered\"\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 880,
  "y": 520,
  "wires": []
}

module.exports = Node;