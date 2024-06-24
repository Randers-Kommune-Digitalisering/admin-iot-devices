const Node = {
  "id": "7dd03b9d25e819da",
  "type": "change",
  "z": "b05183ed45071965",
  "g": "8a834a469e6df311",
  "name": "Sortér dekodere",
  "rules": [
    {
      "t": "set",
      "p": "updatedItems",
      "pt": "msg",
      "to": "decoders[id in $$.payload.os2uid = true and name in $$.payload.name = false]",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "newItems",
      "pt": "msg",
      "to": "decoders[id in $$.payload.os2uid = false]",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "deletedItems",
      "pt": "msg",
      "to": "payload[os2uid in $$.decoders.id = false]",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 560,
  "y": 1940,
  "wires": [
    [
      "4a91e726001d06ef"
    ]
  ]
}

module.exports = Node;