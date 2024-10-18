const Node = {
  "id": "aeee3739822f03a1",
  "type": "prometheus-metric-config",
  "name": "job_complete",
  "help": "Metrikken tæller antal af jobs som enten afsluttes eller fejler i applikationen.",
  "labels": "job_name, status, error_type",
  "mtype": "counter"
}

module.exports = Node;