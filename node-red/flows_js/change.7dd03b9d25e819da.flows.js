const Node = {
  "id": "7dd03b9d25e819da",
  "type": "change",
  "z": "b05183ed45071965",
  "name": "Frasorter lokale dekodere",
  "rules": [
    {
      "t": "set",
      "p": "decoders",
      "pt": "msg",
      "to": "decoders[id in $$.payload.os2uid = false]",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 790,
  "y": 240,
  "wires": [
    [
      "9b0c5991c3a03aad"
    ]
  ]
}

module.exports = Node;