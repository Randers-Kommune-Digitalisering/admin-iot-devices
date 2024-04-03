const Node = {
  "id": "0b7a49d35222c64e",
  "type": "change",
  "z": "b1af099441f07c56",
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
      "to": "baseurl & maaler.nummer",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 570,
  "y": 920,
  "wires": [
    [
      "51fc02586067098b"
    ]
  ]
}

module.exports = Node;