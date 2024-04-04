const Node = {
  "id": "c5bf0122b41fa0a2",
  "type": "template",
  "z": "7b3a886e00fb2ea6",
  "name": "Select deviceUid, \\n propertyName &  \\n dataTablename",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 290,
  "y": 2600,
  "wires": [
    [
      "aa442f5455e68998"
    ]
  ]
}

Node.template = `
SELECT
    t1.deviceUid,
    t1.propertyName,
    t1.enhed as unit,
    t1.inputenhed as startUnit,
    t1.name,
    t2.dataTablename,
    t1.lastExport
FROM 
    {{global.metadataTablename.maalepunkt}} AS t1

LEFT JOIN -- data table name from device data
(
    SELECT
        uid,
        dataTablename
    FROM {{global.metadataTablename.maaler}}
    
) AS t2 
    ON t1.deviceUid = t2.uid

WHERE t1.uid = {{uid}}
`

module.exports = Node;