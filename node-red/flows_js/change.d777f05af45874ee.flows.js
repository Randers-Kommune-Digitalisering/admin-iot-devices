const Node = {
  "id": "d777f05af45874ee",
  "type": "change",
  "z": "e4e3eef16c2dc327",
  "name": "Sæt tabelnavn for måler",
  "rules": [
    {
      "t": "set",
      "p": "data",
      "pt": "msg",
      "to": "data ~> | $ | {\t    \"tablename\": \"iot_device_\" & deviceEui\t} |",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 810,
  "y": 400,
  "wires": [
    [
      "184ef154c3d20cc5"
    ]
  ]
}

module.exports = Node;