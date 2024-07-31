import ContentBlock from "@/components/content-block";
import H1 from "@/components/h1";
import MyPlantsDetails from "@/components/my-plants-detail";
import MyPlantsList from "@/components/my-plants-list";
import MyPlantsSearchBar from "@/components/my-plants-search-bar";
import PlantSearchBar from "@/components/plant-search-bar";
import Stats from "@/components/stats";

export default function DashboardPage() {
  return (
    <main>
      <div className="flex items-center justify-between text-black py-8">
        <section>
          <H1>
            Welcome <span className="bg-green-600 text-white">Username</span>
          </H1>
        </section>
        <section>
          <PlantSearchBar />
        </section>
        <Stats />
      </div>

      <div className="grid md:grid-cols-3 md:grid-rows-[45px_1fr] grid-rows-[45px_300px_500px] gap-2 md:h-[600px]">
        <div className="md:row-start-1 md:row-span-1 md:col-span-1">
          <MyPlantsSearchBar />
        </div>

        <div className="md:row-start-2 md:row-span-full md:col-start-1 md:col-span-1 shadow-lg">
          <ContentBlock>
            <MyPlantsList />
          </ContentBlock>
        </div>

        <div className="md:row-start-1 md:row-span-full md:col-start-2 md:col-span-full shadow-lg">
          <ContentBlock>
            <MyPlantsDetails />
          </ContentBlock>
        </div>
      </div>
    </main>
  );
}
