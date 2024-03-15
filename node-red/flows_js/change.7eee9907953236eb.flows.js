const Node = {
  "id": "7eee9907953236eb",
  "type": "change",
  "z": "7b3a886e00fb2ea6",
  "name": "Læs data \\n fra skabelon",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "payload[0] ~> | $ | {\t    \"uid\": $$.sensor.uid,\t    \"name\": $$.sensor.name,\t    \"deviceEui\": $$.sensor.deviceEui,\t    \"applicationKey\": $$.sensor.applicationKey,\t    \"isTemplate\": 0,\t    \"defaultValuesTemplateUid\": $$.sensor.defaultValuesTemplateUid,\t    \"dataTablename\": $$.sensor.dataTablename,\t    \"lastObservation\": $$.sensor.lastObservation,\t    \"templateName\": name\t} |",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1390,
  "y": 620,
  "wires": [
    [
      "650114e61f7a4412",
      "610bd8c41183830d"
    ]
  ]
}

module.exports = Node;