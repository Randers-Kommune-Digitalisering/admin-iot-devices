const Node = {
  "id": "fc612bd9cf1295bd",
  "type": "template",
  "z": "b05183ed45071965",
  "g": "7dd315ad06879230",
  "name": "Indsæt request",
  "field": "sql",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 520,
  "y": 220,
  "wires": [
    [
      "32263c924ecea94a"
    ]
  ]
}

Node.template = `
INSERT INTO
    {{global.metadataTablename.os2status}}
(
    endpoint, requestBody, method
)
VALUES
(
    '{{endpoint}}', 
    '{{{requestBody}}}',
    '{{method}}'
)

`

module.exports = Node;