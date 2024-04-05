const Node = {
  "id": "635c2a2e1213c76f",
  "type": "change",
  "z": "b05183ed45071965",
  "name": "Frasorter lokale profiler",
  "rules": [
    {
      "t": "set",
      "p": "profiles",
      "pt": "msg",
      "to": "profiles[id in $$.payload.os2uid = false]",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 790,
  "y": 700,
  "wires": [
    [
      "6d1f8f4ba324811d"
    ]
  ]
}

module.exports = Node;