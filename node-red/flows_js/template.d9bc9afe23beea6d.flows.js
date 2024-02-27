const Node = {
  "id": "d9bc9afe23beea6d",
  "type": "template",
  "z": "b1af099441f07c56",
  "name": "Forespørgsel ↓\\n Opdater måler metadata",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 230,
  "y": 480,
  "wires": [
    [
      "682c49a84ddc17d5"
    ]
  ]
}

Node.template = `
UPDATE {{flow.maaler_metadata_tablename}} SET

navn = '{{maaler.navn}}',
installationsnummer = '{{maaler.installationsnummer}}',
energiartskode = {{maaler.energiartskode}}

WHERE nummer = '{{maaler.nummer}}'
`

module.exports = Node;