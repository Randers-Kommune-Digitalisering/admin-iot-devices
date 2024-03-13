const Node = {
  "id": "7b67de9345b6ab41",
  "type": "change",
  "z": "31eb0ab05cfa21a8",
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
  "x": 230,
  "y": 320,
  "wires": [
    [
      "4aaa48678115483e"
    ]
  ]
}

module.exports = Node;