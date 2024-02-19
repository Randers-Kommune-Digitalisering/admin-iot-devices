const Node = {
  "id": "467a55f1c79cd8d4",
  "type": "template",
  "z": "b1af099441f07c56",
  "name": "Forespørgsel ↓\\n Indsæt måler metadata",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 970,
  "y": 240,
  "wires": [
    [
      "ee4f7cbdea23fd25"
    ]
  ]
}

Node.template = `
INSERT INTO {{flow.maaler_metadata_tablename}} (navn, installationsnummer, nummer, energiartskode)
VALUES
('{{maaler.navn}}', '{{maaler.installationsnummer}}', '{{maaler.nummer}}', {{maaler.energiartskode}});
`

module.exports = Node;