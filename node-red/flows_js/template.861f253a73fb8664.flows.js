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
      "63612eb55b70f953"
    ]
  ]
}

Node.template = `
SELECT
    t1.uid,
    t1.os2uid,
    t1.payloadDecoderUid,
    t2.payloadDecoderOs2Uid
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

WHERE
    t1.uid = {{data.uid}}
`

module.exports = Node;