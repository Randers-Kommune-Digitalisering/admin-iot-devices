const Node = {
  "id": "7c0206c9f128cd2a",
  "type": "change",
  "z": "31eb0ab05cfa21a8",
  "name": "Forbered join",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t    \"measurementPoint\": measurementPoint,\t    \"data\": payload,\t    \"parts\": parts\t}",
      "tot": "jsonata",
      "dc": true
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 210,
  "y": 520,
  "wires": [
    [
      "fd15e90129960d14"
    ]
  ]
}

module.exports = Node;