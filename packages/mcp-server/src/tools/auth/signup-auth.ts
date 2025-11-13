// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@logchimp/mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@logchimp/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Logchimp from '@logchimp/sdk';

export const metadata: Metadata = {
  resource: 'auth',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/auth/signup',
  operationId: 'userSignup',
};

export const tool: Tool = {
  name: 'signup_auth',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a new user account.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/auth_signup_response',\n  $defs: {\n    auth_signup_response: {\n      type: 'object',\n      properties: {\n        user: {\n          $ref: '#/$defs/auth_user'\n        }\n      }\n    },\n    auth_user: {\n      type: 'object',\n      properties: {\n        authToken: {\n          type: 'string'\n        },\n        avatar: {\n          type: 'string',\n          description: 'URL of the user\\'s avatar'\n        },\n        email: {\n          type: 'string',\n          description: 'Email address of the user'\n        },\n        name: {\n          type: 'string',\n          description: 'User\\'s full name'\n        },\n        userId: {\n          type: 'string'\n        },\n        username: {\n          type: 'string',\n          description: 'User\\'s username'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      email: {
        type: 'string',
      },
      password: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['email', 'password'],
  },
  annotations: {},
};

export const handler = async (client: Logchimp, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.auth.signup(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
