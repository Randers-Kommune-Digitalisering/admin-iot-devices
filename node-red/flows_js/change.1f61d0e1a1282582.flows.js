const Node = {
  "id": "1f61d0e1a1282582",
  "type": "change",
  "z": "b05183ed45071965",
  "g": "7dd315ad06879230",
  "name": "Forbered forespørgsel",
  "rules": [
    {
      "t": "set",
      "p": "endpoint",
      "pt": "msg",
      "to": "payload.endpoint",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "requestBody",
      "pt": "msg",
      "to": "payload.requestBody",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "insertId",
      "pt": "msg",
      "to": "payload.uid",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "requestCount",
      "pt": "msg",
      "to": "payload.requestCount",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1060,
  "y": 360,
  "wires": [
    [
      "9efd149847751786",
      "c697fb072b04cafe"
    ]
  ]
}

module.exports = Node;