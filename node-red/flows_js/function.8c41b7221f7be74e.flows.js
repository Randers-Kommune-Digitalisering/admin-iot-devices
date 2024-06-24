const Node = {
  "id": "8c41b7221f7be74e",
  "type": "function",
  "z": "7b3a886e00fb2ea6",
  "g": "e26a157813bbe7fb",
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
  "x": 1450,
  "y": 2820,
  "wires": [
    [
      "1e6f41a409d134e7"
    ]
  ]
}

Node.func = async function (node, msg, RED, context, flow, global, env, util, convert) {
  // Ensure type array
  msg.payload = Array.isArray(msg.payload) ? msg.payload : [msg.payload];
  
  // Return if units are the same
  if (msg.startUnit != msg.unit)
  
  // For each data point
  for(let i = 0; i < msg.payload.length; i++)
  {
      console.log("I: " + i);
      console.log("Pre val: " + msg.payload[i].value);
      
      // Manual conversion for pulse
      if (msg.startUnit == "puls")
  
          try {
              msg.payload[i].value = msg.payload[i].value * msg.pulsEnhedRatio;
          }
          catch (error) {
              msg.payload[i].unit = msg.startUnit;
              msg.error = error;
          }
  
      // Automatic conversion for normal units
      else if (msg.startUnit != msg.unit)
  
          try {
              msg.payload[i].value = convert(msg.payload[i].value).from(msg.startUnit).to(msg.unit);
          }
          catch (error) {
              msg.payload[i].unit = msg.startUnit;
              msg.error = error;
          }
  
  }
  
  return msg;
}

module.exports = Node;