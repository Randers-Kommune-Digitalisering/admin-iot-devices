const Node = {
  "id": "f3b4d3cb934c06ea",
  "type": "function",
  "z": "1b1f52cac1d78ec2",
  "d": true,
  "name": "get units",
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
  "x": 380,
  "y": 1020,
  "wires": [
    [
      "9670b2c8ae7ff284"
    ]
  ]
}

Node.func = async function (node, msg, RED, context, flow, global, env, util, convert) {
  
    
    try
    {
        // Try converting 1 unit
    
        msg.payload = convert().list()
    }
    catch (error)
    {
        msg.error = error;
        msg.payload = false;
    }
    
    return msg;
  
}

module.exports = Node;