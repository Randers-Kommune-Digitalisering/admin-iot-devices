const Node = {
  "id": "4e240a436fb1111a",
  "type": "function",
  "z": "7b3a886e00fb2ea6",
  "g": "0f8e00ef379b1e7c",
  "name": "Set obj",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 545,
  "y": 700,
  "wires": [
    [
      "2fce1a4fb6a5697f",
      "ac1f5c0e2e7f340b"
    ]
  ],
  "l": false
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  
    msg.payload = JSON.parse(JSON.stringify(msg.payload[0]));
    return msg;
  
}

module.exports = Node;