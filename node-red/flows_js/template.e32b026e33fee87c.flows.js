const Node = {
  "id": "e32b026e33fee87c",
  "type": "template",
  "z": "e4e3eef16c2dc327",
  "name": "Forespørgsel ↓\\n Indsæt ny data",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 440,
  "y": 1400,
  "wires": [
    [
      "bb1a3a346b108250"
    ]
  ]
}

Node.template = `
INSERT INTO {{data.tablename}}
(observedAt, type, value)
VALUES
{{{sqlvalues}}}
`

module.exports = Node;