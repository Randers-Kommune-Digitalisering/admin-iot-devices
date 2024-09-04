const Node = {
  "id": "0c8a54e5e8b7b189",
  "type": "change",
  "z": "31eb0ab05cfa21a8",
  "name": "Split datasæt",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "(\t    $maxDataCount := 1000;\t    $dataCount := payload ~> $count();\t    $splitDatasets := ($dataCount / $maxDataCount) ~> $ceil();\t\t    $dataObject := function($index) {\t        (\t            payload # $id . (\t                $id >= $index * $maxDataCount and\t                $id < ($index +1) * $maxDataCount ? $$.payload[$id]\t            )\t        )\t    };\t    \t    $splitDatasets > 1 ?\t        $map([0..($splitDatasets - 1)], function($v, $i, $a) { $dataObject($i) })\t    : payload\t)",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 210,
  "y": 860,
  "wires": [
    [
      "a0651e5789dd4743"
    ]
  ]
}

module.exports = Node;