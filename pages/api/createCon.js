import { table2, getMinifiedItem } from "../../util/Airtable";

const createdev = async (req, res) => {
  // name, email, country, kind phone, rewards, app links, emailss
  const { Name, Email, country, phone, rewards, links, emails } = req.body;
  try {
    // console.log(Code);
    const newRecords = await table2.create([
      {
        fields: {
          fldn0TI5Bw3sAK317: Name,
          fldfmDA1JbzCPOoyw: Email,
          fldrK1RnjedabJvco: country,
          fldfFdKAfdxvdBQSf: phone,
          flduS3CUMCbqEuCoE: rewards,
          flduNtZCcm8XEc3Hd: links,
          fldQGFLrwxv1Se50B: emails,
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
