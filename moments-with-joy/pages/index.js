import backgroundImage from "../public/backgroundImage.jpg";
import profile from "../public/profile.jpg"
import Image from "next/image";
export default function Home() {
  return (
    <div className={"w-full "}>
      <Image src={backgroundImage} className={"object-cover"} />
      <div className="grid grid-cols-2 gap- m-10">

        <span className="text-center ml-[-140px]">
          <Image src={profile} className={"rounded-[50%] object-cover"} width={400} height={400} />
          <h1 className=" mt-[15px] font-bold font-mono text-3xl">
            Joy Ayomi
          </h1>
          <p>Writer</p>
        </span>

        <span className="ml-[-100px]">
          <h1 className=" mt-[15px] font-bold font-mono text-6xl mb-4">
            About Joy
          </h1>
          <p className="font-sans"> write about lifestyle, relationship, love matters and life issues in general.
            But guess what??I won’t be doing this alone. I’ll be discussing these issues with y’all to have your opinions about them. I’m so excited to be doing this with y’all
            I hope we all make it a Moment here.
          </p>
        </span>

        <span>
          <h1 className="text-center mt-[15px] font-bold font-sans MT text-6xl mb-4">
            WHAT I DO
          </h1>
          <p>
            Hello I am Joy Ayomi
            I write about lifestyle, relationship, love matters and life issues in general.
            But guess what??I won’t be doing this alone. I’ll be discussing these issues with y’all to have your opinions about them. I’m so excited to be doing this with y’all
            I hope we all make it a Moment here.
          </p>
        </span>
      </div>
    </div>
  )
}
