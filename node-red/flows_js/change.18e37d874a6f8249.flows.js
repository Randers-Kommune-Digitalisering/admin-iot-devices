const Node = {
  "id": "18e37d874a6f8249",
  "type": "change",
  "z": "7b3a886e00fb2ea6",
  "name": "Sæt værdier for alle målere",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "payload @ $device # $index .\t{\t    \"appKey\": $device.appKey,\t    \"devEui\": $device.devEui,\t\t    \"name\": $$.payload[0].name & \" \" & ($index+1),\t    \"energiart\": $$.payload[0].energiart,\t    \"serviceProfile\": $$.payload[0].serviceProfile,\t    \"payloadDecoder\": $$.payload[0].payloadDecoder,\t\t    \"isTemplate\": false,\t    \"templateUid\": $$.payload[0].templateUid\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 540,
  "y": 780,
  "wires": [
    [
      "b04a741215eebdb7"
    ]
  ]
}

module.exports = Node;