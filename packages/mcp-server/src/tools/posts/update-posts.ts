// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'logchimp-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Logchimp from '@logchimp/sdk';

export const metadata: Metadata = {
  resource: 'posts',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/posts',
  operationId: 'updatePost',
};

export const tool: Tool = {
  name: 'update_posts',
  description: 'Update a post',
  inputSchema: {
    type: 'object',
    properties: {},
    required: [],
  },
  annotations: {},
};

export const handler = async (client: Logchimp, args: Record<string, unknown> | undefined) => {
  const response = await client.posts.update().asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
