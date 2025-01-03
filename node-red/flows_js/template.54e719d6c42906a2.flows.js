const Node = {
  "id": "54e719d6c42906a2",
  "type": "template",
  "z": "7b3a886e00fb2ea6",
  "g": "e26a157813bbe7fb",
  "name": "Select deviceUid, \\n propertyName &  \\n dataTablename",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 230,
  "y": 2800,
  "wires": [
    [
      "959b8c5936f6e263"
    ]
  ]
}

Node.template = `
SELECT
    t1.deviceUid,
    t1.propertyName,
    t1.enhed as unit,
    t1.inputenhed as startUnit,
    t1.pulsEnhedRatio,
    t1.name,
    t2.dataTablename
FROM 
    {{global.metadataTablename.maalepunkt}} AS t1

LEFT JOIN -- data table name from device data
(
    SELECT
        uid,
        templateUid,
        dataTablename
    FROM {{global.metadataTablename.maaler}}
    
) AS t2 
    ON t1.deviceUid = t2.templateUid
    OR t1.deviceUid = t2.uid

WHERE t1.uid = {{uid}}
  AND t2.uid = {{deviceUid}}
`

module.exports = Node;