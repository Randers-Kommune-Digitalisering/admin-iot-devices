const Node = {
  "id": "88af6f771c7f780f",
  "type": "change",
  "z": "b1af099441f07c56",
  "name": "Konvertering til \\n EnergyKey standard-format",
  "rules": [
    {
      "t": "set",
      "p": "header",
      "pt": "msg",
      "to": "(\t    $n := template.header.col ~> $count;\t\t    /* Set base header from template */\t    ( template.header.col ) @ $col .\t    {\t        \"col\": $col,\t\t        \"value\": $.template.header[ $col in col ].value ~> $exists() ?\t        \t                    \"#\" & ( $\t                    ~> $lookup( $.template.header[ $col in col ].value.obj )\t                    ~> $lookup( $.template.header[ $col in col ].value.key ) )\t    }\t\t    /* Set headers for values from templates and maalepunkter */\t    ~> $append\t    (\t        maalepunkter @ $value # $id .\t\t        template.values @ $template . \t        {\t            \"col\": $n + $template.col + ( $id * 3 ),\t\t            \"value\": $template.valueHeader.obj = \"@maalepunkt\" ?\t\t                        $value ~> $lookup( $template.valueHeader.key )\t                        \t                    : $$\t                        ~> $lookup( $template.valueHeader.obj )\t                        ~> $lookup( $template.valueHeader.key )\t        }\t        \t    )\t)",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "body",
      "pt": "msg",
      "to": "payload @ $reading .\t\t[[\t(\t    $n := template.body ~> $count;\t\t    template.body @ $col .\t    {\t        \"col\": $col.col,\t        \"value\": $col.value.obj = \"@maalepunkt\" ?\t\t                        $value ~> $lookup( $col.value.key )\t                    \t                    : $col.value.obj = \"@data\" ?\t\t                        $col.value.key = \"@key\" ?\t                            $reading ~> $lookup( $value.key )\t                        :\t                            $reading ~> $lookup( $col.value.key )\t                        \t                    : $$\t                        ~> $lookup( $col.value.obj )\t                        ~> $lookup( $col.value.key )\t    }\t\t    ~> $append\t    (\t        maalepunkter @ $value # $id .\t\t        template.values @ $template . \t        {\t            \"col\": $n + $template.col + ( $id * 3 ),\t            \"value\": $template.valueBody.obj = \"@maalepunkt\" ?\t\t                        $value ~> $lookup( $template.valueBody.key )\t                    \t                    : $template.valueBody.obj = \"@data\" ?\t\t                        $template.valueBody.key = \"@key\" ?\t                            $reading ~> $lookup( $value.key )\t                        :\t                            $reading ~> $lookup( $template.valueBody.key )\t                        \t                    : $$\t                        ~> $lookup( $template.valueBody.obj )\t                        ~> $lookup( $template.valueBody.key )\t        }\t        \t    )\t)\t]]",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1040,
  "y": 960,
  "wires": [
    [
      "5575a81b81c9757e"
    ]
  ]
}

module.exports = Node;