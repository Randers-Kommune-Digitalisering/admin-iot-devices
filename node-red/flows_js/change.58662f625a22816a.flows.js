const Node = {
  "id": "58662f625a22816a",
  "type": "change",
  "z": "dc028cb1b3d1491a",
  "name": "Params",
  "rules": [
    {
      "t": "set",
      "p": "uid",
      "pt": "msg",
      "to": "req.params.uid",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "deviceUid",
      "pt": "msg",
      "to": "req.params.device",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 640,
  "y": 1100,
  "wires": [
    [
      "cf91229f325e4297"
    ]
  ]
}

module.exports = Node;