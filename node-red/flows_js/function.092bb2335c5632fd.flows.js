const Node = {
  "id": "092bb2335c5632fd",
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
  "y": 2540,
  "wires": [
    [
      "f6c00f8410763722"
    ]
  ]
}

Node.func = async function (node, msg, RED, context, flow, global, env, util, convert) {
  // Ensure type object
  msg.payload = Array.isArray(msg.payload) ? msg.payload[0] : msg.payload;
  
  // Return if units are the same
  if (msg.startUnit != msg.unit)
  
  // Manual conversion for pulse
  if(msg.startUnit == "puls")
  
      try {
          msg.payload.value = msg.payload.value * msg.pulsEnhedRatio;
      }
      catch(error)
      {
          msg.payload.unit = msg.startUnit;
          msg.error = error;
      }
  
  // Automatic conversion for normal units
  if(msg.unit != "puls")
  
      try {
          msg.payload.value = convert(msg.payload.value).from(msg.startUnit).to(msg.unit);
      }
      catch (error) {
          msg.payload.unit = msg.startUnit;
          msg.error = error;
      }
  
  return msg;
}

module.exports = Node;