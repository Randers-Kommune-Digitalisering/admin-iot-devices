const Node = {
  "id": "cc6a19093947b872",
  "type": "template",
  "z": "7b3a886e00fb2ea6",
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
    t2.templateName,
    IFNULL(t3.maalepunktCount, 0) + IFNULL(t4.maalepunktCount, 0) as maalepunktCount,
    t5.lastExport
FROM
    {{global.metadataTablename.maaler}} AS t1
    
LEFT JOIN -- template uid + name
(
    SELECT
        uid as templateUid,
        name as templateName
    FROM {{global.metadataTablename.maaler}}
    
) AS t2 
    ON t1.templateUid = t2.templateUid

LEFT JOIN -- maalepunktCount
(
    SELECT
        deviceUid,
        COUNT(*) as maalepunktCount
    FROM {{global.metadataTablename.maalepunkt}}
    GROUP BY deviceUid
    
) AS t3
    ON t1.uid = t3.deviceUid

LEFT JOIN -- maalepunktCount
(
    SELECT
        deviceUid,
        COUNT(*) as maalepunktCount
    FROM {{global.metadataTablename.maalepunkt}}
    GROUP BY deviceUid
    
) AS t4
    ON t1.templateUid = t4.deviceUid

LEFT JOIN -- lastExport
(
    SELECT
        deviceUid,
        MAX(lastExport) as lastExport
    FROM {{global.metadataTablename.maalepunkt}}
    GROUP BY deviceUid
) AS t5
    ON t1.uid = t5.deviceUid
`

module.exports = Node;