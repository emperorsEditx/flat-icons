import { Separator } from "@/components/ui/separator";

export default function page() {
  return (
    <>
      <div className="max-w-4xl mx-auto my-20 space-y-6 text-center">
        <h1 className="font-bold text-[40px]">About</h1>
        <p className="text-[26px] leading-[40px]">
          I&apos;m an icon designer with 12 years of experience. Welcome to my
          website! Here you&apos;ll find a showcase of my work and information about
          my design process. I&apos;m passionate about creating impactful and
          memorable icons that elevate brands and enhance user experiences.
        </p>
      </div>
      <Separator />
      <div className="w-full mx-auto my-20 space-y-6 text-center">
        <h1 className="font-bold text-[40px] py-9">Features</h1>
        <section className="grid grid-cols-2 md:grid-cols-4">
          <article className="border p-5 pt-36 px-5 border-t-0 border-l-0">
            <h3 className="font-semibold text-[26px]">Exclusive</h3>
            <p className="text-[20px]">
              Unique and uniform icons from an exclusive source.
            </p>
          </article>
          <article className="border p-5 pt-36 px-5 border-t-0">
            <h3 className="font-semibold text-[26px]">Fill & Outline</h3>
            <p className="text-[20px]">
              Unique and uniform icons from an exclusive source.
            </p>
          </article>
          <article className="border p-5 pt-36 px-5 border-t-0">
            <h3 className="font-semibold text-[26px]">Lightweight</h3>
            <p className="text-[20px]">
              Unique and uniform icons from an exclusive source.
            </p>
          </article>
          <article className="border p-5 pt-36 px-5 border-t-0 border-r-0">
            <h3 className="font-semibold text-[26px]">Pixel Precise</h3>
            <p className="text-[20px]">
              Unique and uniform icons from an exclusive source.
            </p>
          </article>
          <article className="border p-5 pt-36 px-5 border-b-0 border-l-0">
            <h3 className="font-semibold text-[26px]">HTML Snippets</h3>
            <p className="text-[20px]">
              Unique and uniform icons from an exclusive source.
            </p>
          </article>
          <article className="border p-5 pt-36 px-5 border-b-0">
            <h3 className="font-semibold text-[26px]">Multiple Formats</h3>
            <p className="text-[20px]">
              Unique and uniform icons from an exclusive source.
            </p>
          </article>
          <article className="border p-5 pt-36 px-5 border-b-0">
            <h3 className="font-semibold text-[26px]">Favourites</h3>
            <p className="text-[20px]">
              Unique and uniform icons from an exclusive source.
            </p>
          </article>
          <article className="border p-5 pt-36 px-5 border-b-0 border-r-0">
            <h3 className="font-semibold text-[26px]">Icon Generator</h3>
            <p className="text-[20px]">
              Unique and uniform icons from an exclusive source.
            </p>
          </article>
        </section>
      </div>
    </>
  );
}
