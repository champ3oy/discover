import { useRouter } from "next/router";
import React from "react";
import Input from "./Input";
import Dropdown from "./Dropdown";
import Button from "./Button";
import InputAdd from "./InputAdd";
import InputBool from "./InputBool";

export default function ConModal({ temail, onclose = () => {} }) {
  const router = useRouter();
  const [active, setActive] = React.useState("");
  const [loading, setloading] = React.useState(false);

  const [name, setname] = React.useState("");
  const [email, setemail] = React.useState(temail);
  const [country, setcountry] = React.useState("");
  const [phone, setphone] = React.useState("");
  const [rewards, setrewards] = React.useState("");
  const [links, setlinks] = React.useState("");
  const [emails, setemails] = React.useState("");

  console.log(email);

  React.useEffect(() => {
    if (["/", "/creators", "/consumer"].includes(router.pathname)) {
      setActive(router.pathname);
    }
  }, [router.pathname]);

  return (
    <div>
      <Input
        value={name}
        onChange={(e) => setname(e)}
        label="Your Name"
        placeholder="Type your name here"
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
      <Dropdown
        label="What phone do you use?"
        placeholder="Pick which phone you use"
        value=""
        data={[
          {
            name: "Android",
          },
          {
            name: "iOS",
          },
        ]}
        onChange={(e) => setphone(e)}
      />
      <InputBool
        label="Do you care about getting rewards for participating in this community?"
        value={rewards}
        onChange={(e) => setrewards(e)}
      />
      <InputAdd
        label="Which apps, developers, creators, publishers and communities would you want to see on 
        Discover.App"
        placeholder="Type the name and add"
        value={links}
        onChange={(e) => setlinks(e)}
      />
      <InputAdd
        label="Share email addresses of your friends you would want to introduce to Discover.App"
        placeholder="Type the email address and add"
        value={emails}
        onChange={(e) => setemails(e)}
      />

      <Button
        onPress={() => {
          console.log(name, email, country, phone, rewards, links, emails);
          if (name && email && country && phone && rewards && links && emails) {
            setloading(true);
            const addItem = async (item) => {
              const code = Math.random().toString().substr(2, 6);
              try {
                const res = await fetch("/api/createCon", {
                  method: "POST",
                  body: JSON.stringify({
                    Name: name,
                    Email: email,
                    country: country,
                    phone: phone,
                    rewards: rewards,
                    links: links,
                    emails: emails,
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
        text={loading ? "Loading" : "Join as a consumer or surperfan"}
        active={name && email && country && phone && rewards && links && emails}
        // active={true}
      />
    </div>
  );
}
