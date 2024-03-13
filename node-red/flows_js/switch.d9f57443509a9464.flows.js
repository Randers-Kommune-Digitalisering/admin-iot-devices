const Node = {
  "id": "d9f57443509a9464",
  "type": "switch",
  "z": "bd0288d62c2263f6",
  "name": "Kontroller last_obs",
  "property": "payload[0].last_observation",
  "propertyType": "msg",
  "rules": [
    {
      "t": "nnull"
    },
    {
      "t": "null"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 210,
  "y": 1180,
  "wires": [
    [
      "c98e3202f8672c4b"
    ],
    [
      "b24c79cd47aced44"
    ]
  ]
}

module.exports = Node;