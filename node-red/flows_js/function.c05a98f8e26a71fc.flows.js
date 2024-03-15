const Node = {
  "id": "c05a98f8e26a71fc",
  "type": "function",
  "z": "dc028cb1b3d1491a",
  "name": "function 1",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 860,
  "y": 340,
  "wires": [
    [
      "d9e035c324c30412"
    ]
  ]
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  msg = msg.payload;
  return msg;
}

module.exports = Node;