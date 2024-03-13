const Node = {
  "id": "c98e3202f8672c4b",
  "type": "switch",
  "z": "bd0288d62c2263f6",
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
      "0c99847146884cfe"
    ],
    [
      "b24c79cd47aced44"
    ]
  ],
  "l": false
}

module.exports = Node;