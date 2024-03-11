<script>
import { ref } from 'vue'

function getTemplates()
{
    const data = ref(null)

    fetch('/api/devices/templates/get', {
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    })
    .then(response => response = response.json())
    .then(value => data.value = value)

    console.log(data)

    return data
}

export default {
    getTemplates
}


</script>