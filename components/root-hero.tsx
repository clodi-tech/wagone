import Image from "next/image";

export default function Hero() {
  return (
    <section>
      <Image
        src="/hero.webp"
        alt="see the world by rail"
        width={2380}
        height={1024}
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
        priority
      />
    </section>
  );
}
