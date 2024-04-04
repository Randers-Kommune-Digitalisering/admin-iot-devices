const Node = {
  "id": "cbe3798f06e4aa89",
  "type": "change",
  "z": "31eb0ab05cfa21a8",
  "name": "set measurementPoint",
  "rules": [
    {
      "t": "set",
      "p": "uid",
      "pt": "msg",
      "to": "payload.uid",
      "tot": "msg",
      "dc": true
    },
    {
      "t": "set",
      "p": "measurementPoint",
      "pt": "msg",
      "to": "payload",
      "tot": "msg",
      "dc": true
    },
    {
      "t": "set",
      "p": "measurementPoint.installationsnummer",
      "pt": "msg",
      "to": "measurementPoint.installationsnummer = null ? '' : measurementPoint.installationsnummer",
      "tot": "jsonata"
    },
    {
      "t": "delete",
      "p": "payload",
      "pt": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 420,
  "y": 340,
  "wires": [
    [
      "f1a14a95bacf3c8e",
      "1d3967c7643d8778",
      "906c863fb7d24267"
    ]
  ]
}

module.exports = Node;