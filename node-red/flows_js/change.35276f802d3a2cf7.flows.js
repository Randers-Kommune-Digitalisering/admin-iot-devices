const Node = {
  "id": "35276f802d3a2cf7",
  "type": "change",
  "z": "7b3a886e00fb2ea6",
  "g": "c73500befce19fee",
  "name": "Sæt SQL",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "payload ~> $type() = \"array\" ? payload[0] : payload",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "templateUid",
      "pt": "msg",
      "to": "payload.templateUid != -1 ? payload.templateUid",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "whereClause",
      "pt": "msg",
      "to": "templateUid ~> $exists() ?\t    'deviceUid = ' & deviceUid & ' OR deviceUid = ' & templateUid\t :  'deviceUid = ' & deviceUid",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "tablename",
      "pt": "msg",
      "to": "payload.dataTablename",
      "tot": "msg"
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
  "x": 700,
  "y": 1680,
  "wires": [
    [
      "9875efa66077ed45"
    ]
  ]
}

module.exports = Node;