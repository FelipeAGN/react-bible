const url = 'https://jsonplaceholder.typicode.com/users'

// Hace un GET
fetch(url)
.then((response) => response.json())
.then( (data) => console.log(data))

// POST
fetch(url, {
    method: 'POST',
    headers: {
        'Content-type': 'application/json',
        'Authorization': 'Bearer <tokendeAutorizacion>'
    },
    body: JSON.stringify({
        name: 'ASDASD',
        website: 'google.com'
    })
})

/**
 * CON PROMESAS: ES DE FORMA IMPERATIVA
 */

const fn = async() => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer <tokendeAutorizacion>'
        },
        body: JSON.stringify({
            name: 'ASDASD',
            website: 'google.com'
        })
    })
    const data = await response.json()
    console.log(data)
}
fn()
