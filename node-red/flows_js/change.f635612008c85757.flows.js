const Node = {
  "id": "f635612008c85757",
  "type": "change",
  "z": "b1af099441f07c56",
  "name": "Konvertering til \\n EnergyKey standard-format",
  "rules": [
    {
      "t": "set",
      "p": "header",
      "pt": "msg",
      "to": "(\t    $n := template.header.col ~> $count;\t\t    /* Set base header from template */\t    ( template.header.col ) @ $col .\t    {\t        \"col\": $col,\t        \"value\": $.template.header[ $col in col ].value ~> $exists() ?\t                    \t                    \"#\" & ( $ ~> $lookup( $.template.header[ $col in col ].value ) )\t    }\t\t    /* Set headers for values from templates and maalepunkter */\t    ~> $append\t    (\t        maalepunkter @ $value # $id .\t\t        template.values @ $template . \t        {\t            \"col\": $n + $template.col + ( $id * 3 ),\t            \"value\": $value ~> $lookup( $template.value )\t        }\t        \t    )\t)",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "body",
      "pt": "msg",
      "to": "(\t    $n := template.body ~> $count;\t\t    template.body @ $col .\t    {\t        \"col\": $col.col\t    }\t\t    ~> $append\t    (\t        maalepunkter @ $value # $id .\t\t        template.values @ $template . \t        {\t            \"col\": $n + $template.col + ( $id * 3 ),\t            \"value\": $value ~> $lookup( $template.value )\t        }\t        \t    )\t)",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1280,
  "y": 760,
  "wires": [
    [
      "608fa82e404a9071"
    ]
  ]
}

module.exports = Node;