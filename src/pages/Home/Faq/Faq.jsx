import React from "react";

const Faq = () => {
  return (
    <div className="space-y-4 py-10">
        <h1 className="text-center font-bold text-3xl mb-5">Have Questions</h1>
      <div className="collapse collapse-plus bg-white dark:border dark:bg-black dark:border-gray-800 dark:text-white">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-medium text-primary">
          What subjects can I book a tutor for?
        </div>
        <div className="collapse-content">
          <p>
            You can book a tutor for various subjects such as Math, Science,
            English, History, and more. Simply choose the subject when booking a
            session.
          </p>
        </div>
      </div>

      <div className="collapse collapse-plus bg-white dark:border dark:bg-black dark:border-gray-800 dark:text-white">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium text-primary">
          How do I book a tutor?
        </div>
        <div className="collapse-content">
          <p>
            To book a tutor, select the subject you need help with, choose a
            tutor based on their availability, and schedule a session at your
            convenience.
          </p>
        </div>
      </div>

      <div className="collapse collapse-plus bg-white dark:border dark:bg-black dark:border-gray-800 dark:text-white">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium text-primary">
          What if I need to cancel or reschedule my session?
        </div>
        <div className="collapse-content">
          <p>
            You can cancel or reschedule your session up to 24 hours in advance.
            Any cancellations made within this time frame will not incur a
            charge.
          </p>
        </div>
      </div>

      <div className="collapse collapse-plus bg-white dark:border dark:bg-black dark:border-gray-800 dark:text-white">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium text-primary">
          How are tutors selected for my sessions?
        </div>
        <div className="collapse-content">
          <p>
            Tutors are selected based on their expertise in the subject,
            experience, and availability. You can also view reviews and ratings
            from other students.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
