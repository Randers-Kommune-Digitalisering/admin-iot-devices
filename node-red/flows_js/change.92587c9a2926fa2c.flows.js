const Node = {
  "id": "92587c9a2926fa2c",
  "type": "change",
  "z": "b05183ed45071965",
  "g": "901a8796f39b5fb8",
  "name": "Request values",
  "rules": [
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
    },
    {
      "t": "set",
      "p": "url",
      "pt": "msg",
      "to": "https://os2iot-backend.prod.os2iot.kmd.dk/api/v1/chirpstack/device-profiles",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 500,
  "y": 2200,
  "wires": [
    [
      "a1ab703be0131d87"
    ]
  ]
}

module.exports = Node;