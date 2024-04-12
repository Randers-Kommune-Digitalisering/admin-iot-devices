const Node = {
  "id": "825743a244f3b18e",
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
      "tot": "msg",
      "dc": true
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1040,
  "y": 1200,
  "wires": [
    [
      "a9a0a2b36d1eaa72"
    ]
  ]
}

module.exports = Node;