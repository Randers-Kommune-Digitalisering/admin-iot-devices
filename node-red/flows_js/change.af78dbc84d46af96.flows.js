const Node = {
  "id": "af78dbc84d46af96",
  "type": "change",
  "z": "d0465df3f1def3b2",
  "name": "Opsætning af datasæt",
  "rules": [
    {
      "t": "set",
      "p": "maaler",
      "pt": "msg",
      "to": "{\t   \"navn\": payload[0].navn,\t   \"installationsnummer\": payload[0].installationsnummer,\t   \"nummer\": payload[0].nummer,\t   \"energiartskode\": payload[0].energiartskode\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 360,
  "y": 260,
  "wires": [
    [
      "37ade5b150da0ee7"
    ]
  ]
}

module.exports = Node;