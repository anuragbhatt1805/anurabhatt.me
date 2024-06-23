import { Introduction } from "./Introduction";
import { Hello } from "./Hello";

export function Home() {
  return (
    <div>
      <div className="grid md:grid-cols-2 grid-cols-1 items-center mx-10 gap-2 my-10 max-md:gap-y-10">
        <div className="flex flex-wrap flex-col items-center justify-center">
          <Introduction />
        </div>
        <div className="flex flex-wrap flex-col items-center justify-center">
          <Hello />
        </div>
      </div>
    </div>
  );
}