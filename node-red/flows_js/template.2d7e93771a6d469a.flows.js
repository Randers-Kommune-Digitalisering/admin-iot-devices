const Node = {
  "id": "2d7e93771a6d469a",
  "type": "template",
  "z": "b1af099441f07c56",
  "name": "Forespørgsel ↓\\n Kontrollér eksisterende metadata",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 220,
  "y": 1660,
  "wires": [
    [
      "15782f0c50e57a72"
    ]
  ]
}

Node.template = `
SELECT * FROM {{flow.maalepunkt_metadata_tablename}} WHERE maalernummer = '{{maaler.nummer}}' AND datakey = '{{maalepunkt.key}}'
`

module.exports = Node;