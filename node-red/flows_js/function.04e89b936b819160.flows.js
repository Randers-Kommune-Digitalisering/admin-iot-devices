const Node = {
  "id": "04e89b936b819160",
  "type": "function",
  "z": "e4e3eef16c2dc327",
  "name": "Rens svar",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 400,
  "y": 180,
  "wires": [
    [
      "961ee75b48f5fa59"
    ]
  ]
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  
    let payload = msg.payload;
    let res = msg.res;
    
    msg = {};
    msg.res = res;
    msg.payload = payload;
    
    return msg;
  
}

module.exports = Node;