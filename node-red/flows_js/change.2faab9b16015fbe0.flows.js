const Node = {
  "id": "2faab9b16015fbe0",
  "type": "change",
  "z": "1b1f52cac1d78ec2",
  "name": "Table names",
  "rules": [
    {
      "t": "set",
      "p": "maaler_metadata_tablename",
      "pt": "flow",
      "to": "iot_device_metadata",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "maalepunkt_metadata_tablename",
      "pt": "flow",
      "to": "iot_metric_metadata",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "lokation_metadata_tablename",
      "pt": "flow",
      "to": "iot_location_metadata",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "serviceprofile_metadata_tablename",
      "pt": "flow",
      "to": "iot_serviceprofile_metadata",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "decoder_metadata_tablename",
      "pt": "flow",
      "to": "iot_decoder_metadata",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 280,
  "y": 120,
  "wires": [
    [
      "6d1a195e4ec38396"
    ]
  ]
}

module.exports = Node;