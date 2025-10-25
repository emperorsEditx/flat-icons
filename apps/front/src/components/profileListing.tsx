import React from "react";

type ProfileListingProps = {
  text: string;
};

export default function ProfileListing({ text }: ProfileListingProps) {
  return (
    <li className="flex items-center my-5 gap-4 font-semibold text-[20px]">
      <span
        className="inline-block w-6 h-6"
        dangerouslySetInnerHTML={{
          __html: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M12 24C5.38286 24 0 18.6171 0 12C0 5.38286 5.38286 0 12 0C18.6171 0 24 5.38286 24 12C24 18.6171 18.6171 24 12 24ZM12 1.71429C6.32777 1.71429 1.71429 6.32777 1.71429 12C1.71429 17.6722 6.32777 22.2857 12 22.2857C17.6722 22.2857 22.2857 17.6722 22.2857 12C22.2857 6.32777 17.6722 1.71429 12 1.71429ZM10.8921 16.035L17.7493 9.17787C18.0846 8.8425 18.0846 8.30145 17.7493 7.96608C17.4139 7.63071 16.8729 7.63071 16.5375 7.96608L10.2868 14.2168L7.46466 11.3947C7.12929 11.0593 6.58823 11.0593 6.25286 11.3947C5.91749 11.73 5.91749 12.2711 6.25286 12.6064L9.68144 16.035C9.84858 16.2022 10.0682 16.2857 10.2879 16.2857C10.5075 16.2857 10.7271 16.2022 10.8943 16.035H10.8921Z"
              fill="#00A654"/>
          </svg>`,
        }}
      />
      {text}
    </li>
  );
}
