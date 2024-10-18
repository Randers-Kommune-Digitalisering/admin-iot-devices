const Node = {
  "id": "14d55e4f7266a331",
  "type": "function",
  "z": "7b3a886e00fb2ea6",
  "g": "c73500befce19fee",
  "name": "Set obj",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 675,
  "y": 1680,
  "wires": [
    [
      "35276f802d3a2cf7"
    ]
  ],
  "l": false
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  
  if(Array.isArray(msg.payload))
      msg.payload = JSON.parse(JSON.stringify(msg.payload[0]));
  return msg;
}

module.exports = Node;