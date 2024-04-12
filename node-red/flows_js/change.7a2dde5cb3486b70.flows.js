const Node = {
  "id": "7a2dde5cb3486b70",
  "type": "change",
  "z": "b05183ed45071965",
  "name": "Set data target connection id",
  "rules": [
    {
      "t": "set",
      "p": "data.dataTargetConnectionOs2uid",
      "pt": "msg",
      "to": "payload.data[$$.data.os2uid in iotDevices.id].id",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "data",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1040,
  "y": 1460,
  "wires": [
    [
      "6b9afc7369bdc33f",
      "f9f79a6d3d99260e"
    ]
  ]
}

module.exports = Node;