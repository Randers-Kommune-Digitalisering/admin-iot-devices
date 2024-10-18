const Node = {
  "id": "d4c4c4565d1e740c",
  "type": "subflow",
  "name": "DB Connect",
  "info": "",
  "category": "",
  "in": [
    {
      "x": 80,
      "y": 100,
      "wires": [
        {
          "id": "3576edeecbbb87af"
        }
      ]
    }
  ],
  "out": [
    {
      "x": 1250,
      "y": 100,
      "wires": [
        {
          "id": "076ff355c5b536f3",
          "port": 0
        },
        {
          "id": "9766ede82941d4c1",
          "port": 1
        },
        {
          "id": "bab9102c9ce6a406",
          "port": 0
        },
        {
          "id": "4f4086d3fdf571db",
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
    "x": 1200,
    "y": 260,
    "wires": [
      {
        "id": "076ff355c5b536f3",
        "port": 0
      },
      {
        "id": "9ca16ae19abcd889",
        "port": 0
      }
    ]
  }
}

module.exports = Node;