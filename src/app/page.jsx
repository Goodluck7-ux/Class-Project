import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-10">Welcome to My Website</h1>
      <p className="text-center mt-4 text-lg">This is a simple homepage built with Next.js and Tailwind CSS.</p>
      <div className="flex justify-center mt-6">
        <Image
          src="/images/hero-image.jpg"
          alt="Hero Image"
          width={600}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
