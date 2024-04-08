const Node = {
  "id": "126584dfb60d330d",
  "type": "change",
  "z": "b05183ed45071965",
  "name": "URL",
  "rules": [
    {
      "t": "set",
      "p": "baseurl",
      "pt": "msg",
      "to": "https://os2iot-backend.prod.os2iot.kmd.dk/api/v1/",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "url",
      "pt": "msg",
      "to": "baseurl & endpoint",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 230,
  "y": 260,
  "wires": [
    [
      "ce655379d3931feb"
    ]
  ]
}

module.exports = Node;