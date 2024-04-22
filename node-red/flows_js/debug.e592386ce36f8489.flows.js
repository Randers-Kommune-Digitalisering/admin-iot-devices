const Node = {
  "id": "e592386ce36f8489",
  "type": "debug",
  "z": "e4e3eef16c2dc327",
  "name": "stdout - Ingen ny data",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "{\t    data.tablename: \"no new data\",\t    \"lastDbUpdate\": payload[0].last_observation ~> $toMillis ~> $fromMillis(\"[Y0001]-[M01]-[D01] [H01]:[m01]:[s01]\"),\t    \"lastDataObservation\": (data.observedAt ~>$split('.'))[0] ~> $toMillis ~> $fromMillis(\"[Y0001]-[M01]-[D01] [H01]:[m01]:[s01]\")\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 890,
  "y": 1000,
  "wires": []
}

module.exports = Node;