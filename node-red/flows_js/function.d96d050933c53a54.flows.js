const Node = {
  "id": "d96d050933c53a54",
  "type": "function",
  "z": "31eb0ab05cfa21a8",
  "name": "Trim",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 1450,
  "y": 600,
  "wires": [
    [
      "12c6fa7580dd9c5e"
    ]
  ]
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  msg.payload = msg.payload.trim();
  return msg;
}

module.exports = Node;