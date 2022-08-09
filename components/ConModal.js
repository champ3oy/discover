import { useRouter } from "next/router";
import React from "react";
import Input from "./Input";
import Dropdown from "./Dropdown";
import Button from "./Button";

export default function ConModal() {
  const router = useRouter();
  const [active, setActive] = React.useState("");

  React.useEffect(() => {
    if (["/", "/creators", "/consumer"].includes(router.pathname)) {
      setActive(router.pathname);
    }
  }, [router.pathname]);

  return (
    <div>
      <Input label="Your Name" placeholder="Type your name here" value="" />
      <Input label="Email Address" placeholder="name@email.com" value="" />

      <Input
        label="What is your current location?"
        placeholder="Pick your country"
        value=""
      />

      <Dropdown
        label="What would you want to discover?"
        placeholder="Pick what you will like to discover"
        value=""
      />
      <Dropdown
        label="What OS do you use?"
        placeholder="Pick which OS you use"
        value=""
      />
      <Input
        label="How many new apps do you downoad per month?"
        placeholder="Type the number here"
        value=""
      />
      <Dropdown
        label={`Do you care if about the rewards / tokens DSCVR tokens for participating in this \ncommunity?`}
        placeholder="Pick your budget range"
        value=""
      />
      <Input
        label="Which apps developers, creators, publishers and communities would you want to see on 
        Discover.App "
        placeholder="Type amount here"
        value=""
      />
      <Input
        label="Share email address of your friends you would want to introduce to Discover.App"
        placeholder="Type email here"
        value=""
      />

      <Button text="Join as a developer or Publisher " />
    </div>
  );
}
