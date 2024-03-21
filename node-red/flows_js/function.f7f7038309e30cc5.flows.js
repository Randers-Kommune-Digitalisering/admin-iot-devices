const Node = {
  "id": "f7f7038309e30cc5",
  "type": "function",
  "z": "7b3a886e00fb2ea6",
  "name": "Sikr array",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 160,
  "y": 800,
  "wires": [
    [
      "9f4ad71f76a13a20"
    ]
  ]
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  msg.payload = Array.isArray(msg.payload) ? msg.payload : [msg.payload];
  return msg;
}

module.exports = Node;