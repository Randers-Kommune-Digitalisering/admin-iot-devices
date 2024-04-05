const Node = {
  "id": "bf1fd01ce6340a14",
  "type": "template",
  "z": "b05183ed45071965",
  "name": "Indsæt profiler",
  "field": "sql",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 680,
  "y": 840,
  "wires": [
    [
      "926d4969ab7dfb4c"
    ]
  ]
}

Node.template = `
INSERT INTO {{global.metadataTablename.deviceprofile}}
    (os2uid, name)
VALUES {{{values}}}
`

module.exports = Node;