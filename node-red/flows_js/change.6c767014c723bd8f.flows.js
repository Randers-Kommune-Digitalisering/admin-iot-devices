const Node = {
  "id": "6c767014c723bd8f",
  "type": "change",
  "z": "b1af099441f07c56",
  "name": "Konvertering til \\n EnergyKey standard-format",
  "rules": [
    {
      "t": "set",
      "p": "header",
      "pt": "msg",
      "to": "(\t    $getValue := function( $maalepunkt, $key )\t    {        \t        /* Ved maalepunktsdata */\t        ($key ~> $split(\".\"))[0] = \"maalepunkt\" ?\t            $maalepunkt ~> $lookup( ($key ~> $split(\".\"))[1] )\t        :\t        ($key ~> $split(\".\"))[0] = \"maaler\" ?\t            $$.maaler ~> $lookup( ($key ~> $split(\".\"))[1] )\t        :\t        ($key ~> $split(\".\"))[0] = \"data\" ?\t\t            ($key ~> $split(\".\"))[1] = \"value\" ?\t\t                $$.payload ~> $lookup( ($key ~> $split(\".\"))[1] )\t        \t    };\t\t    $n := template.header.col ~> $count;\t\t    /* Set base header from template */\t    ( template.header.col ) @ $col .\t    {\t        \"col\": $col,\t        \"value\": $.template.header[ $col in col ].value ~> $exists() ?\t                    \t                    \"#\" & ( null ~> $getValue( $.template.header[ $col in col ].value ) )\t                    /*$.maaler ~> $lookup( $.template.header[ $col in col ].value )*/\t    }\t\t    /* Set headers for values from templates and maalepunkter */\t    ~> $append\t    (\t        maalepunkter @ $value # $id .\t\t        template.values @ $template . \t        {\t            \"col\": $n + $template.col + ( $id * 3 ),\t            \"value\": $value ~> $getValue( $template.valueHeader ),\t            \t            \"test\": $value ~> $lookup( $template.valueHeader )\t        }\t        \t    )\t)",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "body",
      "pt": "msg",
      "to": "payload @ $reading .\t\t[[\t(\t    $n := template.body ~> $count;\t\t    template.body @ $col .\t    {\t        \"col\": $col.col\t    }\t\t    ~> $append\t    (\t        maalepunkter @ $value # $id .\t\t        template.values @ $template . \t        {\t            \"col\": $n + $template.col + ( $id * 3 ),\t            \"value\": $template.valueData ~> $exists() ?\t            \t                $reading ~> $lookup( $value.key )\t                :\t                $value ~> $lookup( $template.valueTemplate )\t        }\t        \t    )\t)\t]]",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1080,
  "y": 880,
  "wires": [
    []
  ]
}

module.exports = Node;