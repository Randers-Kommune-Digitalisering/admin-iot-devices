const Node = {
  "id": "eadb3187e8310568",
  "type": "template",
  "z": "b1af099441f07c56",
  "name": "Forespørgsel ↓\\n Indsæt målepunkt metadata",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 980,
  "y": 640,
  "wires": [
    [
      "994af279b41bd835"
    ]
  ]
}

Node.template = `
INSERT INTO {{flow.maalepunkt_metadata_tablename}}
(maalernummer, titel, type, datakey, energiartskode, typekode)
VALUES
('{{maaler.nummer}}',
'{{maalepunkt.title}}',
'{{maalepunkt.type}}',
'{{maalepunkt.key}}',
{{maalepunkt.artskode}},
{{maalepunkt.typekode}});
`

module.exports = Node;