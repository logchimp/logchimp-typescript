// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as VotesAPI from './votes';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Votes extends APIResource {
  /**
   * Vote on a post
   */
  add(body: VoteAddParams, options?: RequestOptions): APIPromise<VoteAddResponse> {
    return this._client.post('/votes', { body, ...options });
  }

  /**
   * Remove vote from a post
   */
  remove(body: VoteRemoveParams, options?: RequestOptions): APIPromise<VoteRemoveResponse> {
    return this._client.delete('/votes', { body, ...options });
  }
}

export interface CurrentUserVote {
  createdAt: string;

  postId: string;

  userId: string;

  voteId: string;
}

export interface PostVote {
  votes: Array<PostVote.Vote>;

  votesCount: number;

  viewerVote?: CurrentUserVote;
}

export namespace PostVote {
  export interface Vote extends VotesAPI.CurrentUserVote {
    username: string;

    avatar?: string;

    name?: string;
  }
}

export interface VoteAddResponse {
  voters?: PostVote;
}

export interface VoteRemoveResponse {
  voters?: PostVote;
}

export interface VoteAddParams {
  /**
   * ID of the post to vote on.
   */
  postId: string;
}

export interface VoteRemoveParams {
  /**
   * ID of the post to vote on.
   */
  postId: string;
}

export declare namespace Votes {
  export {
    type CurrentUserVote as CurrentUserVote,
    type PostVote as PostVote,
    type VoteAddResponse as VoteAddResponse,
    type VoteRemoveResponse as VoteRemoveResponse,
    type VoteAddParams as VoteAddParams,
    type VoteRemoveParams as VoteRemoveParams,
  };
}
