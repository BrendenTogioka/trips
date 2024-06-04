import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-4">
      <div className="banner relative w-screen h-screen">
        <div className="z-10 relative max-w-screen-sm mx-auto p-4 mt-[20vh]">
          <h1 className="text-3xl sm:text-6xl font-bold mb-4 leading-tight">
            Westport-Union Landing State Beach
          </h1>
          <p className="text-lg sm:text-xl">
            Over 3 miles of rugged and scenic coastline, with 86 campsites
            available in three campgrounds on the bluffs.
          </p>
        </div>

        <Image
          src="/assets/sunset.jpg"
          alt="sunset banner"
          fill
          priority
          className="z-0 object-cover object-left"
        />
      </div>
      <div className="banner relative w-screen h-screen text-black">
        <div className="z-10 relative max-w-screen-sm mx-auto p-4 mt-[20vh]">
          <h1 className="text-3xl sm:text-6xl font-bold mb-4 leading-tight">
            Westport-Union Landing State Beach
          </h1>
          <p className="text-lg sm:text-xl">
            Over 3 miles of rugged and scenic coastline, with 86 campsites
            available in three campgrounds on the bluffs.
          </p>
        </div>

        <Image
          src="/assets/ocean.jpg"
          alt="ocean banner"
          fill
          priority
          className="z-0 object-cover"
        />
      </div>
      <div className="banner relative w-screen h-screen">
        <div className="z-10 relative max-w-screen-sm mx-auto p-4 mt-[20vh]">
          <h1 className="text-3xl sm:text-6xl font-bold mb-4 leading-tight">
            Westport-Union Landing State Beach
          </h1>
          <p className="text-lg sm:text-xl">
            Over 3 miles of rugged and scenic coastline, with 86 campsites
            available in three campgrounds on the bluffs.
          </p>
        </div>

        <Image
          src="/assets/arch.jpg"
          alt="arch banner"
          fill
          priority
          className="z-0 object-cover"
        />
      </div>
    </main>
  );
}
