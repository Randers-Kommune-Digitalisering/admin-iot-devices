const Node = {
  "id": "2a271cc4d8c9e079",
  "type": "change",
  "z": "31eb0ab05cfa21a8",
  "name": "Rens msg obj",
  "rules": [
    {
      "t": "set",
      "p": "deviceEui",
      "pt": "msg",
      "to": "device.eui",
      "tot": "msg"
    },
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
    },
    {
      "t": "delete",
      "p": "parts",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "sql",
      "pt": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 940,
  "y": 1240,
  "wires": [
    [
      "d96d050933c53a54"
    ]
  ]
}

module.exports = Node;