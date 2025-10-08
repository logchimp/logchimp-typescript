// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AuthAPI from './auth';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Setup extends APIResource {
  /**
   * Setup the site by creating the owner account.
   *
   * @example
   * ```ts
   * const setup = await client.auth.setup.create({
   *   email: 'mike@example.com',
   *   password: 'password',
   * });
   * ```
   */
  create(body: SetupCreateParams, options?: RequestOptions): APIPromise<SetupCreateResponse> {
    return this._client.post('/auth/setup', { body, ...options });
  }

  /**
   * Get site setup information.
   *
   * @example
   * ```ts
   * const setup = await client.auth.setup.retrieve();
   * ```
   */
  retrieve(options?: RequestOptions): APIPromise<SetupRetrieveResponse> {
    return this._client.get('/auth/setup', options);
  }
}

export interface SetupCreateResponse {
  user?: AuthAPI.AuthUser;
}

export interface SetupRetrieveResponse {
  /**
   * Is LogChimp onboarding completed?
   */
  is_setup?: boolean;
}

export interface SetupCreateParams {
  email: string;

  password: string;

  name?: string;

  /**
   * This will be shown across the website on public pages and dashboard.
   */
  siteTitle?: string;
}

export declare namespace Setup {
  export {
    type SetupCreateResponse as SetupCreateResponse,
    type SetupRetrieveResponse as SetupRetrieveResponse,
    type SetupCreateParams as SetupCreateParams,
  };
}
