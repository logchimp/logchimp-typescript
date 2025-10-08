// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'logchimp-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Logchimp from 'logchimp';

export const metadata: Metadata = {
  resource: 'posts',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/posts',
  operationId: 'deletePost',
};

export const tool: Tool = {
  name: 'delete_posts',
  description: 'Delete a posts',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
    },
    required: ['id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Logchimp, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.posts.delete(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
