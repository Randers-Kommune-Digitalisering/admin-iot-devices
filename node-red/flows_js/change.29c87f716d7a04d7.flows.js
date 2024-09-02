const Node = {
  "id": "29c87f716d7a04d7",
  "type": "change",
  "z": "1b1f52cac1d78ec2",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "(\t  $dataObject := function($index)\t  {\t        (\t            $index := $index+1;\t            {\t                \"id\": \"device-010f64001\",\t                \"deviceEui\": testdeveui,\t                \"observedAt\": ((\"2024-03-22T11:58:52.710Z\" ~> $toMillis()) + (3600000 * $index)) ~> $fromMillis(),\t                \"values\": [\t                    {\t                        \"type\": \"Active_Energy_Import_T1\",\t                        \"value\": 1949785 + (($random() * 100) ~> $ceil()) + (100 * $index)\t                    }\t                ],\t                \"rssi\": -92 - (($random() * 6) ~> $ceil()),\t                \"batteryLevel\": -1\t            }\t        )\t  };\t  $map([0..(datasetSize - 1)], function($v, $i, $a) { $dataObject($i) })\t)\t",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1020,
  "y": 420,
  "wires": [
    [
      "d4dae76e643e3741"
    ]
  ]
}

module.exports = Node;