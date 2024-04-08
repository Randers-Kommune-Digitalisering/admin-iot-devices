const Node = {
  "id": "7327db05440c531d",
  "type": "change",
  "z": "b05183ed45071965",
  "g": "8f0c1f26ead23f64",
  "name": "API Base URL",
  "rules": [
    {
      "t": "set",
      "p": "baseurl",
      "pt": "msg",
      "to": "https://os2iot-backend.prod.os2iot.kmd.dk/api/v1/chirpstack/service-profiles",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 560,
  "y": 2020,
  "wires": [
    [
      "c0e51d27291bbf07"
    ]
  ]
}

module.exports = Node;