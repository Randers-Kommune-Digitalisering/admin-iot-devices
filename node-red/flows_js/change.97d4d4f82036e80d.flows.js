const Node = {
  "id": "97d4d4f82036e80d",
  "type": "change",
  "z": "7597822579cc59c2",
  "name": "Multiply values for m2 conversion",
  "rules": [
    {
      "t": "set",
      "p": "data",
      "pt": "msg",
      "to": "data ~> | $.values | {\t    \"value\": value * 10\t} |",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 640,
  "y": 140,
  "wires": [
    []
  ]
}

module.exports = Node;