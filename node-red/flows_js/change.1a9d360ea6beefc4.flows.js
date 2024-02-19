const Node = {
  "id": "1a9d360ea6beefc4",
  "type": "change",
  "z": "330fa4345482a521",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "limit",
      "pt": "msg",
      "to": "payload ~> $type() = \"array\" and\tpayload ~> $count() > 0 ?\t\t    \"WHERE observedAt > '\" & payload[0].lastPull & \"'\"\t:   \"LIMIT 1000\"",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 790,
  "y": 420,
  "wires": [
    [
      "98b198f1405b691e"
    ]
  ]
}

module.exports = Node;