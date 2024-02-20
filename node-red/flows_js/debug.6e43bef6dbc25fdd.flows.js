const Node = {
  "id": "6e43bef6dbc25fdd",
  "type": "debug",
  "z": "b1af099441f07c56",
  "name": "stdout",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "payload.warningCount > 0 ?\t{\t    $flowContext(\"maaler_metadata_tablename\"): \"metadata insert error\",\t    \"data\": maaler\t}\t:\t{\t    $flowContext(\"maaler_metadata_tablename\"): \"new metadata inserted\",\t    \"data\": maaler\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 1560,
  "y": 380,
  "wires": []
}

module.exports = Node;