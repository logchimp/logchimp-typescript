// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@logchimp/mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@logchimp/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Logchimp from '@logchimp/sdk';

export const metadata: Metadata = {
  resource: 'posts',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/posts',
  operationId: 'createPost',
};

export const tool: Tool = {
  name: 'create_posts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a new post\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/post_create_response',\n  $defs: {\n    post_create_response: {\n      type: 'object',\n      properties: {\n        post: {\n          type: 'object',\n          properties: {\n            postId: {\n              type: 'string'\n            },\n            boardId: {\n              type: 'string'\n            },\n            contentMarkdown: {\n              type: 'string',\n              description: 'Post description.'\n            },\n            createdAt: {\n              type: 'string'\n            },\n            roadmap_id: {\n              type: 'string'\n            },\n            slug: {\n              type: 'string'\n            },\n            slugId: {\n              type: 'string'\n            },\n            title: {\n              type: 'string',\n              description: 'Title of the post.'\n            },\n            updatedAt: {\n              type: 'string'\n            },\n            userId: {\n              type: 'string'\n            }\n          },\n          required: [            'postId'\n          ]\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      title: {
        type: 'string',
        description: 'Title of the post.',
      },
      boardId: {
        type: 'string',
      },
      contentMarkdown: {
        type: 'string',
        description: 'Post description.',
      },
      roadmapId: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['title'],
  },
  annotations: {},
};

export const handler = async (client: Logchimp, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.posts.create(body)));
  } catch (error) {
    if (error instanceof Logchimp.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
