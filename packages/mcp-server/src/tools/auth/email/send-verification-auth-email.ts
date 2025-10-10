// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@logchimp/mcp/filtering';
import { Metadata, asTextContentResult } from '@logchimp/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Logchimp from '@logchimp/sdk';

export const metadata: Metadata = {
  resource: 'auth.email',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/auth/email/verify',
  operationId: 'sendVerificationEmail',
};

export const tool: Tool = {
  name: 'send_verification_auth_email',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nSend a verification email to the user email address.\nThe email is only sent if have configured [SMTP mail server](https://docs.logchimp.codecarrot.net/docs/environment-variables#mail) are configured at the time of deploying LogChimp.\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/email_send_verification_response',\n  $defs: {\n    email_send_verification_response: {\n      type: 'object',\n      properties: {\n        verify: {\n          type: 'object',\n          properties: {\n            success: {\n              type: 'boolean'\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
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
  annotations: {},
};

export const handler = async (client: Logchimp, args: Record<string, unknown> | undefined) => {
  const { jq_filter } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.auth.email.sendVerification()));
};

export default { metadata, tool, handler };
