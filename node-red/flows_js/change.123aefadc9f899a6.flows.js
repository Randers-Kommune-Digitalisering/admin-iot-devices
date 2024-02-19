const Node = {
  "id": "123aefadc9f899a6",
  "type": "change",
  "z": "5f6ef472b7d9e1e9",
  "name": "Opsætning af \\n metadata tabelnavne",
  "rules": [
    {
      "t": "set",
      "p": "maaler_metadata_tablename",
      "pt": "flow",
      "to": "energykey_maaler_metadata",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "maalepunkt_metadata_tablename",
      "pt": "flow",
      "to": "energykey_maalepunkt_metadata",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 340,
  "y": 400,
  "wires": [
    [
      "2cc8f51067018631"
    ]
  ]
}

module.exports = Node;