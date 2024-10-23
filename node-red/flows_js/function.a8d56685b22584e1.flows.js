const Node = {
  "id": "a8d56685b22584e1",
  "type": "function",
  "z": "1b1f52cac1d78ec2",
  "name": "Convertible?",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [
    {
      "var": "convert",
      "module": "convert-units"
    }
  ],
  "x": 590,
  "y": 880,
  "wires": [
    [
      "b2887d435b12c492"
    ]
  ]
}

Node.func = async function (node, msg, RED, context, flow, global, env, util, convert) {
  
    msg.payload = Array.isArray(msg.payload) ? msg.payload[0] : msg.payload;
    
    // True if units are the same
    
    if (msg.payload.inputenhed === msg.payload.enhed)
        msg.payload = true;
    
    else
    try
    {
        // Try converting 1 unit
    
        msg.payload = convert(1).from(msg.payload.inputenhed).to(msg.payload.enhed);
        msg.payload = true;
    }
    catch (error)
    {
        msg.error = error;
        msg.payload = false;
    }
    
    return msg;
  
}

module.exports = Node;