const Node = {
  "id": "f092bbc109c7eaf9",
  "type": "switch",
  "z": "6f89a22d2f227f45",
  "name": "",
  "property": "data.decoder",
  "propertyType": "msg",
  "rules": [
    {
      "t": "eq",
      "v": "adeunis",
      "vt": "str"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 130,
  "y": 1360,
  "wires": [
    [
      "32c63158f6618801"
    ],
    [
      "7c2c1f70ee3f6b82"
    ]
  ]
}

module.exports = Node;