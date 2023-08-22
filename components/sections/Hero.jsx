import Image from "next/image";

const Hero = () => {
  return (
    <div className="head">
      <div className="head_content">
        <h1 className="head_text">Make Your Tech Ideas Seen!!</h1>
        <p className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ab,
          dolor, cumque assumenda quos inventore repellat eius a voluptate
          recusandae, nemo eum porro nihil dolore!
        </p>
        <div className="flex gap-4 mt-4">
          <button className="custom_btn btn_hero mt-5">Explore Ideas</button>
          <button className="custom_btn_transp btn_hero_transp mt-5">
            How it works
          </button>
        </div>
      </div>
      <div>
        <Image
          src="/assets/images/illust02.png"
          width={650}
          height={650}
          alt="mockup of man looking out the window"
          className=""
        />
      </div>
    </div>
  );
};

export default Hero;
