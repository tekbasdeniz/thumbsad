import ExperiencesMarquee from "@/components/sections/ExperiencesMarquee";

export default function ExperiencesPageEn() {
  return (
    <div className="w-full min-h-[70vh] flex flex-col items-center justify-center bg-white px-6 py-24">
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6 mb-16">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-black">
          Experiences
        </h1>
        <p className="text-xl md:text-2xl text-gray-500 max-w-2xl leading-relaxed font-light mt-4">
          Selected sectors and project environments reflecting ThumbsAd’s capabilities.
        </p>
      </div>

      {/* Marquee snippet for visual representation */}
      <ExperiencesMarquee hideHeader={true} hideButton={true} />
    </div>
  );
}
