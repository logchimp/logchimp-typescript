// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as EmailAPI from './email';
import { Email, EmailSendVerificationResponse } from './email';
import * as SetupAPI from './setup';
import { Setup, SetupCreateParams, SetupCreateResponse, SetupRetrieveResponse } from './setup';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Auth extends APIResource {
  setup: SetupAPI.Setup = new SetupAPI.Setup(this._client);
  email: EmailAPI.Email = new EmailAPI.Email(this._client);

  /**
   * Login to account using email and password.
   *
   * @example
   * ```ts
   * const response = await client.auth.login({
   *   email: 'mike@example.com',
   *   password: 'password',
   * });
   * ```
   */
  login(body: AuthLoginParams, options?: RequestOptions): APIPromise<AuthLoginResponse> {
    return this._client.post('/auth/login', { body, ...options });
  }

  /**
   * Create a new user account.
   *
   * @example
   * ```ts
   * const response = await client.auth.signup({
   *   email: 'mike@example.com',
   *   password: 'password',
   * });
   * ```
   */
  signup(body: AuthSignupParams, options?: RequestOptions): APIPromise<AuthSignupResponse> {
    return this._client.post('/auth/signup', { body, ...options });
  }
}

export interface AuthUser {
  authToken?: string;

  /**
   * URL of the user's avatar
   */
  avatar?: string;

  /**
   * Email address of the user
   */
  email?: string;

  /**
   * User's full name
   */
  name?: string;

  userId?: string;

  /**
   * User's username
   */
  username?: string;
}

export interface AuthLoginResponse {
  user?: AuthUser;
}

export interface AuthSignupResponse {
  user?: AuthUser;
}

export interface AuthLoginParams {
  email: string;

  password: string;
}

export interface AuthSignupParams {
  email: string;

  password: string;
}

Auth.Setup = Setup;
Auth.Email = Email;

export declare namespace Auth {
  export {
    type AuthUser as AuthUser,
    type AuthLoginResponse as AuthLoginResponse,
    type AuthSignupResponse as AuthSignupResponse,
    type AuthLoginParams as AuthLoginParams,
    type AuthSignupParams as AuthSignupParams,
  };

  export {
    Setup as Setup,
    type SetupCreateResponse as SetupCreateResponse,
    type SetupRetrieveResponse as SetupRetrieveResponse,
    type SetupCreateParams as SetupCreateParams,
  };

  export { Email as Email, type EmailSendVerificationResponse as EmailSendVerificationResponse };
}
