import type { NextPage } from "next";
import Body from "../components/Body";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-slate-100">
      <h1 className="text-4xl bg-red-200">Hello</h1>
      <Body />
    </div>
  );
};

export default Home;
