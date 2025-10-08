// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as BoardsAPI from './boards';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Boards extends APIResource {
  /**
   * Get all the boards
   */
  list(
    query: BoardListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BoardListResponse> {
    return this._client.get('/boards', { query, ...options });
  }
}

export interface Board {
  boardId: string;

  color: string;

  createdAt: string;

  name: string;

  url: string;
}

export interface BoardListResponse {
  boards?: Array<BoardListResponse.Board>;
}

export namespace BoardListResponse {
  export interface Board extends BoardsAPI.Board {
    post_count?: string;
  }
}

export interface BoardListParams {
  /**
   * Borders are sorted by date creation.
   */
  created?: string;

  limit?: string;

  page?: string;
}

export declare namespace Boards {
  export {
    type Board as Board,
    type BoardListResponse as BoardListResponse,
    type BoardListParams as BoardListParams,
  };
}
