const Node = {
  "id": "35442c093b3cfcfb",
  "type": "change",
  "z": "e4e3eef16c2dc327",
  "name": "Sæt status",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "OK",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "statusCode",
      "pt": "msg",
      "to": "200",
      "tot": "num"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 990,
  "y": 180,
  "wires": [
    [
      "45cec4b1da5d8ba3"
    ]
  ]
}

module.exports = Node;