const Node = {
  "id": "df53e884252ae877",
  "type": "switch",
  "z": "fa50bce83191652b",
  "name": "",
  "property": "productType",
  "propertyType": "msg",
  "rules": [
    {
      "t": "eq",
      "v": "pulse",
      "vt": "str"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 390,
  "y": 160,
  "wires": [
    [
      "9b49a82b74178a0a"
    ],
    [
      "a2309004d0abe959"
    ]
  ]
}

module.exports = Node;