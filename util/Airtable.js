const Airtable = require("airtable");

// Authenticate
Airtable.configure({
  apiKey: "keyFEDdARNJ7su5Uy",
});

// Initialize a base
const base = Airtable.base("appagrIZO3J5Z2XxM");

// Reference a table
const table = base("tbl5uzFqxw7u6iXue");
const table2 = base("tblq3A50ZGhDjECql");
const table3 = base("tblQRZsM0vW9X2zkd");

const minifyItems = (records) =>
  records.map((record) => getMinifiedItem(record));

// to make record meaningful.
const getMinifiedItem = (record) => {
  return {
    id: record.id,
    fields: record.fields,
  };
};

export { table, table2, table3, minifyItems, getMinifiedItem };
