const Node = {
  "id": "0fb94198e3c26829",
  "type": "template",
  "z": "5f6ef472b7d9e1e9",
  "name": "Forespørgsel ↓\\n Indsæt dataeksport metadata for måler",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 630,
  "y": 820,
  "wires": [
    [
      "1bcfd65804ab0c2d"
    ]
  ]
}

Node.template = `
INSERT INTO {{flow.metadata_tablename}}
(lastPull, maalernummer)
values (NOW(), '{{maaler.nummer}}')
`

module.exports = Node;