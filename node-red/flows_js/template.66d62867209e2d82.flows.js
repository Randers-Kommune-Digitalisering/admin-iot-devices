const Node = {
  "id": "66d62867209e2d82",
  "type": "template",
  "z": "7b3a886e00fb2ea6",
  "d": true,
  "name": "Select alle devices",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 250,
  "y": 520,
  "wires": [
    []
  ]
}

Node.template = `
SELECT
    *
FROM
    {{global.metadataTablename.maaler}} AS t1
    
LEFT JOIN
(
    SELECT
        uid as templateUid,
        name as templateName
    FROM {{global.metadataTablename.maaler}}
    
) AS t2 
    ON t1.defaultValuesTemplateUid = t2.templateUid;
`

module.exports = Node;