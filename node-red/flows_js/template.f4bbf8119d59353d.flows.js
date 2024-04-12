const Node = {
  "id": "f4bbf8119d59353d",
  "type": "template",
  "z": "b05183ed45071965",
  "name": "Find os2uid for device",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 560,
  "y": 1040,
  "wires": [
    [
      "8ade3c89dcbd11aa"
    ]
  ]
}

Node.template = `
SELECT
    t1.uid,
    t1.os2uid,
    t1.payloadDecoderUid,
    t1.deviceProfileUid,
    t2.payloadDecoderOs2Uid,
    t3.deviceProfileOs2Uid
FROM
    {{global.metadataTablename.maaler}} as t1

LEFT JOIN -- decoder
(
    SELECT
        uid,
        os2uid as payloadDecoderOs2Uid
    FROM
        {{global.metadataTablename.decoder}}
) AS t2
    ON t1.payloadDecoderUid = t2.uid

LEFT JOIN -- device profile uid
(
    SELECT
        uid,
        os2uid as deviceProfileOs2Uid
    FROM
        {{global.metadataTablename.deviceprofile}}
) AS t3
    ON t1.deviceProfileUid = t3.uid

WHERE
    t1.uid = {{data.uid}}
`

module.exports = Node;