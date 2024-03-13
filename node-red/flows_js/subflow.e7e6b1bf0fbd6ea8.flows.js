const Node = {
  "id": "e7e6b1bf0fbd6ea8",
  "type": "subflow",
  "name": "DB Connect (2)",
  "info": "",
  "category": "",
  "in": [
    {
      "x": 80,
      "y": 100,
      "wires": [
        {
          "id": "72acb16102131416"
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
          "id": "88b424765397e2b3",
          "port": 0
        },
        {
          "id": "ee6b6d95b83c5dbd",
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
        "id": "88b424765397e2b3",
        "port": 0
      },
      {
        "id": "396b8d9dde852519",
        "port": 0
      }
    ]
  }
}

module.exports = Node;