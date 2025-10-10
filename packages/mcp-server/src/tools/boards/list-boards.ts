// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'logchimp-mcp/filtering';
import { Metadata, asTextContentResult } from 'logchimp-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Logchimp from '@logchimp/sdk';

export const metadata: Metadata = {
  resource: 'boards',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/boards',
  operationId: 'filterBoards',
};

export const tool: Tool = {
  name: 'list_boards',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet all the boards\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/board_list_response',\n  $defs: {\n    board_list_response: {\n      type: 'object',\n      properties: {\n        boards: {\n          type: 'array',\n          items: {\n            allOf: [              {\n                $ref: '#/$defs/board'\n              }\n            ]\n          }\n        }\n      }\n    },\n    board: {\n      type: 'object',\n      properties: {\n        boardId: {\n          type: 'string'\n        },\n        color: {\n          type: 'string'\n        },\n        createdAt: {\n          type: 'string'\n        },\n        name: {\n          type: 'string'\n        },\n        url: {\n          type: 'string'\n        }\n      },\n      required: [        'boardId',\n        'color',\n        'createdAt',\n        'name',\n        'url'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      created: {
        type: 'string',
        description: 'Borders are sorted by date creation.',
      },
      limit: {
        type: 'string',
      },
      page: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Logchimp, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.boards.list(body)));
};

export default { metadata, tool, handler };
