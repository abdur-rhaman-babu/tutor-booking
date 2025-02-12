import React from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const About = () => {
  return (
    <section>
      <SectionTitle title="About Us" />
      <div className="my-5 max-w-5xl mx-auto text-center space-y-5">
        <h1 className="font-bold text-4xl text-center"> Who We Are</h1>
        <p className="text-justify">
          Wouldn't it be nice to have one place, an online tutoring site, where
          you can hire online tutors from anywhere in the world and according to
          your needs and budget? You just post your requirements and, voila, you
          have multiple offers to choose from immediately? Also, wouldn't it be
          nice to have that site come with all the tools and technologies
          necessary for real-time, online teaching?
        </p>
        <p className="text-justify">
          Tutor Booking is an online tutor marketplace that allows you to hire
          elite tutors from anywhere in the world based on your needs and
          budget. You can hire tutors online for all subjects and levels, from
          online tutoring for kids to university-level education.
        </p>
        <p className="text-justify">
          Tutor Booking has a state-of-the-art video, audio, chat, and whiteboard
          communication technologies that is second to none among online
          tutoring sites. You can hire your tutor and run your tutoring sessions
          at the same place. On Tutor Booking, teachers and students enjoy various
          tools that make the online teaching environment smooth and effective,
          including a scheduling and alert system, the ability to record videos
          and store files, multiple payment gateways, and a lot more.
        </p>
      </div>
    </section>
  );
};

export default About;
