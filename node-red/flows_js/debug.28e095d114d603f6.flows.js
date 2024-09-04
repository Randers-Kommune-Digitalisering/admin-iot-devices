const Node = {
  "id": "28e095d114d603f6",
  "type": "debug",
  "z": "31eb0ab05cfa21a8",
  "name": "Måler til eksport",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "$merge([payload.device,\t{\t    \"measurementPoints\": payload.measurementPoints.name,\t    \"dataCount\": payload.data ~> $count()\t}])",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 230,
  "y": 720,
  "wires": []
}

module.exports = Node;