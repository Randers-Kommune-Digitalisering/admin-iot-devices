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
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 580,
  "y": 380,
  "wires": [
    [
      "e52d80fed6524176",
      "0333a676fa284d93"
    ],
    [
      "d5e8e9267b63725a"
    ]
  ]
}

module.exports = Node;