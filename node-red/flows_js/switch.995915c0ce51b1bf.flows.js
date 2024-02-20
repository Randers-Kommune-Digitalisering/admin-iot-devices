const Node = {
  "id": "995915c0ce51b1bf",
  "type": "switch",
  "z": "6f89a22d2f227f45",
  "name": "Er data null?",
  "property": "payload[0].last_observation",
  "propertyType": "msg",
  "rules": [
    {
      "t": "neq",
      "v": "0000-00-00 00:00:00",
      "vt": "str"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 355,
  "y": 1160,
  "wires": [
    [
      "8bc2222bbe133ca5"
    ],
    [
      "88bbb7b21b2b99af"
    ]
  ],
  "l": false
}

module.exports = Node;