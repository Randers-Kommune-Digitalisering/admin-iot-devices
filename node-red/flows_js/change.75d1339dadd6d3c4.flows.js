const Node = {
  "id": "75d1339dadd6d3c4",
  "type": "change",
  "z": "b1af099441f07c56",
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
  "x": 330,
  "y": 1080,
  "wires": [
    [
      "a75a59a356c482e1"
    ]
  ]
}

module.exports = Node;