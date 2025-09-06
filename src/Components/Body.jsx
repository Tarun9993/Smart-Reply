import { FaChrome } from "react-icons/fa";
import arrow from "../assets/image.png"
import email from "../assets/email.png"
import * as motion from "motion/react-client"

const Body = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center bg-[#eef2ff]">
      <div className="absolute w-[600px] h-[600px] bg-blue-200 rounded-full blur-3xl opacity-60"></div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          type: "spring",
          stiffness: 70,
          damping: 22
        }}
      >
        <h1 className="text-3xl md:text-5xl mt-28 font-semibold relative z-10 text-center">
          AI Email Reply Powered By{" "}
          <span className="bg-[#FFE7E9] px-2 rounded-lg text-3xl md:text-3xl underline">
            ChatGPT
          </span>
        </h1>
      </motion.div>
      <motion.h4
        className="mt-10 text-base md:text-xl font-mono relative z-10 text-neutral-800 text-center max-w-2xl px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.7,
          ease: "easeInOut"
        }}
      >
        Our AI assistant summarizes your emails and delivers smart, professional
        replies in seconds.
      </motion.h4>
      <img
        src={arrow}
        alt="arrow"
        className="absolute h-12 top-77 left-6 sm:h-24 md:h-25 sm:top-55 md:top-63 sm:left-30 md:left-110 z-20"
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 1.0,
          ease: "easeInOut"
        }}
      >
        <button
          className="flex bg-[#3771E0] text-base sm:text-lg md:text-xl 
             relative mt-10 ml-1 sm:mt-16 md:mt-13 text-white 
             items-center justify-center gap-3 sm:gap-4 md:gap-6 
             font-semibold px-6 sm:px-8 md:px-10 
             py-3 sm:py-3.5 md:py-4 
             rounded-3xl hover:bg-[#6197ED] cursor-pointer transition-all duration-200"
        >
          <FaChrome size={20} className="sm:size-[21px] md:size-[22px]" />
          <span className="text-center">Add to Chrome - It's Free</span>
        </button>
      </motion.div>

      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10 md:gap-16 px-4 md:px-10 mt-10 md:mt-20 relative py-6 md:py-10">

        <div className="bg-white p-3 rounded-2xl shadow-md">
          <img
            src={email}
            alt="email screenshot"
            className="w-full max-w-xs md:max-w-md lg:max-w-[600px] rounded-2xl"
          />
        </div>

        <div className="max-w-xl text-center md:text-left px-2">
          <h1 className="font-bold text-[#333333] text-2xl md:text-4xl tracking-wide">
            One-click to Generate Replies with AI
          </h1>
          <p className="mt-5 md:mt-7 font-medium text-neutral-700 text-base md:text-lg leading-relaxed">
            With just a single click, you have the ability to generate email replies
            effortlessly using Artificial Intelligence technology.
          </p>
          <p className="mt-5 md:mt-7 font-medium text-neutral-700 text-base md:text-lg leading-relaxed">
            SmartReply AI Reply employs natural language processing and machine learning to
            automatically create relevant, tone-appropriate replies.
          </p>

          <a
            href="#"
            className="mt-6 md:mt-8 inline-block text-[#3771E0] font-semibold text-base md:text-lg hover:underline"
          >
            Add to Browser →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Body;
