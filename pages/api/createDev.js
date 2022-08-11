import { table, getMinifiedItem } from "../../util/Airtable";

const createdev = async (req, res) => {
  // name, email, country, kind of dev, number of apps, app links, annual budget, per month
  const { Name, Email, country, dev, apps, links, budget, month } = req.body;
  try {
    // console.log(Code);
    const newRecords = await table.create([
      {
        fields: {
          fldLq7PZWEk5UsD85: Name,
          fld0nCwTYhqsjLuCc: Email,
          fldRDxqGkqhLm0oOn: country,
          fld2dWXWQk8FuZjgr: dev,
          fldwtippexQt3jW88: apps,
          fldjlY8EvlMfMCsnl: links,
          fldNDvaQKflaCKaTs: budget,
          fldJLjUWBHgzeI5oA: month,
        },
      },
    ]);
    // console.log(newRecords);
    res.status(200).json(getMinifiedItem(newRecords[0]));
    // console.log(newRecords[0]);
  } catch (error) {
    // console.log(error);
    res.status(500).json({ msg: "Something went wrong! 😕" });
  }
};

export default createdev;
