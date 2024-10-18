const Node = {
  "id": "f45d502f925d5d93",
  "type": "template",
  "z": "7b3a886e00fb2ea6",
  "g": "04f711f641c46bbb",
  "name": "Select template \\n med Uid",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 380,
  "y": 1400,
  "wires": [
    [
      "19a17d5c01f40e52"
    ]
  ]
}

Node.template = `
SELECT *,
    DATE_FORMAT(dateCreated, '%Y-%m-%dT%H:%i:%s.000Z') as dateCreated,
    DATE_FORMAT(dateFirstUsed, '%Y-%m-%dT%H:%i:%s.000Z') as dateFirstUsed,
    DATE_FORMAT(dateModified, '%Y-%m-%dT%H:%i:%s.000Z') as dateModified
    
FROM {{global.metadataTablename.maaler}} WHERE isTemplate = true AND uid = '{{uid}}'
`

module.exports = Node;