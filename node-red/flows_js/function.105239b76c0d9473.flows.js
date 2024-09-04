const Node = {
  "id": "105239b76c0d9473",
  "type": "function",
  "z": "31eb0ab05cfa21a8",
  "name": "Sikr type = array",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 520,
  "y": 1240,
  "wires": [
    [
      "eecc2bdd5d8ff8a4"
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