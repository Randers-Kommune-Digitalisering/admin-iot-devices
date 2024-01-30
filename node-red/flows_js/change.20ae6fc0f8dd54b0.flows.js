const Node = {
  "id": "20ae6fc0f8dd54b0",
  "type": "change",
  "z": "b1af099441f07c56",
  "name": "JSON to CSV",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "(\t$separator := \";\";\t$linebreak := \"\\r\\n\";\t\t/* Header */\t( payload ~> $keys() ~> $join($separator) ) & $separator & $linebreak & \t\t/* Values */\t( payload ~> $map( function($v, $k)\t{\t    ( $.payload ~> $keys() ) @ $key .\t\t    ( $key in ( $v ~> $keys() ) ? \t        $v ~> $lookup($key) ~> $string\t        :\t        \"\" )\t\t    ~> $join($separator)\t})\t\t~> $join($separator & $linebreak) ) & $separator\t\t)",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 780,
  "y": 440,
  "wires": [
    [
      "ab354d79fe9547a2"
    ]
  ]
}

module.exports = Node;