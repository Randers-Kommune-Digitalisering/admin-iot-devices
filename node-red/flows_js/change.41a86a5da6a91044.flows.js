const Node = {
  "id": "41a86a5da6a91044",
  "type": "change",
  "z": "5f6ef472b7d9e1e9",
  "name": "Job duration",
  "rules": [
    {
      "t": "set",
      "p": "job_start_ms",
      "pt": "msg",
      "to": "",
      "tot": "date"
    },
    {
      "t": "set",
      "p": "job_start_ms_array",
      "pt": "flow",
      "to": "$flowContext(\"job_start_ms_array\")[devEui != $$.deviceEui]",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "job_start_ms_array",
      "pt": "flow",
      "to": "( $flowContext(\"job_start_ms_array\") ~> $exists() ? \t  $flowContext(\"job_start_ms_array\")\t: [] )\t~> $append({\t    \"devEui\": $$.deviceEui,\t    \"ms\": $$.job_start_ms\t    })",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 990,
  "y": 100,
  "wires": [
    []
  ]
}

module.exports = Node;