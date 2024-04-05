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
      "to": "[     {         \"appKey\": \"OtaaAppKeyTest\",         \"devEui\": \"102ceffffe010f65\",         \"name\": \"Emu El-måler Grønhøjskolen\",         \"energiart\": 0,         \"deviceProfile\": 0,         \"payloadDecoder\": 0,         \"isTemplate\": false,         \"templateUid\": -1     } ]",
      "tot": "json"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 410,
  "y": 380,
  "wires": [
    [
      "2377d286150de930"
    ]
  ]
}

module.exports = Node;