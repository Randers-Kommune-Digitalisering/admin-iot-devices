const Node = {
  "id": "4298c7311190156b",
  "type": "switch",
  "z": "5f6ef472b7d9e1e9",
  "name": "Dev env?",
  "property": "DEV_ENV",
  "propertyType": "env",
  "rules": [
    {
      "t": "neq",
      "v": "true",
      "vt": "str"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 1,
  "x": 480,
  "y": 1300,
  "wires": [
    [
      "38017fda042e2eab"
    ]
  ]
}

module.exports = Node;