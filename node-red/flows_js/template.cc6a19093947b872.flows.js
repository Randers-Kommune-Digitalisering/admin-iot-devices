const Node = {
  "id": "cc6a19093947b872",
  "type": "template",
  "z": "7b3a886e00fb2ea6",
  "g": "0f8e00ef379b1e7c",
  "name": "Select alle devices",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 250,
  "y": 540,
  "wires": [
    [
      "0997bd3fd2b806e2"
    ]
  ]
}

Node.template = `
SELECT
    t1.*,
    IF(
        GREATEST(IFNULL(t3.lastExport, 0), IFNULL(t4.lastExport, 0)) = 0,
        null,
        GREATEST(IFNULL(t3.lastExport, 0), IFNULL(t4.lastExport, 0)) ) as lastExport,
    t3.controlledProperty,
    t3.unit,
    IFNULL(t2.energiartskode, t1.energiartskode) as energiartskode,
    t2.templateName,
    IFNULL(t3.maalepunktCount, 0) + IFNULL(t4.maalepunktCount, 0) as maalepunktCount
FROM
    {{global.metadataTablename.maaler}} AS t1
    
LEFT JOIN -- template data
(
    SELECT
        uid as templateUid,
        name as templateName,
        energiartskode
    FROM {{global.metadataTablename.maaler}}
    
) AS t2 
    ON t1.templateUid = t2.templateUid

LEFT JOIN -- measurementPoint data
(
    SELECT
        deviceUid,
        COUNT(*) as maalepunktCount,
        MAX(lastExport) as lastExport,
        controlledProperty,
        enhed as unit
    FROM {{global.metadataTablename.maalepunkt}}
    GROUP BY deviceUid
    
) AS t3
    ON t1.uid = t3.deviceUid

LEFT JOIN -- template measurementPoints data
(
    SELECT
        deviceUid,
        COUNT(*) as maalepunktCount,
        MAX(lastExport) as lastExport
    FROM {{global.metadataTablename.maalepunkt}}
    GROUP BY deviceUid
    
) AS t4
    ON t1.templateUid = t4.deviceUid

ORDER BY t1.isTemplate DESC, t1.templateUid DESC, t1.uid DESC 
`

module.exports = Node;