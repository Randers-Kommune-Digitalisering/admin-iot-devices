const Node = {
  "id": "945537b8a39f7c29",
  "type": "change",
  "z": "b05183ed45071965",
  "name": "OS2 Request (Edit data target)",
  "rules": [
    {
      "t": "set",
      "p": "endpoint",
      "pt": "msg",
      "to": "iot-device-payload-decoder-data-target-connection",
      "tot": "str"
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
  "x": 890,
  "y": 1580,
  "wires": [
    []
  ]
}

module.exports = Node;