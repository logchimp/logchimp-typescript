// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Roadmaps extends APIResource {
  /**
   * Get all roadmaps
   */
  list(
    query: RoadmapListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RoadmapListResponse> {
    return this._client.get('/roadmaps', { query, ...options });
  }

  /**
   * Get roadmap by Url
   */
  retrieveByURL(url: string, options?: RequestOptions): APIPromise<RoadmapRetrieveByURLResponse> {
    return this._client.get(path`/roadmaps/${url}`, options);
  }

  /**
   * Search roadmaps by name
   */
  searchByName(name: string, options?: RequestOptions): APIPromise<RoadmapSearchByNameResponse> {
    return this._client.get(path`/roadmaps/search/${name}`, options);
  }
}

export interface Roadmap {
  id: unknown;

  color: unknown;

  name: unknown;

  url: unknown;
}

export interface RoadmapPrivate extends Roadmap {
  /**
   * Roadmap creation date
   */
  created_at: string;

  display: boolean;

  index: number;
}

export interface RoadmapListResponse {
  page_info: RoadmapListResponse.PageInfo;

  results: Array<RoadmapPrivate>;

  roadmaps: Array<RoadmapPrivate>;

  total_count?: number | null;

  total_pages?: number | null;
}

export namespace RoadmapListResponse {
  export interface PageInfo {
    /**
     * Number of items in current page
     */
    count: number;

    /**
     * Current page number
     */
    current_page: number;

    /**
     * Whether there are more pages
     */
    has_next_page: boolean;

    /**
     * Cursor for the last item
     */
    end_cursor?: string | null;

    /**
     * Cursor for the first item
     */
    start_cursor?: string | null;
  }
}

export interface RoadmapRetrieveByURLResponse {
  roadmap?: Roadmap;
}

export interface RoadmapSearchByNameResponse {
  roadmaps?: Array<RoadmapPrivate>;
}

export interface RoadmapListParams {
  /**
   * Cursor for pagination
   */
  after?: string;

  /**
   * Number of items to return in a request
   */
  first?: number;

  visibility?: Array<'public' | 'private'>;
}

export declare namespace Roadmaps {
  export {
    type Roadmap as Roadmap,
    type RoadmapPrivate as RoadmapPrivate,
    type RoadmapListResponse as RoadmapListResponse,
    type RoadmapRetrieveByURLResponse as RoadmapRetrieveByURLResponse,
    type RoadmapSearchByNameResponse as RoadmapSearchByNameResponse,
    type RoadmapListParams as RoadmapListParams,
  };
}
