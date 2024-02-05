const Node = {
  "id": "e2f8bb00df5fdbcb",
  "type": "change",
  "z": "b1af099441f07c56",
  "name": "Replace \"-\"",
  "rules": [
    {
      "t": "set",
      "p": "maaler.navn",
      "pt": "msg",
      "to": "maaler.navn ~> $replace(\"-\", \"_\")",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "maaler.nummer",
      "pt": "msg",
      "to": "maaler.navn ~> $replace(\"-\", \"_\")",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 770,
  "y": 1620,
  "wires": [
    [
      "d3d6553ead498af3"
    ]
  ]
}

module.exports = Node;