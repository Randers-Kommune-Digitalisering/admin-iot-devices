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
      "6994c83bf48df316"
    ]
  ]
}

Node.template = `
SELECT
    t1.uid,
    t1.os2uid,
    t1.deviceProfileUid,
    t1.payloadDecoderUid,
    t2.payloadDecoderOs2Uid,
    t3.templatePayloadDecoderUid,
    t3.templateUid,
    t4.templatePayloadDecoderOs2Uid,
    t5.deviceProfileOs2Uid
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

LEFT JOIN -- template decoder uid
(
    SELECT
        uid as templateUid,
        payloadDecoderUid as templatePayloadDecoderUid
    FROM {{global.metadataTablename.maaler}}
    
) AS t3 
    ON t1.templateUid = t3.templateUid

LEFT JOIN -- template decoder os2uid
(
    SELECT
        uid,
        os2uid as templatePayloadDecoderOs2Uid
    FROM
        {{global.metadataTablename.decoder}}
) AS t4
    ON t3.templatePayloadDecoderUid = t4.uid
    
LEFT JOIN -- device profile os2uid
(
    SELECT
        uid,
        os2uid as deviceProfileOs2Uid
    FROM
        {{global.metadataTablename.deviceprofile}}
) AS t5
    ON t1.deviceProfileUid = t5.uid

WHERE
    t1.uid = {{data.uid}}
`

module.exports = Node;