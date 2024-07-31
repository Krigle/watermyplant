import ContentBlock from "@/components/content-block";
import H1 from "@/components/h1";
import React from "react";

export default function AccountPage() {
  return (
    <main>
      <H1 className="my-8 ">
        Your <span className="bg-green-600 text-white">Account</span>
      </H1>

      <ContentBlock className="h-[500px] flex justify-center items-center">
        Logged in as...
      </ContentBlock>
    </main>
  );
}
