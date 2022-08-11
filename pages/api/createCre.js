import { table3, getMinifiedItem } from "../../util/Airtable";

const createdev = async (req, res) => {
  // name, email, country, kind phone, rewards, app links, emailss
  const {
    Name,
    Email,
    country,
    ytn,
    ign,
    tkn,
    twn,
    ytl,
    igl,
    tkl,
    twl,
    content,
    creators,
    share,
  } = req.body;
  try {
    // console.log(Code);
    const newRecords = await table3.create([
      {
        fields: {
          Name: Name,
          Email: Email,
          Country: country,
          "Youtube Numbers": ytn,
          "Instagram Numbers": ign,
          "Tiktok Numbers": tkn,
          "Twitter Numbers": twn,
          "Youtube link": ytl,
          "Instagram link": igl,
          "Tiktok link": tkl,
          "Twitter link": twl,
          "Content Type": content,
          Creators: creators,
          "Share Discover.app": share,
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
