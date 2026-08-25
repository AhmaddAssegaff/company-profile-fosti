import Squares from "@/components/Squares/Squares";
import Wrapper from "@/components/Wrapper";

export default function HomePage() {
  return (
    <div className="relative w-full">
      <div className="absolute inset-0 z-0 opacity-30 dark:opacity-[0.15]">
        <Squares
          speed={0.35}
          squareSize={30}
          direction="down" // up, down, left, right, diagonal
          borderColor={"#bababa"}
        />
      </div>
      <div className="relative z-10">
        <Wrapper />
      </div>
    </div>
  );
}
