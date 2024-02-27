const Node = {
  "id": "195fda731541dca6",
  "type": "debug",
  "z": "b1af099441f07c56",
  "name": "stdout",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "payload.warningCount > 0 ?\t{\t    $flowContext(\"maalepunkt_metadata_tablename\"): \"metadata insert error\",\t    \"data\": maalepunkt\t}\t:\t{\t    $flowContext(\"maalepunkt_metadata_tablename\"): \"new metadata inserted\",\t    \"data\": maalepunkt\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 1560,
  "y": 640,
  "wires": []
}

module.exports = Node;