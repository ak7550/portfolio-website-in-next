import React from 'react'
import { FaRegHand } from 'react-icons/fa6';

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center"
    >
      <p className="font-titleFont text-lg text-textGreen font-semibold flex items-center tracking-wide">
        04. What's Next ?
      </p>
      <h2 className="font-titleFont text-5xl font-semibold">Get in touch...</h2>
      <p className="max-w-[600px] text-center text-textDark">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla a
        corrupti sapiente quis quasi adipisci nisi facere id omnis itaque odio
        quia dolorum, at reprehenderit beatae culpa est neque dolor.
      </p>
      <a href="mailto:ghoshaniketkumar7@gmail.com">
        <button className="w-40 h-14 border border-textGreen flex flex-row items-center justify-center mt-6 font-titleFont text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300">
          Say Hello
          <FaRegHand className="rotate-45 p-3 font-titleFont text-5xl" />
        </button>
      </a>
    </section>
  )
}

export default Contact