<script>
import { ref } from 'vue'

function getTemplates()
{
    const data = ref(null)
    const status = ref(null)

    fetch('/api/devices/templates/get', {
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

export default {
    getTemplates
}


</script>