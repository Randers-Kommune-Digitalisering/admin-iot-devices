const Node = {
  "id": "49cad4d3d05c13ed",
  "type": "change",
  "z": "1b1f52cac1d78ec2",
  "name": "Testdata",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "[\t   {\t       \"appKey\":\"de9ad4f466f45536d13e9527787ce8aa\",\t       \"devEui\": testdeveui,\t       \"name\":\"Emu El-måler Grønhøjskolen\",\t       \"energiart\":0,\t       \"deviceProfile\":3,\t       \"payloadDecoder\":1,\t       \"isTemplate\":false,\t       \"templateUid\":1\t   }\t]",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 400,
  "y": 480,
  "wires": [
    [
      "2377d286150de930",
      "ae9956f328944159"
    ]
  ]
}

module.exports = Node;