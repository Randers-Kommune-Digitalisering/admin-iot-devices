const Node = {
  "id": "50cb6c3960650e65",
  "type": "venv",
  "z": "5f6ef472b7d9e1e9",
  "g": "b739c15631c21afd",
  "venvconfig": "f184b10fdc558cce",
  "name": "",
  "code": "import paramiko\n\nfilename = msg.get('filename')\ncsv = msg.get('csv')\n\nhostname = msg.get('host')\nusername = msg.get('user')\npassword = msg.get('pass')\nport = msg.get('port')\n\nclient = paramiko.SSHClient()\nclient.set_missing_host_key_policy(paramiko.AutoAddPolicy())\n\n# Connect to client\ntry:\n    client.connect(hostname, username=username, password=password, port=port)\n\n    # Open SFTP\n    sftp = client.open_sftp()\n\n    # Upload CSV using a binary string\n    with sftp.file(f'/Energimonitorering/{filename}', 'wb') as remote_file:\n        remote_file.write(csv)\n        msg['payload']= {\"action\": \"Upload file\", \"filename\": filename, \"success\": True, \"message\": \"File successfully uploaded to server.\"}\n        \n    sftp.close()\n\nexcept Exception as e:\n    msg['payload'] = {\"action\": \"Upload file\", \"filename\": filename, \"success\": False, \"message\": \"Error uploading file to server.\", \"error\": e}\n\nfinally:\n    client.close()\n\nprint(msg['payload'])",
  "continuous": false,
  "x": 610,
  "y": 800,
  "wires": [
    [
      "53bdf70705e16155"
    ]
  ]
}

module.exports = Node;