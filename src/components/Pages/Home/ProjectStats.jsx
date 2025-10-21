import MotionSection from "@/components/Common/MotionSection";
import SectionHeading from "@/components/Ui/SectionHeading";

const ProjectStats = () => {
  return (
    /* --------------------Project-Stats-------------------- */
    <MotionSection className='section sectionPadding '>

      {/* ------------------Section Heading---------------- */}
      <SectionHeading subtitle='Latest Service' title=<>Inspiring The World One <br /> Project</> description='Business consulting consultants provide expert advice and guida businesses to help them improve their performance, efficiency, and organizational'></SectionHeading>

      {/* -------------Project-Stats Container------------- */}
      <div className="flex flex-col md:flex-row lg:flex-row justify-between gap-7 text-center">

        {/* -----------Web Design Stat Card----------- */}
        <div className="w-full border border-pink-light space-y-2 rounded-2xl py-10 md:py-5 lg:py-10">
          {/* -------------------Icons---------------- */}
          <span className="flex justify-center text-pink-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 48 48"><path fill="currentColor" d="M12.812 6.222a1.25 1.25 0 0 0-2.048-.934C8.366 7.278 6.905 8.8 6.06 10.198C5.168 11.667 5 12.93 5 14.247a5.5 5.5 0 1 0 11 0c0-1.795-.89-3.006-1.59-3.957l-.203-.278c-.724-1.004-1.355-2.008-1.395-3.791m4.102 4.199A9.5 9.5 0 0 1 21 9.5c4.909 0 8.948 3.723 9.448 8.5H26.25A6.25 6.25 0 0 0 20 24.25v4.198a9.4 9.4 0 0 1-2.062-.452a54 54 0 0 1-.208 2.553q1.098.312 2.27.41v3.791A6.25 6.25 0 0 0 26.25 41h10.5A6.25 6.25 0 0 0 43 34.75v-10.5A6.25 6.25 0 0 0 36.75 18h-3.791c-.508-6.16-5.668-11-11.96-11a11.95 11.95 0 0 0-5.518 1.341c.105.162.221.327.348.503l.19.257c.25.335.579.776.896 1.32M32.906 20.5h3.843a3.75 3.75 0 0 1 3.75 3.75v10.5a3.75 3.75 0 0 1-3.75 3.75h-10.5a3.75 3.75 0 0 1-3.75-3.75v-3.843A12.006 12.006 0 0 0 32.906 20.5m-2.525 0a9.51 9.51 0 0 1-7.882 7.882V24.25a3.75 3.75 0 0 1 3.75-3.75zm-24.55.167q.087-.203.188-.404a7.47 7.47 0 0 0 4.481 1.485a7.47 7.47 0 0 0 4.484-1.488q.102.202.19.409c.7 1.649.826 3.665.826 5.278c0 2.64-.408 6.68-1.156 10.08c-.373 1.693-.845 3.3-1.43 4.513c-.29.603-.641 1.177-1.073 1.616c-.435.442-1.052.844-1.837.844s-1.402-.401-1.837-.843c-.432-.44-.783-1.013-1.074-1.616c-.586-1.213-1.06-2.82-1.433-4.513c-.75-3.4-1.16-7.44-1.16-10.081c0-1.614.128-3.63.831-5.28"></path></svg>
          </span>
          {/* ------------Animated-Heading------------ */}
          <h3 className="relative w-fit font-bold hover:text-pink-primary text-2xl md:text-xl lg:text-2xl group mx-auto cursor-pointer">
            Web Design
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-primary group-hover:w-full transition-all duration-300"></div>
          </h3>
          {/* --------------Project Count------------- */}
          <p className="font-rubik text-sm text-gray-medium">03 Projects</p>
        </div>

        {/* ----------Ui/Ux Design Stat Card---------- */}
        <div className="w-full border border-pink-light space-y-2 rounded-2xl py-10 md:py-5 lg:py-10">
          {/* -------------------Icons---------------- */}
          <span className="flex justify-center text-pink-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 32 32"><path fill="currentColor" d="M12 6v3H5.812C5.396 7.844 4.293 7 3 7c-1.645 0-3 1.355-3 3s1.355 3 3 3c1.293 0 2.395-.844 2.813-2h2.312c-.41.39-.766.816-1.094 1.281c-1.156 1.637-1.836 3.656-2 5.719H2v8h8v-8H7.062c.165-1.672.711-3.313 1.594-4.563c.86-1.218 1.965-2.07 3.344-2.343V14h8v-2.906c1.379.273 2.484 1.125 3.344 2.344c.883 1.25 1.43 2.89 1.593 4.562H22v8h8v-8h-3.031c-.164-2.063-.844-4.082-2-5.719A8.6 8.6 0 0 0 23.875 11h2.313c.417 1.156 1.519 2 2.812 2c1.645 0 3-1.355 3-3s-1.355-3-3-3c-1.293 0-2.395.844-2.813 2H20V6zm2 2h4v4h-4zM3 9c.563 0 1 .438 1 1s-.438 1-1 1s-1-.438-1-1s.438-1 1-1m26 0c.563 0 1 .438 1 1s-.438 1-1 1s-1-.438-1-1s.438-1 1-1M4 20h4v4H4zm20 0h4v4h-4z"></path></svg>
          </span>
          {/* ------------Animated-Heading------------ */}
          <h3 className="relative w-fit font-bold hover:text-pink-primary text-2xl md:text-xl lg:text-2xl group mx-auto cursor-pointer">
            Ui/Ux Design
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-primary group-hover:w-full transition-all duration-300"></div>
          </h3>
          {/* --------------Project Count------------- */}
          <p className="font-rubik text-sm text-gray-medium">01 Projects</p>
        </div>

        {/* -----------Web Research Stat Card--------- */}
        <div className="w-full border border-pink-light space-y-2 rounded-2xl py-10 md:py-5 lg:py-10">
          {/* -------------------Icons---------------- */}
          <span className="flex justify-center text-pink-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M304 384v-24c0-29 31.54-56.43 52-76c28.84-27.57 44-64.61 44-108c0-80-63.73-144-144-144a143.6 143.6 0 0 0-144 144c0 41.84 15.81 81.39 44 108c20.35 19.21 52 46.7 52 76v24m16 96h64m-80-48h96m-48-48V256"></path><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M294 240s-21.51 16-38 16s-38-16-38-16"></path></svg>
          </span>
          {/* ------------Animated-Heading------------ */}
          <h3 className="relative w-fit font-bold hover:text-pink-primary text-2xl md:text-xl lg:text-2xl group mx-auto cursor-pointer">
            Web Research
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-primary group-hover:w-full transition-all duration-300"></div>
          </h3>
          {/* --------------Project Count------------- */}
          <p className="font-rubik text-sm text-gray-medium">05 Projects</p>
        </div>

        {/* ------------Marketing Stat Card----------- */}
        <div className="w-full border border-pink-light space-y-2 rounded-2xl py-10 md:py-5 lg:py-10">
          {/* -------------------Icons---------------- */}
          <span className="flex justify-center text-pink-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 32 32"><path fill="currentColor" d="M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m-2.2 2L16 14.78L6.2 8ZM4 24V8.91l11.43 7.91a1 1 0 0 0 1.14 0L28 8.91V24Z"></path></svg>
          </span>
          {/* ------------Animated-Heading------------ */}
          <h3 className="relative w-fit font-bold hover:text-pink-primary text-2xl md:text-xl lg:text-2xl group mx-auto cursor-pointer">
            Marketing
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-primary group-hover:w-full transition-all duration-300"></div>
          </h3>
          {/* --------------Project Count------------- */}
          <p className="font-rubik text-sm text-gray-medium">00 Projects</p>
        </div>

      </div>



    </MotionSection>
  );
};

export default ProjectStats;