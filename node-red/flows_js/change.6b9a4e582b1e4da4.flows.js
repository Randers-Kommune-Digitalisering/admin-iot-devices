const Node = {
  "id": "6b9a4e582b1e4da4",
  "type": "change",
  "z": "7b3a886e00fb2ea6",
  "g": "39a84f62ba24489c",
  "name": "Table names",
  "rules": [
    {
      "t": "set",
      "p": "metadataTablename",
      "pt": "global",
      "to": "{}",
      "tot": "json"
    },
    {
      "t": "set",
      "p": "metadataTablename.maaler",
      "pt": "global",
      "to": "iot_device_metadata",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "metadataTablename.maalepunkt",
      "pt": "global",
      "to": "iot_metric_metadata",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "metadataTablename.lokation",
      "pt": "global",
      "to": "iot_location_metadata",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "metadataTablename.deviceprofile",
      "pt": "global",
      "to": "iot_deviceprofile_metadata",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "metadataTablename.decoder",
      "pt": "global",
      "to": "iot_decoder_metadata",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "metadataTablename.os2status",
      "pt": "global",
      "to": "iot_os2_requests",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 370,
  "y": 60,
  "wires": [
    [
      "b90841aad1d610a5"
    ]
  ]
}

module.exports = Node;