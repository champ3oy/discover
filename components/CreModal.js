import { useRouter } from "next/router";
import React from "react";
import Input from "./Input";
import Dropdown from "./Dropdown";
import Button from "./Button";

export default function CreModal() {
  const router = useRouter();
  const [active, setActive] = React.useState("");

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
        value=""
      />
      <Input label="Email Address" placeholder="name@email.com" value="" />

      <Dropdown
        label="What kind of developer or publisher are you?"
        placeholder="Pick a type"
        value=""
      />
      <Dropdown
        label="How many games or apps do your publish every year?"
        placeholder="Pick a number"
        value=""
      />
      <Input
        label="Share a link to your appstore or playstore page"
        placeholder="Type link here"
        value=""
      />
      <Dropdown
        label="What is your annual marketing budget?"
        placeholder="Pick your budget range"
        value=""
      />
      <Input
        label="How much would you pay per month for your app or game to be showcased and 
        introduced to our community? "
        placeholder="Type amount here"
        value=""
      />

      <Button text="Join as a developer or Publisher " />
    </div>
  );
}
