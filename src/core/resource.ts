// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Logchimp } from '../client';

export abstract class APIResource {
  protected _client: Logchimp;

  constructor(client: Logchimp) {
    this._client = client;
  }
}
