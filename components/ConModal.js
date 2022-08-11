import { useRouter } from "next/router";
import React from "react";
import Input from "./Input";
import Dropdown from "./Dropdown";
import Button from "./Button";
import InputAdd from "./InputAdd";
import InputBool from "./InputBool";

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

      <Dropdown
        label="What is your current location?"
        placeholder="Pick your country"
        value=""
      />
      <Dropdown
        label="What phone do you use?"
        placeholder="Pick which phone you use"
        value=""
      />
      <InputBool
        label="Do you care about getting rewards for participating in this community?"
        value=""
      />
      <InputAdd
        label="Which apps, developers, creators, publishers and communities would you want to see on 
        Discover.App"
        placeholder="Type the name and add"
        value=""
      />
      <InputAdd
        label="Share email addresses of your friends you would want to introduce to Discover.App"
        placeholder="Type the email address and add"
        value=""
      />

      <Button text="Join as a developer or Publisher " />
    </div>
  );
}
