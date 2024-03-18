<script>
import { ref } from 'vue'

async function updateDevice(metadata, newDevice = false)
{
    const status = ref(null)
    const url = newDevice == true ? '/api/devices/add' : '/api/devices/edit'

    const response = fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(metadata), // body data type must match "Content-Type" header

    })
    .then(response => {
        status.value = response.status
        response = response.json()
        return response
    })

    return response
}

async function create(metadata)
{
    return updateDevice(metadata, true)
}
async function update(metadata)
{
    return updateDevice(metadata)
}

export default {
    create, update
}


</script>