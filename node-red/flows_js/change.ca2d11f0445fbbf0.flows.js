const Node = {
  "id": "ca2d11f0445fbbf0",
  "type": "change",
  "z": "bd0288d62c2263f6",
  "name": "Fjern specialkarakterer fra \\n tabelnavne for data",
  "rules": [
    {
      "t": "set",
      "p": "data",
      "pt": "msg",
      "to": "data ~> | $ | {\t    \"tablename\": \"iot_device_\" & id ~> $replace(\"-\", \"_\")\t} |",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 830,
  "y": 540,
  "wires": [
    [
      "1ffd5ba09f89ea36"
    ]
  ]
}

module.exports = Node;