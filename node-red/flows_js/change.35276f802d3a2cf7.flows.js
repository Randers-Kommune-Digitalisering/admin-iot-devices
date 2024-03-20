const Node = {
  "id": "35276f802d3a2cf7",
  "type": "change",
  "z": "7b3a886e00fb2ea6",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "templateUid",
      "pt": "msg",
      "to": "payload.templateUid != -1 ? payload[0].templateUid",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "whereClause",
      "pt": "msg",
      "to": "templateUid ~> $exists() ? 'deviceUid = ' & devUid & ' OR deviceUid = ' & templateUid :  'deviceUid = ' & devUid",
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
  "x": 720,
  "y": 1720,
  "wires": [
    [
      "f93a874dcf53e163",
      "9875efa66077ed45"
    ]
  ]
}

module.exports = Node;