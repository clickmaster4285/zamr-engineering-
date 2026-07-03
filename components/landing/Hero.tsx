"use client";




export default function Hero() {
  return (
    <section className="relative isolate min-h-screen w-full overflow-hidden bg-[#050b1f] text-white">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/video1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[#050b1f]/10" />


      {/* Hero content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <p className="mb-6 text-sm  tracking-[0.35em] text-slate-100">
          SYDNEY &middot; NSW &middot; AUSTRALIA
        </p>
        <h1 className="max-w-7xl font-sans text-4xl sm:text-5xl md:text-8xl font-bold leading-[1.15] tracking-tight ">
          Engineering Infrastructure
          <br />
          for the Future
        </h1>
      </div>
    </section>
  );
}