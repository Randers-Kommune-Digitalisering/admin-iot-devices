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
  "x": 1130,
  "y": 1240,
  "wires": [
    [
      "2f6a8821fb022cdf"
    ]
  ]
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  try {
      msg.payload = msg.payload.trim();
  }
  catch (error)
  {
      msg.error = error;
  }
  return msg;
}

module.exports = Node;