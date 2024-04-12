const Node = {
  "id": "045234eab82191fe",
  "type": "change",
  "z": "b05183ed45071965",
  "name": "OS2 Request (Get data target connections)",
  "rules": [
    {
      "t": "set",
      "p": "url",
      "pt": "msg",
      "to": "$globalContext(\"os2config\").url\t& 'iot-device-payload-decoder-data-target-connection?limit=10000'",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "headers",
      "pt": "msg",
      "to": "{}",
      "tot": "json"
    },
    {
      "t": "set",
      "p": "headers.x-api-key",
      "pt": "msg",
      "to": "OS2IOT_API_KEY",
      "tot": "env"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 490,
  "y": 1460,
  "wires": [
    [
      "f880dcf05175ebbf"
    ]
  ]
}

module.exports = Node;