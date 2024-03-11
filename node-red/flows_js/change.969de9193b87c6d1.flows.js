const Node = {
  "id": "969de9193b87c6d1",
  "type": "change",
  "z": "7b3a886e00fb2ea6",
  "d": true,
  "name": "",
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
      "to": "",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "payload.installationsnummer",
      "pt": "msg",
      "to": "",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "payload.energiartskode",
      "pt": "msg",
      "to": "",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "payload.lokationUid",
      "pt": "msg",
      "to": "",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "payload.deviceProfileUid",
      "pt": "msg",
      "to": "",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "payload.serviceProfileUid",
      "pt": "msg",
      "to": "",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "payload.payloadDecoderUid",
      "pt": "msg",
      "to": "",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "payload.isTemplate",
      "pt": "msg",
      "to": "",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "payload.defaultValuesTemplateUid",
      "pt": "msg",
      "to": "",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 260,
  "y": 1280,
  "wires": [
    []
  ]
}

module.exports = Node;