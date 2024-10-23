const Node = {
  "id": "4de06047340580c8",
  "type": "function",
  "z": "b05183ed45071965",
  "g": "8a834a469e6df311",
  "name": "Sikr type array",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 660,
  "y": 2200,
  "wires": [
    [
      "77dcd43c99867c11"
    ]
  ]
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  
    if(!Array.isArray(msg.payload))
        msg.payload = [msg.payload];
        
    return msg;
  
}

module.exports = Node;