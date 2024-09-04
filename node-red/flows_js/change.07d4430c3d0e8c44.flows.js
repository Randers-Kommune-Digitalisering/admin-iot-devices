const Node = {
  "id": "07d4430c3d0e8c44",
  "type": "change",
  "z": "31eb0ab05cfa21a8",
  "name": "Sæt msg",
  "rules": [
    {
      "t": "set",
      "p": "device",
      "pt": "msg",
      "to": "payload.device",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "measurementPoints",
      "pt": "msg",
      "to": "payload.measurementPoints",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "payload.data",
      "tot": "msg"
    },
    {
      "t": "delete",
      "p": "uid",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "deviceUid",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "name",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "unit",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "startUnit",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "pulsEnhedRatio",
      "pt": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 560,
  "y": 660,
  "wires": [
    [
      "01ab5004a8911130"
    ]
  ]
}

module.exports = Node;