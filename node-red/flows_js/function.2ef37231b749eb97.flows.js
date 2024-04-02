const Node = {
  "id": "2ef37231b749eb97",
  "type": "function",
  "z": "d0465df3f1def3b2",
  "name": "Sikr type = array",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 980,
  "y": 500,
  "wires": [
    [
      "52d1d35a2c903908"
    ]
  ]
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  if (Array.isArray(msg.body))
      if(!Array.isArray(msg.body[0]))
          msg.body = [msg.body];
      
  return msg;
}

module.exports = Node;