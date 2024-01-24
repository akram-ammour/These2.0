import Image from "next/image";

type Props = {
  width?: number;
  height?: number;
};

const Loader = ({ width, height }: Props) => {
  return (
    <Image
      src={"/loader.svg"}
      priority
      width={width}
      height={height}
      alt="logo loading"
      className="animate-spin"
    />
  );
};

export default Loader;
