const Node = {
  "id": "cfe472f46471d577",
  "type": "inject",
  "z": "6f89a22d2f227f45",
  "name": "Testdata",
  "props": [
    {
      "p": "payload"
    }
  ],
  "repeat": "",
  "crontab": "",
  "once": false,
  "onceDelay": 0.1,
  "topic": "",
  "payload": "{     \"id\": \"emu-sensor_0f65\",     \"type\": \"energy-monitor\",     \"observedAt\": \"2024-01-17T13:28:34.453Z\",     \"name\": \"102CEFFFFE010F65\",     \"values\": [         {             \"type\": \"Active_Energy_Import_T1\",             \"value\": 488543         },         {             \"type\": \"Active_Energy_Import_T2\",             \"value\": 0         },         {             \"type\": \"Active_Energy_Export_T1\",             \"value\": 0         },         {             \"type\": \"Active_Energy_Export_T2\",             \"value\": 0         },         {             \"type\": \"errorcode\",             \"value\": 0         }     ] }",
  "payloadType": "json",
  "x": 140,
  "y": 80,
  "wires": [
    [
      "fbba39ec2b76bf86"
    ]
  ]
}

module.exports = Node;