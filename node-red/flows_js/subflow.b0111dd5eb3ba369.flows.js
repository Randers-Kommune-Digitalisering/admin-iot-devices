const Node = {
  "id": "b0111dd5eb3ba369",
  "type": "subflow",
  "name": "DB Connect (4)",
  "info": "",
  "category": "",
  "in": [
    {
      "x": 80,
      "y": 100,
      "wires": [
        {
          "id": "43d372ad3df2d361"
        }
      ]
    }
  ],
  "out": [
    {
      "x": 970,
      "y": 100,
      "wires": [
        {
          "id": "b266cf7c4adae595",
          "port": 0
        },
        {
          "id": "63c997dff27f4f76",
          "port": 0
        }
      ]
    }
  ],
  "env": [],
  "meta": {},
  "color": "#3FADB5",
  "inputLabels": [
    "Query input"
  ],
  "outputLabels": [
    "Result output"
  ],
  "icon": "node-red/db.svg",
  "status": {
    "x": 1000,
    "y": 240,
    "wires": [
      {
        "id": "b266cf7c4adae595",
        "port": 0
      },
      {
        "id": "1d3cc83d9da4c4bd",
        "port": 0
      }
    ]
  }
}

module.exports = Node;