import Link from "next/link";

export default function page() {
  return (
    <div className="max-w-4xl mx-auto my-20 space-y-6 text-center">
      <h1 className="font-bold text-[40px] py-9">Q&A</h1>
      <h3 className="text-[30px] font-bold pt-10">
        Can I use the icons for commercial projects?
      </h3>
      <p className="text-[26px] leading-[40px]">
        All icons are free for any commercial use. For more information on the
        rights of use, please see the license agreement.
      </p>
      <h3 className="text-[30px] font-bold pt-10">
        How can I download all the icons at once?
      </h3>
      <p className="text-[26px] leading-[40px]">
        This functionality is not available and violates the license agreement.
        iconmonstr icons are primarily for users who need particular icons for
        their projects.
      </p>
      <h3 className="text-[30px] font-bold pt-10">
        Are the icon guidelines of OS systems respected?
      </h3>
      <p className="text-[26px] leading-[40px]">
        In contrast to many other publishers, this project aims to establish and
        develop a universal and unique style of icon design.
      </p>
      <h3 className="text-[30px] font-bold pt-10">
        Do you offer a custom icon design service?
      </h3>
      <p className="text-[26px] leading-[40px]">
        wHATANICON does not create individual icons. But you’re welcome to send
        me ideas via <span className="font-bold">Email</span>
      </p>
      <h3 className="text-[30px] font-bold pt-10">
        What advertising options do you offer?
      </h3>
      <p className="text-[26px] leading-[40px]">
        Advertising on <span className="font-bold">whatanicon</span> is
        exclusively carried out by Carbon Ads. The{" "}
        <Link href="https://www.carbonads.net/">Carbon Ads</Link> team will
        gladly support you in case you have further questions about advertising
        options.
      </p>
    </div>
  );
}
