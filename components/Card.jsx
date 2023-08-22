import Image from "next/image";

const Card = ({ text, src }) => {
  return (
    <div className="flex flex-col justify-center items-center border rounded-[5px] border-red-500 max-w-[400px] w-[300px] sm:w-[200px]">
      <Image src={src} width={50} height={50} className="py-4" />
      <div className="px-4 pb-4 text-center">{text}</div>
    </div>
  );
};

export default Card;
