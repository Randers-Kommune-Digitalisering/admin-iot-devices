<script>
import { ref } from 'vue'

async function updateMeasurementPoint(metadata, newMeasurementPoint = false)
{
    const status = ref(null)
    const url = newMeasurementPoint ? '/api/measurements' : ('/api/measurements/' + metadata.uid)

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
    return updateMeasurementPoint(metadata, true)
}
async function update(metadata)
{
    return updateMeasurementPoint(metadata)
}

export default {
    create, update
}


</script>