const Node = {
  "id": "78b521b3bc5a1b90",
  "type": "function",
  "z": "31eb0ab05cfa21a8",
  "name": "Refactoring \\n af data",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 950,
  "y": 700,
  "wires": [
    [
      "55f02e216d08ceca"
    ]
  ]
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  const transformArray = (array) => {
      // Step 1: Create an empty array to store the results
      const result = [];
  
      // Step 2: Iterate over array and populate the result array
      array.forEach(item => {
          const { observedAt, type, value } = item;
          let entry = result.find(entry => entry.observedAt === observedAt);
          if (!entry) {
              entry = { observedAt };
              result.push(entry);
          }
          entry[type] = value;
      });
  
      return result;
  };
  
  // Refactor data
  msg.payload = Array.isArray ? msg.payload : [msg.payload];
  msg.payload = transformArray(msg.payload);
  delete msg.data;
  
  return msg;
}

module.exports = Node;