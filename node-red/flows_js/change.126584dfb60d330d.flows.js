const Node = {
  "id": "126584dfb60d330d",
  "type": "change",
  "z": "b05183ed45071965",
  "g": "86f9a4f3efc9aad9",
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
      "p": "endpoint",
      "pt": "msg",
      "to": "endpoint ~> $replace(\"&#x2F;\", \"/\")",
      "tot": "jsonata"
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
  "x": 190,
  "y": 500,
  "wires": [
    [
      "ce655379d3931feb"
    ]
  ]
}

module.exports = Node;