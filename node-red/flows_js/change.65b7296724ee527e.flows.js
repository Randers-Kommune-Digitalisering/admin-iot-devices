const Node = {
  "id": "65b7296724ee527e",
  "type": "change",
  "z": "b05183ed45071965",
  "name": "OS2 Request (Delete device)",
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
      "to": "'iot-device/' &\tdata.os2uid",
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
  "x": 440,
  "y": 1620,
  "wires": [
    [
      "22de05e931c8d6f3"
    ]
  ]
}

module.exports = Node;