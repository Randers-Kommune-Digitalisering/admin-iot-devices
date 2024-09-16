const Node = {
  "id": "7570a598c9903753",
  "type": "debug",
  "z": "31eb0ab05cfa21a8",
  "name": "Datapunkter indlæst",
  "active": false,
  "tosidebar": true,
  "console": false,
  "tostatus": false,
  "complete": "{\t    \"deviceUid\": measurementPoint.deviceUid,\t    \"deviceName\": measurementPoint.deviceName,\t    \"propertyName\": measurementPoint.propertyName,\t    \"dataCount\": payload ~> $count()\t\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 1080,
  "y": 340,
  "wires": []
}

module.exports = Node;