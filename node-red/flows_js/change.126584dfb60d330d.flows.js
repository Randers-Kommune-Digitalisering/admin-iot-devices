const Node = {
  "id": "126584dfb60d330d",
  "type": "change",
  "z": "b05183ed45071965",
  "g": "7dd315ad06879230",
  "name": "URL",
  "rules": [
    {
      "t": "set",
      "p": "baseurl",
      "pt": "msg",
      "to": "os2config.url",
      "tot": "global",
      "dc": true
    },
    {
      "t": "set",
      "p": "url",
      "pt": "msg",
      "to": "baseurl & endpoint",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 210,
  "y": 380,
  "wires": [
    [
      "ce655379d3931feb"
    ]
  ]
}

module.exports = Node;