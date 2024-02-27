const Node = {
  "id": "ba0a06c78b183eb7",
  "type": "template",
  "z": "b1af099441f07c56",
  "name": "Forespørgsel ↓\\n Opdater målepunkt metadata",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 220,
  "y": 740,
  "wires": [
    [
      "dd760c44338d8174"
    ]
  ]
}

Node.template = `
UPDATE {{flow.maalepunkt_metadata_tablename}} SET

titel = '{{maalepunkt.title}}',
type = '{{maalepunkt.type}}',
datakey = '{{maalepunkt.key}}',
energiartskode = {{maalepunkt.artskode}},
typekode = {{maalepunkt.typekode}}

WHERE maalernummer = '{{maaler.nummer}}'
`

module.exports = Node;