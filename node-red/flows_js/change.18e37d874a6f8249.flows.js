const Node = {
  "id": "18e37d874a6f8249",
  "type": "change",
  "z": "7b3a886e00fb2ea6",
  "g": "0f8e00ef379b1e7c",
  "name": "Sæt værdier for alle målere",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "payload @ $device # $index .\t{\t    \"appKey\": $device.appKey,\t    \"devEui\": $device.devEui,\t    \"installationsnummer\": $device.installationsnummer,\t\t    \"name\": $$.payload[0].name & \" \" & ($index+1),\t    \"energiart\": $$.payload[0].energiart,\t    \"deviceProfile\": $$.payload[0].deviceProfile,\t    \"payloadDecoder\": $$.payload[0].payloadDecoder,\t\t    \"isTemplate\": false,\t    \"templateUid\": $$.payload[0].templateUid\t}",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "requestBody",
      "pt": "msg",
      "to": "payload",
      "tot": "msg",
      "dc": true
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 600,
  "y": 840,
  "wires": [
    [
      "b04a741215eebdb7"
    ]
  ]
}

module.exports = Node;