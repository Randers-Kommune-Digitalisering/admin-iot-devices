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
      "to": "payload ~> $type() = \"array\" and\tpayload ~> $count() > 0 ?\t\t    \"WHERE observedAt > '\" & payload[0].lastPull & \"'\"\t:   \"WHERE observedAt > '\" & $fromMillis($millis()-2592000000) & \"'\"",
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
  "x": 1400,
  "y": 340,
  "wires": [
    [
      "7cbed5f41338246d"
    ]
  ]
}

module.exports = Node;