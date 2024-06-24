const Node = {
  "id": "e36943d3b1a852fb",
  "type": "change",
  "z": "b05183ed45071965",
  "g": "8a834a469e6df311",
  "name": "SQL values",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "updatedItems @ $item . \t(\t    \"UPDATE \" & ($globalContext(\"metadataTablename\")).decoder\t    & \" SET name = '\" & $item.name & \"'\"\t    & \" WHERE os2uid =  \" & $item.id\t)",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 470,
  "y": 2200,
  "wires": [
    [
      "4de06047340580c8"
    ]
  ]
}

module.exports = Node;