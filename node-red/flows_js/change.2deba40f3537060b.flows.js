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
      "to": "payload[0].os2uid",
      "tot": "jsonata",
      "dc": true
    },
    {
      "t": "set",
      "p": "data.uid",
      "pt": "msg",
      "to": "uid",
      "tot": "msg"
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
  "x": 990,
  "y": 1380,
  "wires": [
    [
      "c93f4cce19f4e6de"
    ]
  ]
}

module.exports = Node;