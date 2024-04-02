const Node = {
  "id": "d22ebccbb88ad72e",
  "type": "change",
  "z": "dc028cb1b3d1491a",
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
  "x": 1360,
  "y": 1020,
  "wires": [
    [
      "cdbd07824c37db3c"
    ]
  ]
}

module.exports = Node;