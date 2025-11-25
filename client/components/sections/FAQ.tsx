import { useState } from "react";
import { Plus, X } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqs = [
    {
      question: "How do I report a lost item?",
      answer:
        "Simply fill out a short form with details of what you lost (including your full name, number, email, location, description and photos if available) pay the reward amount you offering to our community and submit. Your report will be visible to our community network.",
    },
    {
      question: "How do I share a tip?",
      answer:
        "If you have information about a lost item, click on the specific report and use the 'Share a Tip' button. Provide any relevant details or evidence you have. Once your tip leads to a successful recovery, you'll be eligible to claim the reward offered by the item owner.",
    },
    {
      question: "Do I need to pay to use fyndae?",
      answer:
        "Basic features like browsing reports and sharing tips are free. However, if you're reporting a lost item, you'll need to set a reward amount for the community. Our verification lookup system also requires a small fee to access detailed background checks on individuals and organizations.",
    },
    {
      question: "How do I get rewarded?",
      answer:
        "When your tip or information leads to the successful recovery of a lost item, the item owner will mark your contribution as helpful. You can then claim your reward through our secure payment system. Rewards are processed within 24-48 hours after verification.",
    },
    {
      question: "What items can I report?",
      answer:
        "You can report various lost items including personal belongings (phones, wallets, keys, jewelry), documents (IDs, passports, certificates), electronics, bags, and other valuables. We recommend including clear photos and detailed descriptions to increase the chances of recovery.",
    },
  ];

  return (
    <section className="w-full bg-white py-10 md:py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-4 sm:px-6">
        <div className="md:px-6 lg:px-20">
          <div className="max-w-7xl mx-auto flex flex-col items-center gap-8 md:gap-16">
            {/* Header */}
            <div className="flex flex-col items-center gap-4 max-w-3xl">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-[140%] tracking-[-2px] md:tracking-tight text-black text-center">
                Frequently Asked Questions
              </h2>
              <p className="text-sm md:text-lg lg:text-xl text-[#21242C] text-center leading-[130%] md:leading-relaxed">
                Explore answers about joining the community, submitting leads
                and recovering lost items securely through Fyndae.
              </p>
            </div>

            {/* FAQ Items */}
            <div className="w-full flex flex-col gap-4 md:gap-6">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onToggle={() =>
                    setOpenIndex(openIndex === index ? -1 : index)
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="w-full bg-[#F7F7F8] border-[0.5px] border-[#B7BECD] rounded-lg md:rounded-xl">
      <button
        onClick={onToggle}
        className="w-full p-4 md:p-8 lg:p-12 flex items-start md:items-center justify-between gap-7 md:gap-7 text-left"
      >
        <h3 className="flex-1 text-base md:text-xl lg:text-2xl font-semibold text-[#100E21] leading-[150%] md:leading-relaxed">
          {question}
        </h3>
        <div className="flex items-center justify-center w-8 h-8 md:w-[52px] md:h-[52px] rounded-[9.846px] md:rounded-2xl bg-[#117465] shrink-0">
          {isOpen ? (
            <X
              className="w-[17.231px] h-[17.231px] md:w-7 md:h-7 text-white"
              strokeWidth={1.23}
            />
          ) : (
            <Plus
              className="w-[17px] h-[17px] md:w-7 md:h-7 text-white"
              strokeWidth={1.23}
            />
          )}
        </div>
      </button>
      {isOpen && answer && (
        <div className="px-4 md:px-8 lg:px-12 pb-4 md:pb-8 lg:pb-12">
          <p className="text-sm md:text-lg text-[#383D48] leading-[130%] md:leading-relaxed">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}
