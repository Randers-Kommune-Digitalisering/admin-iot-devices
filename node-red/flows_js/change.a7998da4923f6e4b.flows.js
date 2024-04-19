const Node = {
  "id": "a7998da4923f6e4b",
  "type": "change",
  "z": "e4e3eef16c2dc327",
  "g": "59e528a1f2157f89",
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
  "x": 400,
  "y": 80,
  "wires": [
    []
  ]
}

module.exports = Node;