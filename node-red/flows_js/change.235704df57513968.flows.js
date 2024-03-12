const Node = {
  "id": "235704df57513968",
  "type": "change",
  "z": "7b3a886e00fb2ea6",
  "name": "Saml DB svar",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t   \"fieldCount\": payload.fieldCount ~> $sum(),\t   \"affectedRows\": payload.affectedRows ~> $sum(),\t   \"insertId\": payload.insertId,\t   \"serverStatus\": payload[0].serverStatus,\t   \"warningCount\": payload.warningCount ~> $sum(),\t   \"message\": payload.message ~> $distinct(),\t   \"protocol41\": false in payload.protocol41 ? false : true,\t   \"changedRows\": payload.changedRows ~> $sum()\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1360,
  "y": 920,
  "wires": [
    [
      "78d77be38d59d605"
    ]
  ]
}

module.exports = Node;