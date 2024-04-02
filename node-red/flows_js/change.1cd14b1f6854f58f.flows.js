const Node = {
  "id": "1cd14b1f6854f58f",
  "type": "change",
  "z": "d0465df3f1def3b2",
  "name": "Opsætning af datapunkter",
  "rules": [
    {
      "t": "set",
      "p": "maalepunkter",
      "pt": "msg",
      "to": "payload @ $p .\t    {\t        \"title\": $p.titel,\t        \"key\": $p.datakey,\t        \"type\": $p.type,\t        \"artskode\": $p.energiartskode,\t        \"typekode\": $p.typekode\t    }\t",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 370,
  "y": 380,
  "wires": [
    [
      "b879a2e670a40830"
    ]
  ]
}

module.exports = Node;