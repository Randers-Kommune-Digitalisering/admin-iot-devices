const Node = {
  "id": "655f408ae860eeb0",
  "type": "function",
  "z": "1b1f52cac1d78ec2",
  "name": "Set msg",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 660,
  "y": 1420,
  "wires": [
    [
      "3bad4aa3eb0a1832"
    ]
  ]
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  msg = msg.payload;
  return msg;
}

module.exports = Node;