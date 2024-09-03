const Node = {
  "id": "3029f9c0524696a4",
  "type": "function",
  "z": "31eb0ab05cfa21a8",
  "name": "Sæt msg",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 380,
  "y": 660,
  "wires": [
    [
      "dfeb676634b2fb1e",
      "b1d9af9b589d9240"
    ]
  ]
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  const parts = msg.parts;
  const linkSource = msg._linkSource;
  msg = msg.payload;
  msg.parts = parts;
  msg._linkSource = linkSource;
  return msg;
}

module.exports = Node;