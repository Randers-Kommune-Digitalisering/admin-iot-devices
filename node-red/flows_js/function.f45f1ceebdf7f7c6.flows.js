const Node = {
  "id": "f45f1ceebdf7f7c6",
  "type": "function",
  "z": "bd0288d62c2263f6",
  "name": "Rens svar",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 420,
  "y": 120,
  "wires": [
    [
      "2c6f75247b3c49be"
    ]
  ]
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  let payload = msg.payload;
  let res = msg.res;
  
  msg = {};
  msg.res = res;
  msg.payload = payload;
  
  return msg;
}

module.exports = Node;