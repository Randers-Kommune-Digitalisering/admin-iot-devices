const Node = {
  "id": "5b5d731a2ab73a35",
  "type": "switch",
  "z": "7b3a886e00fb2ea6",
  "d": true,
  "name": "Baseret på skabelon?",
  "property": "payload.templateUid",
  "propertyType": "msg",
  "rules": [
    {
      "t": "eq",
      "v": "",
      "vt": "str"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 1,
  "x": 300,
  "y": 920,
  "wires": [
    []
  ]
}

module.exports = Node;