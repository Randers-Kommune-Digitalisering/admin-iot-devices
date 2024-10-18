const Node = {
  "id": "4370572af6e58e63",
  "type": "switch",
  "z": "78f25d49af5c6439",
  "name": "",
  "property": "config.currentRetryAttempt",
  "propertyType": "msg",
  "rules": [
    {
      "t": "gte",
      "v": "1",
      "vt": "num"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 190,
  "y": 100,
  "wires": [
    [
      "6c7c743d5b7e2aab"
    ],
    [
      "3d995f447af30ece"
    ]
  ]
}

module.exports = Node;