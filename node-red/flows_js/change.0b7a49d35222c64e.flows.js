const Node = {
  "id": "0b7a49d35222c64e",
  "type": "change",
  "z": "b1af099441f07c56",
  "name": "URL",
  "rules": [
    {
      "t": "set",
      "p": "url",
      "pt": "msg",
      "to": "\"localhost:1880/sensor/\" & maalerNavn",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 530,
  "y": 760,
  "wires": [
    [
      "28740381ed59925f"
    ]
  ]
}

module.exports = Node;