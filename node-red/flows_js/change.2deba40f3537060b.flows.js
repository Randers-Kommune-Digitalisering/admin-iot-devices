const Node = {
  "id": "2deba40f3537060b",
  "type": "change",
  "z": "b05183ed45071965",
  "name": "Sæt os2uid",
  "rules": [
    {
      "t": "set",
      "p": "data.os2uid",
      "pt": "msg",
      "to": "payload.os2uid",
      "tot": "jsonata",
      "dc": true
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 990,
  "y": 1500,
  "wires": [
    []
  ]
}

module.exports = Node;