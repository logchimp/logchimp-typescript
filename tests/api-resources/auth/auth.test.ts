// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Logchimp from '@logchimp/sdk';

const client = new Logchimp({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource auth', () => {
  // Prism tests are disabled
  test.skip('login: only required params', async () => {
    const responsePromise = client.auth.login({ email: 'mike@example.com', password: 'password' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('login: required and optional params', async () => {
    const response = await client.auth.login({ email: 'mike@example.com', password: 'password' });
  });

  // Prism tests are disabled
  test.skip('signup: only required params', async () => {
    const responsePromise = client.auth.signup({ email: 'mike@example.com', password: 'password' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('signup: required and optional params', async () => {
    const response = await client.auth.signup({ email: 'mike@example.com', password: 'password' });
  });
});
