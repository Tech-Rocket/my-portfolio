import HeroImg from "../../public/images/hero-image-removebg-preview.png";

export default function HeroSection() {
  return (
    <>
      <section className="text-white px-4 grid grid-cols-1">
        <img
          src={HeroImg}
          alt="hero section image"
          className="w-full h-[12rem]"
        />

        <div></div>
      </section>
    </>
  );
}
