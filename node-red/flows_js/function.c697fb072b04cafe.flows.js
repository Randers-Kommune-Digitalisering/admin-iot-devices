const Node = {
  "id": "c697fb072b04cafe",
  "type": "function",
  "z": "b05183ed45071965",
  "g": "7dd315ad06879230",
  "name": "Parse",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 1250,
  "y": 360,
  "wires": [
    [
      "78a419d353762b11"
    ]
  ]
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  msg.requestBody = JSON.parse(JSON.stringify(msg.requestBody));
  return msg;
}

module.exports = Node;