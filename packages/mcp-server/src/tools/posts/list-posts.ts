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
  httpPath: '/posts/get',
  operationId: 'filterPosts',
};

export const tool: Tool = {
  name: 'list_posts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet all the posts\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/post_list_response',\n  $defs: {\n    post_list_response: {\n      type: 'object',\n      properties: {\n        posts: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/post'\n          }\n        }\n      }\n    },\n    post: {\n      type: 'object',\n      properties: {\n        author: {\n          type: 'object',\n          properties: {\n            userId: {\n              type: 'string'\n            },\n            username: {\n              type: 'string'\n            },\n            avatar: {\n              type: 'string'\n            },\n            name: {\n              type: 'string'\n            }\n          },\n          required: [            'userId',\n            'username'\n          ]\n        },\n        board: {\n          $ref: '#/$defs/board'\n        },\n        createdAt: {\n          type: 'string'\n        },\n        postId: {\n          type: 'string'\n        },\n        slug: {\n          type: 'string'\n        },\n        title: {\n          type: 'string',\n          description: 'Title of the post.'\n        },\n        updatedAt: {\n          type: 'string'\n        },\n        voters: {\n          $ref: '#/$defs/post_vote'\n        },\n        contentMarkdown: {\n          type: 'string',\n          description: 'Post description.'\n        },\n        roadmap: {\n          $ref: '#/$defs/roadmap'\n        }\n      },\n      required: [        'author',\n        'board',\n        'createdAt',\n        'postId',\n        'slug',\n        'title',\n        'updatedAt',\n        'voters'\n      ]\n    },\n    board: {\n      type: 'object',\n      properties: {\n        boardId: {\n          type: 'string'\n        },\n        color: {\n          type: 'string'\n        },\n        createdAt: {\n          type: 'string'\n        },\n        name: {\n          type: 'string'\n        },\n        url: {\n          type: 'string'\n        }\n      },\n      required: [        'boardId',\n        'color',\n        'createdAt',\n        'name',\n        'url'\n      ]\n    },\n    post_vote: {\n      type: 'object',\n      properties: {\n        votes: {\n          type: 'array',\n          items: {\n            allOf: [              {\n                $ref: '#/$defs/current_user_vote'\n              }\n            ]\n          }\n        },\n        votesCount: {\n          type: 'number'\n        },\n        viewerVote: {\n          $ref: '#/$defs/current_user_vote'\n        }\n      },\n      required: [        'votes',\n        'votesCount'\n      ]\n    },\n    current_user_vote: {\n      type: 'object',\n      properties: {\n        createdAt: {\n          type: 'string'\n        },\n        postId: {\n          type: 'string'\n        },\n        userId: {\n          type: 'string'\n        },\n        voteId: {\n          type: 'string'\n        }\n      },\n      required: [        'createdAt',\n        'postId',\n        'userId',\n        'voteId'\n      ]\n    },\n    roadmap: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'object',\n          additionalProperties: true\n        },\n        color: {\n          type: 'object',\n          additionalProperties: true\n        },\n        name: {\n          type: 'object',\n          additionalProperties: true\n        },\n        url: {\n          type: 'object',\n          additionalProperties: true\n        }\n      },\n      required: [        'id',\n        'color',\n        'name',\n        'url'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      created: {
        type: 'string',
        description: "Sort posts by creation date in 'asc' or 'desc' order.",
      },
      page: {
        type: 'number',
        description: 'Page number of the results to fetch.',
      },
      boardId: {
        type: 'array',
        description:
          'Posts will be searched from the list of provided board IDs.\nIf a value is not provided, it defaults to empty array and posts are searched from all the boards.\n',
        items: {
          type: 'string',
        },
      },
      limit: {
        type: 'number',
        description: '"Number of posts to return in a single request. Default is 10."\n',
      },
      roadmapId: {
        type: 'string',
      },
      userId: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['created', 'page'],
  },
  annotations: {},
};

export const handler = async (client: Logchimp, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.posts.list(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
