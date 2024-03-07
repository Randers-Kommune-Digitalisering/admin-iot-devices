const Node = {
  "id": "f37bec277b341965",
  "type": "change",
  "z": "7b3a886e00fb2ea6",
  "name": "test",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{}",
      "tot": "json"
    },
    {
      "t": "set",
      "p": "payload.navn",
      "pt": "msg",
      "to": "",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "payload.nummer",
      "pt": "msg",
      "to": "1",
      "tot": "num"
    },
    {
      "t": "set",
      "p": "payload.installationsnummer",
      "pt": "msg",
      "to": "2",
      "tot": "num"
    },
    {
      "t": "set",
      "p": "payload.energiartskode",
      "pt": "msg",
      "to": "3",
      "tot": "num"
    },
    {
      "t": "set",
      "p": "payload.lokationUid",
      "pt": "msg",
      "to": "",
      "tot": "num"
    },
    {
      "t": "set",
      "p": "payload.deviceProfileUid",
      "pt": "msg",
      "to": "",
      "tot": "num"
    },
    {
      "t": "set",
      "p": "payload.serviceProfileUid",
      "pt": "msg",
      "to": "",
      "tot": "num"
    },
    {
      "t": "set",
      "p": "payload.payloadDecoderUid",
      "pt": "msg",
      "to": "",
      "tot": "num"
    },
    {
      "t": "set",
      "p": "payload.isTemplate",
      "pt": "msg",
      "to": "true",
      "tot": "bool"
    },
    {
      "t": "set",
      "p": "payload.defaultValuesTemplateUid",
      "pt": "msg",
      "to": "",
      "tot": "num"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 230,
  "y": 520,
  "wires": [
    [
      "583c5f3470f2b61e",
      "432ec4d75972fe00"
    ]
  ]
}

module.exports = Node;