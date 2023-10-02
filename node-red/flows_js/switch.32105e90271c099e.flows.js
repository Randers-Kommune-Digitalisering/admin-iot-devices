const Node = {
  "id": "32105e90271c099e",
  "type": "switch",
  "z": "6f89a22d2f227f45",
  "name": "Er data tom?",
  "property": "payload[0].last_observation ~> $exists()",
  "propertyType": "jsonata",
  "rules": [
    {
      "t": "false"
    },
    {
      "t": "true"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 330,
  "y": 900,
  "wires": [
    [
      "ec2eb72dd40b96e7"
    ],
    [
      "0ab6446c034b22e4"
    ]
  ],
  "_order": 40
}

module.exports = Node;