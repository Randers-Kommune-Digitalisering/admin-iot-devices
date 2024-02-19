const Node = {
  "id": "11fad0b2a0dac401",
  "type": "function",
  "z": "b1af099441f07c56",
  "name": "Sikr type = array",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 940,
  "y": 1240,
  "wires": [
    [
      "5575a81b81c9757e"
    ]
  ]
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  if(!Array.isArray(msg.body[0]))
      msg.body = [msg.body];
      
  return msg;
}

module.exports = Node;