const Node = {
  "id": "b9590935812fb132",
  "type": "change",
  "z": "b05183ed45071965",
  "name": "Find relevante \\n \"Randers\"-profiler",
  "rules": [
    {
      "t": "set",
      "p": "profiles",
      "pt": "msg",
      "to": "payload.result[name ~> $contains(\"Randers\")]",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "profiles",
      "pt": "msg",
      "to": "profiles ~> | $ | {\t    \"name\": name ~> $replace(\"-\", \" \")\t} |",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 990,
  "y": 560,
  "wires": [
    [
      "d24b6cbba7415b14"
    ]
  ]
}

module.exports = Node;