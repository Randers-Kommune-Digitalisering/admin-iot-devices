const Node = {
  "id": "907e271134188e4c",
  "type": "debug",
  "z": "6f89a22d2f227f45",
  "name": "stdout",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "{\t    \"os2iot\": \"new incoming API request\",\t    \"iot_deviceCount\": payload ~> $count(),\t    \"iot_deviceList\": payload ~> $map( function($v)\t        {\t            $v.id\t        }) ~> $join,\t    \"timestamp\": $now()\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 520,
  "y": 180,
  "wires": [],
  "_order": 67
}

module.exports = Node;