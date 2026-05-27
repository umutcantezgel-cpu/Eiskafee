import React from 'react';

/**
 * Renders Schema.org JSON-LD structured data.
 * Should be placed at the end of the <body> to avoid render-blocking,
 * as per the user's specific request.
 */
export function SchemaScripts({ schema }: { schema: object | object[] }) {
  if (!schema) return null;
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
