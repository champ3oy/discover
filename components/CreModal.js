import { useRouter } from "next/router";
import React from "react";
import Input from "./Input";
import Dropdown from "./Dropdown";
import Button from "./Button";
import InputAdd from "./InputAdd";
import InputBool from "./InputBool";
import InputDouble from "./InputDouble";

export default function CreModal({ temail, onclose = () => {} }) {
  const router = useRouter();
  const [active, setActive] = React.useState("");
  const [loading, setloading] = React.useState(false);

  const [name, setname] = React.useState("");
  const [email, setemail] = React.useState(temail);
  const [country, setcountry] = React.useState("");
  const [ytn, setytn] = React.useState("");
  const [ign, setign] = React.useState("");
  const [tkn, settkn] = React.useState("");
  const [twn, settwn] = React.useState("");
  const [ytl, setytl] = React.useState("");
  const [igl, setigl] = React.useState("");
  const [tkl, settkl] = React.useState("");
  const [twl, settwl] = React.useState("");
  const [qcontent, setqcontent] = React.useState("");
  const [content, setcontent] = React.useState([]);
  const [qcreators, setqcreators] = React.useState("");
  const [creators, setcreators] = React.useState([]);
  const [share, setshare] = React.useState("");

  const [emails, setemails] = React.useState("");

  React.useEffect(() => {
    if (["/", "/creators", "/consumer"].includes(router.pathname)) {
      setActive(router.pathname);
    }
  }, [router.pathname]);

  return (
    <div>
      <Input
        label="Your Name"
        placeholder="Type your name here"
        value={name}
        onChange={(e) => setname(e)}
      />
      <Input
        label="Email Address"
        placeholder="name@email.com"
        value={email}
        onChange={(email) => {
          setemail(email);
        }}
      />

      <Dropdown
        label="What is your current location?"
        placeholder="Pick your country"
        country={true}
        onChange={(e) => setcountry(e)}
      />

      <InputDouble
        label="How many followers do you have on social media"
        placeholder1="Youtube Follower count"
        placeholder2="Instagram Follower count"
        value1={ytn}
        value2={ign}
        placeholder3="Tiktok Follower count"
        placeholder4="Twitter Follower count"
        value3={tkn}
        value4={twn}
        onChange1={(e) => setytn(e)}
        onChange2={(e) => setign(e)}
        onChange3={(e) => settkn(e)}
        onChange4={(e) => settwn(e)}
      />

      <InputDouble
        label="Social media links"
        placeholder1="Your youtube profile link"
        placeholder2="Your instagram profile link"
        value1={ytl}
        value2={igl}
        placeholder3="Your tiktok profile link"
        placeholder4="Your twitter profile link"
        value3={tkl}
        value4={twl}
        onChange1={(e) => setytl(e)}
        onChange2={(e) => setigl(e)}
        onChange3={(e) => settkl(e)}
        onChange4={(e) => settwl(e)}
      />

      <InputAdd
        label="What type of content do you produce"
        placeholder="Type content and add"
        value={qcontent}
        list={content}
        onChange={(e) => {
          setqcontent(e);
        }}
        onAdd={() => {
          setcontent([...content, qcontent]);
          setqcontent("");
        }}
        onRemove={(index) => {
          setcontent(content.filter((_, i) => i !== index));
        }}
      />
      <InputAdd
        label="List and share contacts of other creators and influencers who will benefit from this 
        content discovery service"
        placeholder="Type creator or influencer name and add"
        value={qcreators}
        list={creators}
        onChange={(e) => setqcreators(e)}
        onAdd={() => {
          setcreators([...creators, qcreators]);
          setqcreators("");
        }}
        onRemove={(index) => {
          setcreators(creators.filter((_, i) => i !== index));
        }}
      />

      <InputBool
        label="Would you be open to talk about Discover.App to your followers and direct them to sign 
        up? We will give you a special link. You will be rewarded!"
        value={share}
        onChange={(e) => setshare(e)}
      />

      <Button
        onPress={() => {
          console.log(
            name,
            email,
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
            share
          );
          if (
            name &&
            email &&
            country &&
            ytn &&
            ign &&
            tkn &&
            twn &&
            ytl &&
            igl &&
            tkl &&
            twl &&
            content &&
            creators &&
            share
          ) {
            setloading(true);
            const addItem = async (item) => {
              const code = Math.random().toString().substr(2, 6);
              try {
                const res = await fetch("/api/createCre", {
                  method: "POST",
                  body: JSON.stringify({
                    Name: name,
                    Email: email,
                    country: country,
                    ytn: ytn,
                    ign: ign,
                    tkn: tkn,
                    twn: twn,
                    ytl: ytl,
                    igl: igl,
                    tkl: tkl,
                    twl: twl,
                    content: content.toString(),
                    creators: creators.toString(),
                    share: share,
                  }),
                  headers: { "content-type": "application/json" },
                });
                const newItem = await res.json();
                console.log(newItem);
                if (res.status == "200") {
                  setloading(false);
                  onclose();
                } else {
                  setloading(false);
                }
              } catch (error) {
                console.error(error);
                setloading(false);
              }
            };

            addItem();
          } else {
            alert("Complete all fields");
          }
        }}
        text={loading ? "Loading" : "Join as a creator or influencer"}
        active={
          name &&
          email &&
          country &&
          ytn &&
          ign &&
          tkn &&
          twn &&
          ytl &&
          igl &&
          tkl &&
          twl &&
          content &&
          creators &&
          share
        }
        // active={true}
      />
    </div>
  );
}
