const Node = {
  "id": "fc3a3cf4f8ec5b86",
  "type": "template",
  "z": "31eb0ab05cfa21a8",
  "name": "Forespørgsel ↓\\n Kontrollér eksisterende målepunkt-metadata",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 410,
  "y": 180,
  "wires": [
    [
      "4dadebfcd4ccefae"
    ]
  ]
}

Node.template = `
SELECT
    t1.*,
    t2.deviceUid,
    t2.deviceName,
    t2.dataTablename,
    t2.installationsnummer,
    t2.deviceEui,
    t2.deviceEnergiartskode
FROM
    {{global.metadataTablename.maalepunkt}} AS t1
    
LEFT JOIN
(
    SELECT
        uid as deviceUid,
        name as deviceName,
        energiartskode as deviceEnergiartskode,
        dataTablename,
        installationsnummer,
        deviceEui,
        isTemplate,
        templateUid
    FROM
        {{global.metadataTablename.maaler}}
    
) AS t2 
    ON t1.deviceUid = t2.templateUid
    OR t1.deviceUid = t2.deviceUid

WHERE isTemplate = 0
`

module.exports = Node;