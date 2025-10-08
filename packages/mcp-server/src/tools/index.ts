// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, Endpoint, HandlerFunction } from './types';

export { Metadata, Endpoint, HandlerFunction };

import login_auth from './auth/login-auth';
import signup_auth from './auth/signup-auth';
import create_auth_setup from './auth/setup/create-auth-setup';
import retrieve_auth_setup from './auth/setup/retrieve-auth-setup';
import send_verification_auth_email from './auth/email/send-verification-auth-email';
import create_posts from './posts/create-posts';
import update_posts from './posts/update-posts';
import list_posts from './posts/list-posts';
import delete_posts from './posts/delete-posts';
import retrieve_by_slug_posts from './posts/retrieve-by-slug-posts';
import add_votes from './votes/add-votes';
import remove_votes from './votes/remove-votes';
import list_boards from './boards/list-boards';
import list_roadmaps from './roadmaps/list-roadmaps';
import retrieve_by_url_roadmaps from './roadmaps/retrieve-by-url-roadmaps';
import search_by_name_roadmaps from './roadmaps/search-by-name-roadmaps';

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(login_auth);
addEndpoint(signup_auth);
addEndpoint(create_auth_setup);
addEndpoint(retrieve_auth_setup);
addEndpoint(send_verification_auth_email);
addEndpoint(create_posts);
addEndpoint(update_posts);
addEndpoint(list_posts);
addEndpoint(delete_posts);
addEndpoint(retrieve_by_slug_posts);
addEndpoint(add_votes);
addEndpoint(remove_votes);
addEndpoint(list_boards);
addEndpoint(list_roadmaps);
addEndpoint(retrieve_by_url_roadmaps);
addEndpoint(search_by_name_roadmaps);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  const allExcludes = filters.length > 0 && filters.every((filter) => filter.op === 'exclude');
  const unmatchedFilters = new Set(filters);

  const filtered = endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        unmatchedFilters.delete(filter);
        included = filter.op === 'include';
      }
    }

    return included;
  });

  // Check if any filters didn't match
  const unmatched = Array.from(unmatchedFilters).filter((f) => f.type === 'tool' || f.type === 'resource');
  if (unmatched.length > 0) {
    throw new Error(
      `The following filters did not match any endpoints: ${unmatched
        .map((f) => `${f.type}=${f.value}`)
        .join(', ')}`,
    );
  }

  return filtered;
}

function match({ type, value }: Filter, endpoint: Endpoint): boolean {
  switch (type) {
    case 'resource': {
      const regexStr = '^' + normalizeResource(value).replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexStr);
      return regex.test(normalizeResource(endpoint.metadata.resource));
    }
    case 'operation':
      return endpoint.metadata.operation === value;
    case 'tag':
      return endpoint.metadata.tags.includes(value);
    case 'tool':
      return endpoint.tool.name === value;
  }
}

function normalizeResource(resource: string): string {
  return resource.toLowerCase().replace(/[^a-z.*\-_]*/g, '');
}
