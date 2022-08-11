import { useRouter } from "next/router";
import React from "react";
import Input from "./Input";
import Dropdown from "./Dropdown";
import Button from "./Button";
import InputAdd from "./InputAdd";
import InputBool from "./InputBool";

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
        label="What is your current location?"
        placeholder="Pick your country"
        value=""
      />

      <InputAdd
        label="What type of content do you produce"
        placeholder="Type content and add"
        value=""
      />
      <InputAdd
        label="List and share contacts of other creators and influencers who will benefit from this 
        content discovery service"
        placeholder="Type creator or influencer name and add"
        value=""
      />

      <InputBool
        label="Would you be open to talk about Discover.App to your followers and direct them to sign 
        up? We will give you a special link. You will be rewarded!"
        value=""
      />

      <Button text="Join as a developer or Publisher " />
    </div>
  );
}
