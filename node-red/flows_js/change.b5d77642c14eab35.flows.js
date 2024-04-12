const Node = {
  "id": "b5d77642c14eab35",
  "type": "change",
  "z": "b05183ed45071965",
  "name": "OS2 Request (Delete data target connection)",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "data",
      "tot": "msg",
      "dc": true
    },
    {
      "t": "set",
      "p": "endpoint",
      "pt": "msg",
      "to": "'iot-device-payload-decoder-data-target-connection/' &\tdata.dataTargetConnectionOs2uid",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "requestBody",
      "pt": "msg",
      "to": "{}",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "method",
      "pt": "msg",
      "to": "DELETE",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 490,
  "y": 1540,
  "wires": [
    [
      "268288e85ffd946c"
    ]
  ]
}

module.exports = Node;