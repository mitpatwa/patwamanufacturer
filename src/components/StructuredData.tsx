import { Helmet } from "react-helmet-async";

interface StructuredDataProps {
  /** A schema.org object (or array of objects) serialised into a JSON-LD script tag. */
  schema: Record<string, unknown> | Record<string, unknown>[];
}

/**
 * Drops a JSON-LD block into <head>. Safe to use more than once per page —
 * react-helmet-async keeps each script separate.
 */
const StructuredData = ({ schema }: StructuredDataProps) => (
  <Helmet>
    <script type="application/ld+json">{JSON.stringify(schema)}</script>
  </Helmet>
);

export default StructuredData;
