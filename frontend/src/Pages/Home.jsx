import FilterBox from "../components/FilterBox";
import HomePageSections from "../components/HomePageSections";

const Home = () => {
  return (
    <div className="container ">
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <p className="text-blackText tracking-light text-[32px] font-bold leading-tight min-w-72">
          All Meals
        </p>
      </div>
      <FilterBox />


      <HomePageSections />
    </div>
  );
};

export default Home;
