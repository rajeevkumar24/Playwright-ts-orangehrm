import {test,expect} from "@playwright/test";

test.only('Get APi',async({ request})=>{

    const response = await request.get("https://reqres.in/api/user/2")

    expect(response.status()).toBe(200)
    const body = await response.json();
    expect(body.data.id).toBe(2);

});