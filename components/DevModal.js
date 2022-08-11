import { useRouter } from "next/router";
import React from "react";
import Input from "./Input";
import Dropdown from "./Dropdown";
import Button from "./Button";
import InputAdd from "./InputAdd";

export default function DevModal({ temail }) {
  const router = useRouter();
  const [active, setActive] = React.useState("");
  const [loading, setloading] = React.useState(false);

  const [name, setname] = React.useState("");
  const [email, setemail] = React.useState(temail);
  const [country, setcountry] = React.useState("");
  const [devtype, setdevtype] = React.useState("");
  const [numApps, setnumApps] = React.useState("");
  const [links, setlinks] = React.useState("");
  const [budget, setbudget] = React.useState("");
  const [monthly, setmonthly] = React.useState("");

  React.useEffect(() => {
    if (["/", "/creators", "/consumer"].includes(router.pathname)) {
      setActive(router.pathname);
    }
  }, [router.pathname]);

  return (
    <div>
      <Input
        label="Name of Developer or Publisher"
        placeholder="Your name here"
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
        value=""
        country={true}
        onChange={(e) => setcountry(e)}
      />
      <Dropdown
        label="What kind of developer or publisher are you?"
        placeholder="Pick which type"
        value=""
        data={[
          {
            name: "Individual / Starter",
          },
          {
            name: "Business / Pro",
          },
          {
            name: "Enterprise",
          },
        ]}
        onChange={(e) => setdevtype(e)}
      />
      <Input
        label="How many games or apps do your publish every year?"
        placeholder="Type a number"
        value={numApps}
        type="number"
        onChange={(e) => setnumApps(e)}
      />
      <InputAdd
        label="Share a link to your appstore or playstore page"
        placeholder="Type link here"
        value={links}
        onChange={(e) => setlinks(e)}
      />
      <Input
        label="What is your annual marketing budget?"
        placeholder="Type your budget"
        value={budget}
        prefix="$"
        type="number"
        onChange={(e) => setbudget(e)}
      />
      <Input
        label="How much would you pay per month for your app or game to be showcased and 
        introduced to our community? "
        placeholder="Type amount here"
        value={monthly}
        prefix="$"
        type="number"
        onChange={(e) => setmonthly(e)}
      />

      <Button
        onPress={() => {
          console.log(
            name,
            email,
            country,
            devtype,
            numApps,
            links,
            budget,
            monthly
          );
          if (
            name &&
            country &&
            email &&
            devtype &&
            numApps &&
            links &&
            budget &&
            monthly
          ) {
            setloading(true);
            const addItem = async (item) => {
              const code = Math.random().toString().substr(2, 6);
              try {
                const res = await fetch("/api/createDev", {
                  method: "POST",
                  body: JSON.stringify({
                    Name: name,
                    Email: email,
                    country: country,
                    dev: devtype,
                    apps: numApps,
                    links: links,
                    budget: budget,
                    month: monthly,
                  }),
                  headers: { "content-type": "application/json" },
                });
                const newItem = await res.json();
                console.log(newItem);
                if (res.status == "200") {
                  setloading(false);
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
        text={loading ? "Loading" : "Join as a developer or Publisher "}
        active={
          name &&
          country &&
          email &&
          devtype &&
          numApps &&
          links &&
          budget &&
          monthly
        }
        // active={true}
      />
    </div>
  );
}
