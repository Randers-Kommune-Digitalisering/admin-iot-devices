const Node = {
  "id": "b669fd093d974e14",
  "type": "inject",
  "z": "317943546a48f552",
  "name": "",
  "props": [
    {
      "p": "payload"
    },
    {
      "p": "payload.op",
      "v": "set",
      "vt": "str"
    },
    {
      "p": "payload.val",
      "v": "0",
      "vt": "num"
    }
  ],
  "repeat": "",
  "crontab": "",
  "once": false,
  "onceDelay": 0.1,
  "topic": "",
  "payload": "{}",
  "payloadType": "json",
  "x": 410,
  "y": 260,
  "wires": [
    [
      "0d39ddf86c3ca565",
      "efeda2a695d863f6"
    ]
  ]
}

module.exports = Node;