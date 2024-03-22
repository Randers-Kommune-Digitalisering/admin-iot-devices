<script>
import { ref } from 'vue'

function getTemplates()
{
    const data = ref(null)
    const status = ref(null)

    fetch('/api/templates', {
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    })
    .then(response => {
        status.value = response.status
        response = response.json()
        return response
    })
    .then(value => data.value = value)

    return data
}

async function getTemplate(uid)
{
    const status = ref(null)

    const response = fetch('/api/templates/' + uid, {
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    })
    .then(response => {
        status.value = response.status
        response = response.json()
        return response
    })

    return response
}

export default {
    getTemplates, getTemplate
}


</script>