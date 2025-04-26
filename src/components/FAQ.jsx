import { useState } from "react";
import { ChevronDown } from "lucide-react"; // Optional: Install lucide-react for nice icons
import Cta from "./Cta";

const faqs = [
  {
    question: "Enim sed faucibus turpis in eu mi bibendum neque egestas?",
    answer: "Mattis ullamcorper velit sed ullamcorper morbi tincidunt. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Diam quis enim lobortis scelerisque fermentum dui faucibus. Urna nunc id cursus metus aliquam eleifend mi. Gravida quis blandit turpis cursus in hac."
  },
  {
    question: "Amet consectetur adipiscing elit pellentesque habitant morbi tristique?",
    answer: "Mattis ullamcorper velit sed ullamcorper morbi tincidunt. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Diam quis enim lobortis scelerisque fermentum dui faucibus. Urna nunc id cursus metus aliquam eleifend mi. Gravida quis blandit turpis cursus in hac."
  },
  {
    question: "Elit pellentesque habitant morbi tristique senectus?",
    answer: "Mattis ullamcorper velit sed ullamcorper morbi tincidunt. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Diam quis enim lobortis scelerisque fermentum dui faucibus. Urna nunc id cursus metus aliquam eleifend mi. Gravida quis blandit turpis cursus in hac."
  },
  {
    question: "Gravida quis blandit turpis cursus in hac. Mi ipsum faucibus vitae aliquet nec?",
    answer: "Mattis ullamcorper velit sed ullamcorper morbi tincidunt. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Diam quis enim lobortis scelerisque fermentum dui faucibus. Urna nunc id cursus metus aliquam eleifend mi. Gravida quis blandit turpis cursus in hac."
  },
  {
    question: "Est pellentesque elit ullamcorper dignissim cras. In pellentesque massa placerat?",
    answer: "Mattis ullamcorper velit sed ullamcorper morbi tincidunt. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Diam quis enim lobortis scelerisque fermentum dui faucibus. Urna nunc id cursus metus aliquam eleifend mi. Gravida quis blandit turpis cursus in hac."
  }
];

 function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq">
    <section className="py-16 px-6  max-w-[1216px]  mx-auto">
      <div className="text-center mb-10">
        <span className="text-sm font-semibold text-indigo-600 uppercase bg-indigo-100 rounded-full px-3 py-1 inline-block mb-3">FAQ</span>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Fermentum iaculis eu non diam phasellus vestibulum. Volutpat commodo sed egestas egestas
          fringilla phasellus. Donec ac odio tempor orci dapibus ultrices.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b">
            <button
              className="flex justify-between items-center w-full py-4 text-left text-lg font-semibold text-gray-800"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex items-center gap-2">
                <span className="text-indigo-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8z"
                    />
                  </svg>
                </span>
                {faq.question}
              </div>
              <ChevronDown
                className={`w-6 h-6 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="pb-4 text-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
      <Cta/>
    </section>
    </div>
  );
}
export default FAQ