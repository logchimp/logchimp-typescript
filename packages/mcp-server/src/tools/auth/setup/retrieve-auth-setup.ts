// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@logchimp/mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@logchimp/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Logchimp from '@logchimp/sdk';

export const metadata: Metadata = {
  resource: 'auth.setup',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/auth/setup',
  operationId: 'getSiteSetup',
};

export const tool: Tool = {
  name: 'retrieve_auth_setup',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet site setup information.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/setup_retrieve_response',\n  $defs: {\n    setup_retrieve_response: {\n      type: 'object',\n      properties: {\n        is_setup: {\n          type: 'boolean',\n          description: 'Is LogChimp onboarding completed?'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
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
  const { jq_filter } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.auth.setup.retrieve()));
  } catch (error) {
    if (error instanceof Logchimp.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
