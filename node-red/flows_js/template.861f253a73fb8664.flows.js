const Node = {
  "id": "861f253a73fb8664",
  "type": "template",
  "z": "b05183ed45071965",
  "name": "Find os2uid for device",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 420,
  "y": 860,
  "wires": [
    [
      "7b9e5a103a38d74e"
    ]
  ]
}

Node.template = `
SELECT
    t1.uid,
    t1.os2uid,
    t1.payloadDecoderUid,
    t2.payloadDecoderOs2Uid,
    t3.templatePayloadDecoderUid,
    t3.templateUid,
    t4.templatePayloadDecoderOs2Uid
FROM
    {{global.metadataTablename.maaler}} as t1

LEFT JOIN
(
    SELECT
        uid,
        os2uid as payloadDecoderOs2Uid
    FROM
        {{global.metadataTablename.decoder}}
) AS t2
    ON t1.payloadDecoderUid = t2.uid

LEFT JOIN -- template data
(
    SELECT
        uid as templateUid,
        payloadDecoderUid as templatePayloadDecoderUid
    FROM {{global.metadataTablename.maaler}}
    
) AS t3 
    ON t1.templateUid = t3.templateUid

LEFT JOIN
(
    SELECT
        uid,
        os2uid as templatePayloadDecoderOs2Uid
    FROM
        {{global.metadataTablename.decoder}}
) AS t4
    ON t3.templatePayloadDecoderUid = t4.uid

WHERE
    t1.uid = {{data.uid}}
`

module.exports = Node;