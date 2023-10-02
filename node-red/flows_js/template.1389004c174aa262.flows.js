const Node = {
  "id": "1389004c174aa262",
  "type": "template",
  "z": "6f89a22d2f227f45",
  "name": "Forespørgsel ↓\\n Indsæt ny data",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 800,
  "y": 1360,
  "wires": [
    [
      "0d5c40542398a9c2"
    ]
  ],
  "_order": 54
}

Node.template = `
INSERT INTO {{data.tablename}}
(observedAt, type, value)
VALUES
{{{sqlvalues}}}
`

module.exports = Node;