const Node = {
  "id": "d34ba657b40cba17",
  "type": "change",
  "z": "1b1f52cac1d78ec2",
  "d": true,
  "name": "Testdata",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t   \"id\": \"device-010f65\",\t   \"deviceEui\": testdeveui,\t   \"observedAt\": \"2024-03-23T09:58:52.710Z\",\t   \"values\": [\t       {\t           \"type\": \"Active_Energy_Import_T1\",\t           \"value\": 2015155        \t       }    \t   ],\t   \"rssi\": -94,\t   \"batteryLevel\": -1\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 640,
  "y": 420,
  "wires": [
    [
      "0b9646d8e3ed38d1"
    ]
  ]
}

module.exports = Node;