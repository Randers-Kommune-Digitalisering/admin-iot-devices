const Node = {
  "id": "f8d88b8513b636d1",
  "type": "function",
  "z": "b1af099441f07c56",
  "name": "Slice",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 590,
  "y": 960,
  "wires": [
    [
      "3599cd499c7ce2d4"
    ]
  ]
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  msg.length = msg.payload.length;
  
  msg.payload = msg.payload.slice(0, 1000);
  
  return msg;
}

module.exports = Node;