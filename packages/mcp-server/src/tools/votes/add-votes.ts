// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'logchimp-mcp/filtering';
import { Metadata, asTextContentResult } from 'logchimp-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Logchimp from 'logchimp';

export const metadata: Metadata = {
  resource: 'votes',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/votes',
  operationId: 'addVoteToPost',
};

export const tool: Tool = {
  name: 'add_votes',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nVote on a post\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/vote_add_response',\n  $defs: {\n    vote_add_response: {\n      type: 'object',\n      properties: {\n        voters: {\n          $ref: '#/$defs/post_vote'\n        }\n      }\n    },\n    post_vote: {\n      type: 'object',\n      properties: {\n        votes: {\n          type: 'array',\n          items: {\n            allOf: [              {\n                $ref: '#/$defs/current_user_vote'\n              }\n            ]\n          }\n        },\n        votesCount: {\n          type: 'number'\n        },\n        viewerVote: {\n          $ref: '#/$defs/current_user_vote'\n        }\n      },\n      required: [        'votes',\n        'votesCount'\n      ]\n    },\n    current_user_vote: {\n      type: 'object',\n      properties: {\n        createdAt: {\n          type: 'string'\n        },\n        postId: {\n          type: 'string'\n        },\n        userId: {\n          type: 'string'\n        },\n        voteId: {\n          type: 'string'\n        }\n      },\n      required: [        'createdAt',\n        'postId',\n        'userId',\n        'voteId'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      postId: {
        type: 'string',
        description: 'ID of the post to vote on.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['postId'],
  },
  annotations: {},
};

export const handler = async (client: Logchimp, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.votes.add(body)));
};

export default { metadata, tool, handler };
