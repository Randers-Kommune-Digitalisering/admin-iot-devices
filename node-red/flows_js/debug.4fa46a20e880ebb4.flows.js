const Node = {
  "id": "4fa46a20e880ebb4",
  "type": "debug",
  "z": "bd0288d62c2263f6",
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
  "wires": []
}

module.exports = Node;