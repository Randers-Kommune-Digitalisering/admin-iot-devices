const Node = {
  "id": "dcad3154f3783f4d",
  "type": "debug",
  "z": "bd0288d62c2263f6",
  "name": "stdout",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "{\t    \"os2iot\": \"new incoming API request\",\t    \"iot_deviceCount\": payload ~> $count(),\t    \"iot_deviceList\": payload ~> $map( function($v)\t        {\t            $v.deviceEui\t        }) ~> $join,\t    \"timestamp\": $now()\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 700,
  "y": 180,
  "wires": []
}

module.exports = Node;