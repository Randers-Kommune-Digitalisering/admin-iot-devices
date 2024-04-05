const Node = {
  "id": "a5865f6046b914ac",
  "type": "function",
  "z": "7b3a886e00fb2ea6",
  "name": "Sikr objekt",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 170,
  "y": 980,
  "wires": [
    [
      "e9ad151549bce9b9",
      "c97f0a470b12b5a3"
    ]
  ]
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  msg.payload = Array.isArray(msg.payload) ? msg.payload[0] : msg.payload;
  return msg;
}

module.exports = Node;