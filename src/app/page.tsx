import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#ECEADF] min-h-screen flex items-center justify-center px-6 sm:px-12">
      <div className="max-w-7xl w-full flex flex-col sm:flex-row items-center sm:items-center gap-16 sm:gap-32">
        {/* Left Column – Text */}
        <div className="flex-1 pl-2 sm:pl-20 flex flex-col justify-center">
          {/* Header logo */}
          <div className="mb-4">
            <Image
              src="/stutterscope-logo.png"
              alt="StutterScope logo"
              width={180}
              height={38}
            />
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl font-bold text-[#008080] leading-tight">
            Stuttering insights,<br /> personalized for you
          </h1>

          {/* Blurb */}
          <p className="mt-4 text-lg max-w-xl font-serif text-black">
            StutterScope helps you understand your unique stuttering patterns. Log, reflect, and grow with tools designed to support your journey toward confident communication.
          </p>

          {/* App Store Badge */}
          <div className="mt-6">
            <Image
              src="/app-store-badge.png"
              alt="Available on the App Store"
              width={150}
              height={50}
            />
          </div>
        </div>

        {/* Right Column – Phone Image */}
        <div className="hidden sm:flex flex-1 justify-start items-center">
          <Image
            src="/stutterscope-phone.png"
            alt="StutterScope app preview"
            width={320}
            height={640}
          />
        </div>
      </div>
    </main>
  );
}
