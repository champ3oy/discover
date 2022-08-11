const Airtable = require("airtable");

// Authenticate
Airtable.configure({
  apiKey: "keyFEDdARNJ7su5Uy",
});

// Initialize a base
const base = Airtable.base("appagrIZO3J5Z2XxM");

// Reference a table
const table = base("tbl5uzFqxw7u6iXue");

const minifyItems = (records) =>
  records.map((record) => getMinifiedItem(record));

// to make record meaningful.
const getMinifiedItem = (record) => {
  return {
    id: record.id,
    fields: record.fields,
  };
};

export { table, minifyItems, getMinifiedItem };
