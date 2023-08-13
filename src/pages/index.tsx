import Image from "next/image";

const Home = () => {
  return (
    <>
      <figure className="relative h-[60vh]">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-black/50 to-transparent z-[1]" />
        <Image
          src="/images/thumbnail.jpg"
          alt="썸네일"
          fill
          priority
          className="object-cover"
        />
      </figure>
    </>
  );
};

export default Home;
