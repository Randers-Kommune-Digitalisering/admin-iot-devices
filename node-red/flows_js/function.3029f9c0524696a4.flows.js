const Node = {
  "id": "3029f9c0524696a4",
  "type": "function",
  "z": "31eb0ab05cfa21a8",
  "name": "Sæt msg",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 360,
  "y": 720,
  "wires": [
    [
      "dfeb676634b2fb1e"
    ]
  ]
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  msg = msg.payload;
  return msg;
}

module.exports = Node;