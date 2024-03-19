const Node = {
  "id": "cb62915abe36898f",
  "type": "template",
  "z": "7b3a886e00fb2ea6",
  "d": true,
  "name": "Select device \\n med devEui",
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
    t1.uid,
    t1.created,
    t1.lastUpdate,
    t1.name,
    t1.deviceEui,
    t1.applicationKey,
    t1.installationsnummer,
    t1.energiartskode,
    t1.lokationUid,
    t1.deviceProfileUid,
    t1.serviceProfileUid,
    t1.payloadDecoderUid,
    t1.isTemplate,
    t1.defaultValuesTemplateUid,
    t1.lastObservation,
    t1.dataTablename,
    IFNULL(t2.maalepunktCount, 0) as maalepunktCount
FROM {{global.metadataTablename.maaler}} as t1

LEFT JOIN
(
    SELECT
        deviceUid,
        COUNT(*) as maalepunktCount
    FROM {{global.metadataTablename.maalepunkt}}
    GROUP BY deviceUid
    
) AS t2
    ON t1.uid = t2.deviceUid
WHERE t1.uid = {{uid}}
`

module.exports = Node;