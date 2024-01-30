const Node = {
  "id": "98208561b43e4223",
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
  "x": 880,
  "y": 180,
  "wires": [
    [
      "aa2875bc3c03b82c"
    ]
  ]
}

module.exports = Node;