// @ts-check
const { test, expect } = require('@playwright/test');

//test case 1
test('should be able to create a booking', async ({ request }) => {
    const response = await request.post(`/users/2`, {
        data: {
           
    "name": "morpheus",
    "job": "leader",
    "id": "441",
    "createdAt": "2024-04-19T03:44:39.421Z",
            "additionalneeds": "Breakfast"
        }
    });
    console.log(await response.json());
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    const responseBody = await response.json()
    expect(responseBody.Postjsondetails).toHaveProperty("firstname", "Jim");
    expect(responseBody.Postjsondetails).toHaveProperty("lastname", "Brown");
    expect(responseBody.Postjsondetails).toHaveProperty("totalprice", 111);
    expect(responseBody.Postjsondetails).toHaveProperty("depositpaid", true);
});