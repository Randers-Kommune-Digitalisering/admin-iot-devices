const Node = {
  "id": "81df6620061a0981",
  "type": "change",
  "z": "b1af099441f07c56",
  "name": "Opsætning af \\n metadata tabelnavn",
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
  "x": 670,
  "y": 1220,
  "wires": [
    [
      "d3d6553ead498af3"
    ]
  ]
}

module.exports = Node;