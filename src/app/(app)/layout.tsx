import BackgroundPattern from "@/components/background-pattern";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import PlantContextProvider from "@/contexts/plant-context-provider";
import SearchContextProvider from "@/contexts/search-context-provider";
import { Plant } from "@/lib/types";
import React from "react";

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const response = await fetch(
    `https://perenual.com/api/species-list?key=sk-oPKM66a4dfb30e7496350 ` as unknown as RequestInfo
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const responseData = await response.json();
  const data: Plant[] = await responseData.data;

  // console.log(data);
  return (
    <>
      <BackgroundPattern />
      <div className="flex flex-col mx-auto h-[93vh]">
        <MaxWidthWrapper>
          <SearchContextProvider initialData={data}>
            <PlantContextProvider data={data}>{children}</PlantContextProvider>
          </SearchContextProvider>
        </MaxWidthWrapper>
      </div>
    </>
  );
}
