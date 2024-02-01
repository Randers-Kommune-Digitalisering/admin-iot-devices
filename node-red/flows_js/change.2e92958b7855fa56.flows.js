const Node = {
  "id": "2e92958b7855fa56",
  "type": "change",
  "z": "b1af099441f07c56",
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
  "x": 760,
  "y": 680,
  "wires": [
    [
      "8d8378d4931c91f7"
    ]
  ]
}

module.exports = Node;