const Node = {
  "id": "23c270ac095889d9",
  "type": "function",
  "z": "1b1f52cac1d78ec2",
  "name": "Convert units",
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
  "y": 780,
  "wires": [
    [
      "b2887d435b12c492"
    ]
  ]
}

Node.func = async function (node, msg, RED, context, flow, global, env, util, convert) {
  msg.payload = Array.isArray(msg.payload) ? msg.payload[0] : msg.payload;
  
  const value = 1;
  
  // Return if units are the same
  
  if (msg.payload.inputenhed === msg.payload.enhed)
      msg.payload = value;
  
  else
  try
  {
      // Try converting value
  
      msg.payload = convert(value).from(msg.payload.inputenhed).to(msg.payload.enhed);
  }
  catch (error)
  {
      msg.payload = value;
      msg.error = error;
  }
  
  return msg;
}

module.exports = Node;