const Node = {
  "id": "9b49a82b74178a0a",
  "type": "change",
  "z": "fa50bce83191652b",
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