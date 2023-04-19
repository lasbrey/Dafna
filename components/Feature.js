import Image from "next/image";
import React from "react";

const features = [
  "Branding.",
  "Sreative Services.",
  "Digital Marketing.",
  "Public Relations.",
  "Social Media Marketing",
];

const Feature = () => {
  return (
    <div className="bg-gradient-to-b from-white-300 to-white-500 p-4">
      <div
        className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto "
        id="about"
      >
        <div className="grid grid-flow-row  gap-8 p  y-8 my-12">
          <div>
            <div className="flex flex-col items-center justify-center ml-auto w-full">
              <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
                About Dafna Consult
              </h3>
              <p className="my-2 text-black-500">
                Dafna also offers public relations services, helping businesses
                build relationships with the media and manage their reputations.
                Our social media marketing services are also excellent, with a
                focus on creating engaging content that can help businesses
                build relationships with their customers on social media
                platforms.
              </p>
              <p className="my-2 text-black-500">
                Our digital marketing services include search engine
                optimization, pay-per-click advertising, and social media
                marketing, all of which can help businesses increase their
                online visibility and drive traffic to their websites.
              </p>
              <p className="my-2 text-black-500">
                Our strength is our expertise in developing brand strategies
                that resonate with consumers. We use data-driven insights and
                consumer research to create powerful brand messaging that can
                help businesses stand out in a crowded marketplace.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
