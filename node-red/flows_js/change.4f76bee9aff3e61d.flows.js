const Node = {
  "id": "4f76bee9aff3e61d",
  "type": "change",
  "z": "5f6ef472b7d9e1e9",
  "name": "URL",
  "rules": [
    {
      "t": "set",
      "p": "baseurl",
      "pt": "msg",
      "to": "https://os2iot.prototypes.randers.dk/device/",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "baseurl",
      "pt": "msg",
      "to": "localhost:1880/device/",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "url",
      "pt": "msg",
      "to": "baseurl & maaler.nummer & \"/csv\"",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 470,
  "y": 600,
  "wires": [
    [
      "f71dfb4793082f44"
    ]
  ]
}

module.exports = Node;