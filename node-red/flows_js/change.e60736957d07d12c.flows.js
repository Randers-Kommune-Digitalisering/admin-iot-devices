const Node = {
  "id": "e60736957d07d12c",
  "type": "change",
  "z": "7b3a886e00fb2ea6",
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
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 230,
  "y": 80,
  "wires": [
    [
      "b90841aad1d610a5"
    ]
  ]
}

module.exports = Node;