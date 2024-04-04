const Node = {
  "id": "b64a200c9dfcec72",
  "type": "template",
  "z": "bd0288d62c2263f6",
  "name": "Forespørgsel ↓\\n Indsæt ny data",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 460,
  "y": 1340,
  "wires": [
    [
      "5e30a1571993d77a"
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