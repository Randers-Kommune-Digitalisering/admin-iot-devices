const Node = {
  "id": "e50b592aaa4cbe09",
  "type": "change",
  "z": "1b1f52cac1d78ec2",
  "name": "Testdata",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t   \"id\": \"device-010f64001\",\t   \"deviceEui\": testdeveui,\t   \"observedAt\": \"2024-03-22T11:58:52.710Z\",\t   \"values\": [\t       {\t           \"type\": \"Active_Energy_Import_T1\",\t           \"value\": 1949785        \t       },\t       {\t           \"type\": \"Active_Energy_Import_T2\",\t           \"value\": 10        \t       },\t       {\t           \"type\": \"Active_Energy_Export_T1\",\t           \"value\": 0        \t       },\t       {\t           \"type\": \"Active_Energy_Export_T2\",\t           \"value\": 0        \t       },\t       {\t           \"type\": \"errorcode\",\t           \"value\": 0        \t       }    \t   ],\t   \"rssi\": -94,\t   \"batteryLevel\": -1\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 400,
  "y": 560,
  "wires": [
    [
      "0b9646d8e3ed38d1",
      "493f25c8b213c725"
    ]
  ]
}

module.exports = Node;