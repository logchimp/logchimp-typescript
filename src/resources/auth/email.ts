// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Email extends APIResource {
  /**
   * Send a verification email to the user email address. The email is only sent if
   * have configured
   * [SMTP mail server](https://docs.logchimp.codecarrot.net/docs/environment-variables#mail)
   * are configured at the time of deploying LogChimp.
   *
   * @example
   * ```ts
   * const response = await client.auth.email.sendVerification();
   * ```
   */
  sendVerification(options?: RequestOptions): APIPromise<EmailSendVerificationResponse> {
    return this._client.post('/auth/email/verify', options);
  }
}

export interface EmailSendVerificationResponse {
  verify?: EmailSendVerificationResponse.Verify;
}

export namespace EmailSendVerificationResponse {
  export interface Verify {
    success?: boolean;
  }
}

export declare namespace Email {
  export { type EmailSendVerificationResponse as EmailSendVerificationResponse };
}
