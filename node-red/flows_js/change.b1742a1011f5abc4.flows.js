const Node = {
  "id": "b1742a1011f5abc4",
  "type": "change",
  "z": "5f6ef472b7d9e1e9",
  "name": "Opsætning af \\n metadata tabelnavn",
  "rules": [
    {
      "t": "set",
      "p": "metadata_tablename",
      "pt": "flow",
      "to": "sftp_metadata",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 330,
  "y": 320,
  "wires": [
    [
      "77e5be3851c6c08c"
    ]
  ]
}

module.exports = Node;