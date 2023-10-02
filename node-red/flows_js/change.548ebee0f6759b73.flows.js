const Node = {
  "id": "548ebee0f6759b73",
  "type": "change",
  "z": "6f89a22d2f227f45",
  "name": "Fjern specialkarakterer fra \\n tabelnavne for data",
  "rules": [
    {
      "t": "set",
      "p": "data",
      "pt": "msg",
      "to": "data ~> | $ | {\t    \"tablename\": \"os2iot_\" & id ~> $replace(\"-\", \"_\")\t} |",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 830,
  "y": 540,
  "wires": [
    [
      "4f2f86b1edfcf8e2"
    ]
  ],
  "_order": 57
}

module.exports = Node;