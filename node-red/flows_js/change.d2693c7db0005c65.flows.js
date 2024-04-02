const Node = {
  "id": "d2693c7db0005c65",
  "type": "change",
  "z": "dc028cb1b3d1491a",
  "d": true,
  "name": "JSON to CSV (old)",
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
  "x": 810,
  "y": 1080,
  "wires": [
    []
  ]
}

module.exports = Node;