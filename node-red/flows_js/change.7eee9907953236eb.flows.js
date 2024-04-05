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
      "to": "payload[0] ~> | $ | {\t    \"uid\": $$.device.uid,\t    \"deviceEui\": $$.device.deviceEui,\t    \"applicationKey\": $$.device.applicationKey,\t\t    \"name\": $$.device.name,\t    /*\"type\": $$.device.type,*/\t    /*\"deviceCategory\": $$.device.deviceCategory,*/\t    \"dateCreated\": $$.device.dateCreated,\t    \"dateFirstUsed\": $$.device.dateFirstUsed,\t    \"dateModified\": $$.device.dateModified,\t    \"rssi\": $$.device.rssi,\t    \"batteryLevel\": $$.device.batteryLevel,\t\t    \"isTemplate\": 0,\t    \"templateName\": name,\t    \"templateUid\": $$.device.templateUid,\t    \"dataTablename\": $$.device.dataTablename,\t    \"lastObservation\": $$.device.lastObservation,\t    \"lastExport\": $$.device.lastExport,\t    \"maalepunktCount\": $$.device.maalepunktCount\t\t} |",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1390,
  "y": 680,
  "wires": [
    [
      "650114e61f7a4412",
      "610bd8c41183830d"
    ]
  ]
}

module.exports = Node;