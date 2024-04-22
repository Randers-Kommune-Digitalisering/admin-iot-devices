const Node = {
  "id": "c343b5b4bfbb64fd",
  "type": "debug",
  "z": "e4e3eef16c2dc327",
  "name": "stdout",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "{\t    \"os2iot\": \"new incoming API request\",\t    \"iot_deviceCount\": payload ~> $count(),\t    \"iot_deviceList\": payload ~> $map( function($v)\t        {\t            $v.deviceEui\t        }) ~> $join,\t    \"timestamp\": $now()\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 680,
  "y": 240,
  "wires": []
}

module.exports = Node;