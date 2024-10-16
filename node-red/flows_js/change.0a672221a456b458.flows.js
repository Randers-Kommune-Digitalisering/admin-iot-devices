const Node = {
  "id": "0a672221a456b458",
  "type": "change",
  "z": "5f6ef472b7d9e1e9",
  "name": "File",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t   \"filename\": \"Energimonitorering/\" & deviceEui & \"_\" & $millis() & \".csv\",\t   \"filedata\": payload \t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 590,
  "y": 380,
  "wires": [
    [
      "e52d80fed6524176",
      "0333a676fa284d93"
    ]
  ]
}

module.exports = Node;