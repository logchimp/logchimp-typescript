// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@logchimp/mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@logchimp/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Logchimp from '@logchimp/sdk';

export const metadata: Metadata = {
  resource: 'roadmaps',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/roadmaps/{url}',
  operationId: 'roadmapByUrl',
};

export const tool: Tool = {
  name: 'retrieve_by_url_roadmaps',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet roadmap by Url\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/roadmap_retrieve_by_url_response',\n  $defs: {\n    roadmap_retrieve_by_url_response: {\n      type: 'object',\n      properties: {\n        roadmap: {\n          $ref: '#/$defs/roadmap'\n        }\n      }\n    },\n    roadmap: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'object',\n          additionalProperties: true\n        },\n        color: {\n          type: 'object',\n          additionalProperties: true\n        },\n        name: {\n          type: 'object',\n          additionalProperties: true\n        },\n        url: {\n          type: 'object',\n          additionalProperties: true\n        }\n      },\n      required: [        'id',\n        'color',\n        'name',\n        'url'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      url: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['url'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Logchimp, args: Record<string, unknown> | undefined) => {
  const { url, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.roadmaps.retrieveByURL(url)));
  } catch (error) {
    if (error instanceof Logchimp.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
