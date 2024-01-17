const Node = {
  "id": "c8517b17e93c29da",
  "type": "change",
  "z": "6f89a22d2f227f45",
  "name": "Opsætning af \\n metadata tabelnavn",
  "rules": [
    {
      "t": "set",
      "p": "metadata_tablename",
      "pt": "flow",
      "to": "os2iot_metadata",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 550,
  "y": 120,
  "wires": [
    [
      "5626c6c9bb4e43fb"
    ]
  ]
}

module.exports = Node;