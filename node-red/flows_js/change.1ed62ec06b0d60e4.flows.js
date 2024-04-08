const Node = {
  "id": "1ed62ec06b0d60e4",
  "type": "change",
  "z": "b05183ed45071965",
  "g": "3693f92d86c2d588",
  "name": "Data",
  "rules": [
    {
      "t": "set",
      "p": "os2config",
      "pt": "global",
      "to": "{}",
      "tot": "json"
    },
    {
      "t": "set",
      "p": "os2config.url",
      "pt": "global",
      "to": "https://os2iot-backend.prod.os2iot.kmd.dk/api/v1/",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "os2config.appId",
      "pt": "msg",
      "to": "167",
      "tot": "num"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 390,
  "y": 60,
  "wires": [
    [
      "b2e962250d1c6f55"
    ]
  ]
}

module.exports = Node;