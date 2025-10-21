import { useSelector } from "react-redux";
import type { RootState } from "../app/store";

export default function SumReduxBasic() {
  const sum = useSelector((state: RootState) =>
    state.counters.reduce((acc, c) => acc + c.value, 0)
  );

  return (
    <div className="px-6 py-3.5 text-base font-medium text-white bg-blue-700 rounded-lg text-center">
      Total Sum: {sum}
    </div>
  );
}
