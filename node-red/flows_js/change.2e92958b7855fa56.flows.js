const Node = {
  "id": "2e92958b7855fa56",
  "type": "change",
  "z": "330fa4345482a521",
  "name": "Format",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "payload ~> $lookup(( payload ~> $keys() ) [0] )",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 780,
  "y": 980,
  "wires": [
    [
      "8d8378d4931c91f7"
    ]
  ]
}

module.exports = Node;