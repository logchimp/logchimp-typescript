// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'logchimp-mcp/filtering';
import { Metadata, asTextContentResult } from 'logchimp-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Logchimp from 'logchimp';

export const metadata: Metadata = {
  resource: 'roadmaps',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/roadmaps',
  operationId: 'filterRoadmaps',
};

export const tool: Tool = {
  name: 'list_roadmaps',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet all roadmaps\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/roadmap_list_response',\n  $defs: {\n    roadmap_list_response: {\n      type: 'object',\n      properties: {\n        page_info: {\n          type: 'object',\n          properties: {\n            count: {\n              type: 'integer',\n              description: 'Number of items in current page'\n            },\n            current_page: {\n              type: 'integer',\n              description: 'Current page number'\n            },\n            has_next_page: {\n              type: 'boolean',\n              description: 'Whether there are more pages'\n            },\n            end_cursor: {\n              type: 'string',\n              description: 'Cursor for the last item'\n            },\n            start_cursor: {\n              type: 'string',\n              description: 'Cursor for the first item'\n            }\n          },\n          required: [            'count',\n            'current_page',\n            'has_next_page'\n          ]\n        },\n        results: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/roadmap_private'\n          }\n        },\n        roadmaps: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/roadmap_private'\n          }\n        },\n        total_count: {\n          type: 'integer'\n        },\n        total_pages: {\n          type: 'integer'\n        }\n      },\n      required: [        'page_info',\n        'results',\n        'roadmaps'\n      ]\n    },\n    roadmap_private: {\n      allOf: [        {\n          $ref: '#/$defs/roadmap'\n        }\n      ]\n    },\n    roadmap: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'object',\n          additionalProperties: true\n        },\n        color: {\n          type: 'object',\n          additionalProperties: true\n        },\n        name: {\n          type: 'object',\n          additionalProperties: true\n        },\n        url: {\n          type: 'object',\n          additionalProperties: true\n        }\n      },\n      required: [        'id',\n        'color',\n        'name',\n        'url'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      after: {
        type: 'string',
        description: 'Cursor for pagination',
      },
      first: {
        type: 'number',
        description: 'Number of items to return in a request',
      },
      visibility: {
        type: 'array',
        items: {
          type: 'string',
          enum: ['public', 'private'],
        },
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.roadmaps.list(body)));
};

export default { metadata, tool, handler };
