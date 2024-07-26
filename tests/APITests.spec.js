const { test, expect } = require('@playwright/test')

var userId

test('Get users', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users?page=2')
    console.log(await response.json())
    expect(response.status()).toBe(200)
})

test('Create user', async ({ request }) => {
    const response = await request.post(
        'https://reqres.in/api/users', {
            data: {
                "name": "Gogi9",
                "job": "QA tester"
            },
            headers: {
                "Acccept": "application/json"
            }
        }
    )
    console.log(await response.json())
    expect(response.status()).toBe(201)

    var res = response.json()
    userId = res.id
})

test('Update user', async ({ request }) => {
    const response = await request.put(
        'https://reqres.in/api/users/' + userId, {
            data: {
                "name": "Gogi9",
                "job": "QA engineer"
            },
            headers: {
                "Acccept": "application/json"
            }
        }
    )
    console.log(await response.json())
    expect(response.status()).toBe(200)
})

test('Delete user', async ({ request }) => {
    const response = await request.delete('https://reqres.in/api/users/' + userId)
    expect(response.status()).toBe(204)
})
