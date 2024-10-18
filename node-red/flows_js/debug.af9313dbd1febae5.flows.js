const Node = {
  "id": "af9313dbd1febae5",
  "type": "debug",
  "z": "7459f772194dcf44",
  "name": "Retries failed",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "\"All retries failed for \" & tablename & \" query: \\n\" & sql",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 1040,
  "y": 240,
  "wires": []
}

module.exports = Node;