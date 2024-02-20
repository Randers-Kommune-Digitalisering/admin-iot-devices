const Node = {
  "id": "97d4d4f82036e80d",
  "type": "change",
  "z": "7597822579cc59c2",
  "name": "Divide values for m2 conversion",
  "rules": [
    {
      "t": "set",
      "p": "data",
      "pt": "msg",
      "to": "data ~> | $.values | {\t    \"value\": value * 0.1\t} |",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 630,
  "y": 140,
  "wires": [
    []
  ]
}

module.exports = Node;