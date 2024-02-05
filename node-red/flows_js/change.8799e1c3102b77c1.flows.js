const Node = {
  "id": "8799e1c3102b77c1",
  "type": "change",
  "z": "b1af099441f07c56",
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
  "x": 340,
  "y": 1120,
  "wires": [
    [
      "cc1acf0a83433594"
    ]
  ]
}

module.exports = Node;