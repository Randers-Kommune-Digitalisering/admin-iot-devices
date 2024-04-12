const Node = {
  "id": "e1a007829a2e8840",
  "type": "switch",
  "z": "b05183ed45071965",
  "g": "7dd315ad06879230",
  "name": "Add/Edit device?",
  "property": "endpoint = 'iot-device' and (method = 'PUT' or method = 'POST')",
  "propertyType": "jsonata",
  "rules": [
    {
      "t": "true"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 1,
  "x": 1690,
  "y": 400,
  "wires": [
    [
      "73e80c479439fb20"
    ]
  ]
}

module.exports = Node;