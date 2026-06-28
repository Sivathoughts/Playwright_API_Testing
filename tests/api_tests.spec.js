import { test, expect } from '@playwright/test';

//DLETE OPERATION

test('API DELETE Request', async({request}) => {

const response = await request.delete('https://jsonplaceholder.typicode.com/users/1');
expect(response.status()).toBe(200);

}
)

//PUT OPERATION

test('API PUT Request', async({request}) => {

    const response=await request.put('https://jsonplaceholder.typicode.com/posts/1',{
        data: {
            "id": 1,
            "title": "Updated Title",
            "body": "Updated Body Request1",
            "userId": 1
}
        })  
expect(response.status()).toBe(200);

const text=await response.text();
expect(text).toContain('Updated Body');

console.log(await response.json());
    })

//POST OPERATION

test('API POST Request', async({request}) => {

    const response=await request.post('https://jsonplaceholder.typicode.com/posts',{
        data: {
            "title": "Playwright API Testing",
            "body": "Learning POST API",
            "userId": 1
        }  
    })

expect(response.status()).toBe(201);

const text=await response.text();
expect(text).toContain('Learning POST API');

console.log(await response.json());
})   

//GET OPERATION
         
test('API GET Request', async({request}) => {

const response = await request.get('https://jsonplaceholder.typicode.com/users/1');
expect(response.status()).toBe(200);

const text=await response.text();
expect(text).toContain('Graham');

console.log(await response.json());

}
)