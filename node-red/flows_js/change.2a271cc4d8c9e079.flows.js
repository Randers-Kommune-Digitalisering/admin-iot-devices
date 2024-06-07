const Node = {
  "id": "2a271cc4d8c9e079",
  "type": "change",
  "z": "31eb0ab05cfa21a8",
  "name": "Rens msg obj",
  "rules": [
    {
      "t": "delete",
      "p": "device",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "data",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "measurementPoints",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "template",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "header",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "body",
      "pt": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1160,
  "y": 860,
  "wires": [
    [
      "d3e0e0c6a452cf5a"
    ]
  ]
}

module.exports = Node;