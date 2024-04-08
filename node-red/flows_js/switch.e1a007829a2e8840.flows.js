const Node = {
  "id": "e1a007829a2e8840",
  "type": "switch",
  "z": "b05183ed45071965",
  "g": "7dd315ad06879230",
  "name": "New device?",
  "property": "endpoint",
  "propertyType": "msg",
  "rules": [
    {
      "t": "eq",
      "v": "iot-device",
      "vt": "str"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 1,
  "x": 1630,
  "y": 400,
  "wires": [
    [
      "73e80c479439fb20"
    ]
  ]
}

module.exports = Node;