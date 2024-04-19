const Node = {
  "id": "47c64b42632879bb",
  "type": "debug",
  "z": "e4e3eef16c2dc327",
  "name": "stdout",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "payload ~> $count() > 0 ?\t{\t    data.deviceEui: \"device is registered\",\t    \"lastObservation\": payload[0].lastObservation = \"0000-00-00 00:00:00\" ?\t                        \"no observation\" : payload[0].lastObservation\t}\t:\t{\t    data.deviceEui: \"device is NOT registered\"\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 860,
  "y": 580,
  "wires": []
}

module.exports = Node;