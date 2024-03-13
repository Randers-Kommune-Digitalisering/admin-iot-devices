const Node = {
  "id": "a5a27775b6cd33cb",
  "type": "change",
  "z": "31eb0ab05cfa21a8",
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
  "x": 220,
  "y": 200,
  "wires": [
    [
      "fc3a3cf4f8ec5b86"
    ]
  ]
}

module.exports = Node;