const Node = {
  "id": "2596f518255035c3",
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
      "to": "https://os2iot-backend.prod.os2iot.kmd.dk/api/v1/payload-decoder?limit=1000",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 500,
  "y": 1820,
  "wires": [
    [
      "124eeb32753bdd30"
    ]
  ]
}

module.exports = Node;