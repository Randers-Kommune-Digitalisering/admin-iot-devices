const Node = {
  "id": "f95e2f77935ea754",
  "type": "change",
  "z": "1b1f52cac1d78ec2",
  "name": "Parse JSON",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "payload\t~> $replace(\"'\", \"\\\"\")\t~> $replace(\"True\", \"true\")\t~> $replace(\"Frue\", \"false\")",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "payload ~> $eval()",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 490,
  "y": 1420,
  "wires": [
    [
      "655f408ae860eeb0"
    ]
  ]
}

module.exports = Node;