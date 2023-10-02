const Node = {
  "id": "fbba39ec2b76bf86",
  "type": "function",
  "z": "6f89a22d2f227f45",
  "name": "Rens svar",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 300,
  "y": 120,
  "wires": [
    [
      "49d793e55c6ffd91"
    ]
  ],
  "_order": 68
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  let payload = msg.payload;
  
  msg = {};
  msg.payload = payload;
  
  return msg;
}

module.exports = Node;