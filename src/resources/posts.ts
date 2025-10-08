// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as PostsAPI from './posts';
import * as BoardsAPI from './boards';
import * as RoadmapsAPI from './roadmaps';
import * as VotesAPI from './votes';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Posts extends APIResource {
  /**
   * Create a new post
   *
   * @example
   * ```ts
   * const post = await client.posts.create({ title: 'title' });
   * ```
   */
  create(body: PostCreateParams, options?: RequestOptions): APIPromise<PostCreateResponse> {
    return this._client.post('/posts', { body, ...options });
  }

  /**
   * Update a post
   *
   * @example
   * ```ts
   * await client.posts.update();
   * ```
   */
  update(options?: RequestOptions): APIPromise<void> {
    return this._client.patch('/posts', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get all the posts
   *
   * @example
   * ```ts
   * const posts = await client.posts.list({
   *   created: 'desc',
   *   page: 1,
   * });
   * ```
   */
  list(body: PostListParams, options?: RequestOptions): APIPromise<PostListResponse> {
    return this._client.post('/posts/get', { body, ...options });
  }

  /**
   * Delete a posts
   *
   * @example
   * ```ts
   * await client.posts.delete({ id: 'id' });
   * ```
   */
  delete(body: PostDeleteParams, options?: RequestOptions): APIPromise<void> {
    return this._client.delete('/posts', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get post by Slug
   *
   * @example
   * ```ts
   * const response = await client.posts.retrieveBySlug({
   *   slug: 'slug',
   * });
   * ```
   */
  retrieveBySlug(
    body: PostRetrieveBySlugParams,
    options?: RequestOptions,
  ): APIPromise<PostRetrieveBySlugResponse> {
    return this._client.post('/posts/slug', { body, ...options });
  }
}

export interface Post {
  author: Post.Author;

  board: BoardsAPI.Board;

  createdAt: string;

  postId: string;

  slug: string;

  /**
   * Title of the post.
   */
  title: string;

  updatedAt: string;

  voters: VotesAPI.PostVote;

  /**
   * Post description.
   */
  contentMarkdown?: string;

  roadmap?: RoadmapsAPI.Roadmap;
}

export namespace Post {
  export interface Author {
    userId: string;

    username: string;

    avatar?: string;

    name?: string;
  }
}

export interface PostCreateResponse {
  post?: PostCreateResponse.Post;
}

export namespace PostCreateResponse {
  export interface Post {
    postId: string;

    boardId?: string;

    /**
     * Post description.
     */
    contentMarkdown?: string;

    createdAt?: string;

    roadmap_id?: string;

    slug?: string;

    slugId?: string;

    /**
     * Title of the post.
     */
    title?: string;

    updatedAt?: string;

    userId?: string;
  }
}

export interface PostListResponse {
  posts?: Array<Post>;
}

export interface PostRetrieveBySlugResponse {
  post?: PostRetrieveBySlugResponse.Post;
}

export namespace PostRetrieveBySlugResponse {
  export interface Post extends PostsAPI.Post {
    slugId: string;
  }
}

export interface PostCreateParams {
  /**
   * Title of the post.
   */
  title: string;

  boardId?: string;

  /**
   * Post description.
   */
  contentMarkdown?: string;

  roadmapId?: string;
}

export interface PostListParams {
  /**
   * Sort posts by creation date in 'asc' or 'desc' order.
   */
  created: string;

  /**
   * Page number of the results to fetch.
   */
  page: number;

  /**
   * Posts will be searched from the list of provided board IDs. If a value is not
   * provided, it defaults to empty array and posts are searched from all the boards.
   */
  boardId?: Array<string>;

  /**
   * "Number of posts to return in a single request. Default is 10."
   */
  limit?: number;

  roadmapId?: string;

  /**
   * @deprecated
   */
  userId?: string;
}

export interface PostDeleteParams {
  id: string;
}

export interface PostRetrieveBySlugParams {
  slug: string;

  userId?: string;
}

export declare namespace Posts {
  export {
    type Post as Post,
    type PostCreateResponse as PostCreateResponse,
    type PostListResponse as PostListResponse,
    type PostRetrieveBySlugResponse as PostRetrieveBySlugResponse,
    type PostCreateParams as PostCreateParams,
    type PostListParams as PostListParams,
    type PostDeleteParams as PostDeleteParams,
    type PostRetrieveBySlugParams as PostRetrieveBySlugParams,
  };
}
