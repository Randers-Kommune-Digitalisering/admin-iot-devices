const Node = {
  "id": "38b260b47a74ecdd",
  "type": "change",
  "z": "b05183ed45071965",
  "name": "Sæt os2uids",
  "rules": [
    {
      "t": "set",
      "p": "data.os2uid",
      "pt": "msg",
      "to": "payload[0].os2uid",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "data.payloadDecoderOs2Uid",
      "pt": "msg",
      "to": "payload[0].payloadDecoderOs2Uid",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "data",
      "tot": "msg",
      "dc": true
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 850,
  "y": 860,
  "wires": [
    [
      "5133ab6d1a761c8e"
    ]
  ]
}

module.exports = Node;