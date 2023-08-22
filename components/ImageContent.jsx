import Image from "next/image";

const ImageContent = ({
  imageContClass,
  imageContHead,
  imageContParag,
  imageContList1,
  imageContList2,
  imageContList3,
}) => {
  return (
    <div className={imageContClass}>
      <Image
        src="/assets/images/illust01.png"
        width={550}
        height={550}
        className=""
      />
      <div className="w-full py-10 px-4 sm:w-[500px] flex flex-col gap-4 justify-center">
        <h1 className="font-bold font-satoshi text-2xl">{imageContHead}</h1>
        <p className="font-satoshi py-2 ">{imageContParag}</p>
        <ul className="pl-4">
          <li>{imageContList1}</li>
          <li>{imageContList2}</li>
          <li>{imageContList3}</li>
        </ul>
      </div>
    </div>
  );
};

export default ImageContent;
