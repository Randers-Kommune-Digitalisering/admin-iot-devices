const Node = {
  "id": "a4bcb65caba039e5",
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
      "p": "data.deviceProfileOs2Uid",
      "pt": "msg",
      "to": "payload[0].deviceProfileOs2Uid",
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
  "x": 990,
  "y": 1080,
  "wires": [
    [
      "61be1130af410857"
    ]
  ]
}

module.exports = Node;