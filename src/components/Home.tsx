import ReduxBasic from "../components/ReduxBasic";
import SumReduxBasic from "../components/SumReduxBasic";
import Posts from "./Posts";

export default function Home() {
  return (
    <div className="m-3 p-2 w-fit rounded bg-yellow-100 hover:bg-yellow-200">
      <h1 className="text-2xl mb-3 text-center">Home</h1>
      <ReduxBasic id={1} />
      <ReduxBasic id={2} />
      <SumReduxBasic />
      <hr />
      <Posts />
    </div>
  );
}
