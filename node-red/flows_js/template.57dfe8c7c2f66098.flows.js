const Node = {
  "id": "57dfe8c7c2f66098",
  "type": "template",
  "z": "7b3a886e00fb2ea6",
  "g": "0f8e00ef379b1e7c",
  "name": "Select device",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 230,
  "y": 700,
  "wires": [
    [
      "00152d6dbca958e1"
    ]
  ]
}

Node.template = `
SELECT
    t1.*,
    t3.lastExport,
    t3.controlledProperty,
    t3.unit,
    IFNULL(t2.energiartskode, t1.energiartskode) as energiartskode,
    t2.templateName,
    IFNULL(t3.maalepunktCount, 0) + IFNULL(t4.maalepunktCount, 0) as maalepunktCount,
    t5.deviceCount
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
        COUNT(*) as maalepunktCount
    FROM {{global.metadataTablename.maalepunkt}}
    GROUP BY deviceUid
    
) AS t4
    ON t1.templateUid = t4.deviceUid
    
LEFT JOIN -- count of devices based on template
(
    SELECT
        templateUid,
        COUNT(*) as deviceCount
    FROM {{global.metadataTablename.maaler}}
    GROUP BY templateUid
) as t5
    ON t1.uid = t5.templateUid
    
WHERE uid = {{uid}}
`

module.exports = Node;