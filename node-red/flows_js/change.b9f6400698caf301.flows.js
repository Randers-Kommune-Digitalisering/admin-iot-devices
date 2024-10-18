const Node = {
  "id": "b9f6400698caf301",
  "type": "change",
  "z": "7459f772194dcf44",
  "g": "f5b369166b3bae03",
  "name": "Set metric is_available",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "error ~> $exists() ? 0 : 1",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "dependency_name",
      "pt": "msg",
      "to": "db",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 540,
  "y": 480,
  "wires": [
    [
      "695d15e648ac2b7a"
    ]
  ]
}

module.exports = Node;