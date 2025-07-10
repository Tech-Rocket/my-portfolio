import HeroImg from "../../public/images/hero-image-removebg-preview.png";

export default function HeroSection() {
  return (
    <>
      <section className="text-white px-4 grid grid-cols-1">
        <img
          src={HeroImg}
          alt="hero section image"
          className="w-full h-[14rem]"
        />

        <div className="flex flex-col items-center">
          <div className="px-4 py-2 rounded-full border border-green-600 flex items-center font-bold my-4">
            Hello!
          </div>

          <h1 className="text-[40px] font-medium text-center">
            I'm <span className="text-green-600">Lawrence Bee</span>, <br />{" "}
            <span>Software Developer</span> <br /> <span>Entrepreneur</span>{" "}
            <br /> <span>Tech Eushstiate</span>
          </h1>

          <p className="text-center my-4 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            nisi natus, facilis quidem doloribus perferendis accusantium
            similique nulla repellat? Fugit cum amet laborum labore quasi,
            reprehenderit ipsum vel iure fuga?
          </p>
        </div>
      </section>
    </>
  );
}
