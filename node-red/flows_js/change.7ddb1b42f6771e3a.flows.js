const Node = {
  "id": "7ddb1b42f6771e3a",
  "type": "change",
  "z": "b05183ed45071965",
  "name": "OS2 Request (Edit data target connection)",
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
      "to": "{\t    \"id\": null,\t    \"iotDeviceIds\": [\t        payload.os2uid\t    ],\t    \"payloadDecoderId\": payload.payloadDecoderOs2Uid,\t    \"dataTargetId\": $globalContext(\"os2config\").dataTargetId\t}",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "method",
      "pt": "msg",
      "to": "PUT",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 490,
  "y": 1320,
  "wires": [
    [
      "317462fd17643853"
    ]
  ]
}

module.exports = Node;