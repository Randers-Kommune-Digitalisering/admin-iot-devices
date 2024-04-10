const Node = {
  "id": "7db6dacd239767fd",
  "type": "change",
  "z": "b05183ed45071965",
  "name": "OS2 Request (Set data target)",
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
      "to": "POST",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 450,
  "y": 940,
  "wires": [
    [
      "12ac204fd434b930"
    ]
  ]
}

module.exports = Node;