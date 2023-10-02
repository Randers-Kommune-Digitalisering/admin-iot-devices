const Node = {
  "id": "3bfbf1d97bb9f254",
  "type": "debug",
  "z": "6f89a22d2f227f45",
  "name": "stdout - Ingen ny data",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "{\t    data.tablename: \"no new data\",\t    \"lastDbUpdate\": payload[0].last_observation ~> $toMillis ~> $fromMillis(\"[Y0001]-[M01]-[D01] [H01]:[m01]:[s01]\"),\t    \"lastDataObservation\": (data.observedAt ~>$split('.'))[0] ~> $toMillis ~> $fromMillis(\"[Y0001]-[M01]-[D01] [H01]:[m01]:[s01]\")\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 910,
  "y": 1160,
  "wires": [],
  "_order": 57
}

module.exports = Node;