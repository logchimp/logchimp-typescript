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
  httpPath: '/roadmaps/search/{name}',
  operationId: 'searchRoadmaps',
};

export const tool: Tool = {
  name: 'search_by_name_roadmaps',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nSearch roadmaps by name\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/roadmap_search_by_name_response',\n  $defs: {\n    roadmap_search_by_name_response: {\n      type: 'object',\n      properties: {\n        roadmaps: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/roadmap_private'\n          }\n        }\n      }\n    },\n    roadmap_private: {\n      allOf: [        {\n          $ref: '#/$defs/roadmap'\n        }\n      ]\n    },\n    roadmap: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'object',\n          additionalProperties: true\n        },\n        color: {\n          type: 'object',\n          additionalProperties: true\n        },\n        name: {\n          type: 'object',\n          additionalProperties: true\n        },\n        url: {\n          type: 'object',\n          additionalProperties: true\n        }\n      },\n      required: [        'id',\n        'color',\n        'name',\n        'url'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['name'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Logchimp, args: Record<string, unknown> | undefined) => {
  const { name, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.roadmaps.searchByName(name)));
};

export default { metadata, tool, handler };
