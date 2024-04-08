const Node = {
  "id": "fc612bd9cf1295bd",
  "type": "template",
  "z": "b05183ed45071965",
  "name": "Indsæt request",
  "field": "sql",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 580,
  "y": 120,
  "wires": [
    [
      "573dddea186f0c44"
    ]
  ]
}

Node.template = `
INSERT INTO
    {{global.metadataTablename.os2status}}
(
    endpoint, requestBody
)
VALUES
(
    '{{endpoint}}', 
    '{{requestBody}}'
)

`

module.exports = Node;