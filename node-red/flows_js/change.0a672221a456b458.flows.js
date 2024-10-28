const Node = {
  "id": "0a672221a456b458",
  "type": "change",
  "z": "5f6ef472b7d9e1e9",
  "name": "File",
  "rules": [
    {
      "t": "set",
      "p": "filename",
      "pt": "msg",
      "to": "deviceEui & \"_\" & $millis() & \".csv\"",
      "tot": "jsonata"
    },
    {
      "t": "move",
      "p": "payload",
      "pt": "msg",
      "to": "csv",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 550,
  "y": 380,
  "wires": [
    [
      "e52d80fed6524176",
      "0333a676fa284d93"
    ]
  ]
}

module.exports = Node;