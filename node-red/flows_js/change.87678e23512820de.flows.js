const Node = {
  "id": "87678e23512820de",
  "type": "change",
  "z": "dc028cb1b3d1491a",
  "name": "Set response",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t    \"dbResponse\": payload,\t    \"requestBody\": requestBody\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 990,
  "y": 420,
  "wires": [
    [
      "cd65ab0f2586af8c",
      "54136ebfcd1746c7"
    ]
  ]
}

module.exports = Node;