import { test, expect } from '@playwright/test';

test('example POST', async ({ request }) => {
  const postRequest = await request.post(`https://jsonplaceholder.typicode.com/posts`, {
    data: {
      id: 1,
      title: 'foo',
      body: 'bar',
      userId: 1,
    },
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  expect(postRequest.ok()).toBeTruthy();
  expect(postRequest.status()).toBe(201);
  expect(await postRequest.json()).toStrictEqual({ body: 'bar', id: 101, title: 'foo', userId: 1 });
});
