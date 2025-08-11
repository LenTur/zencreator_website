import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      question: "How long to onboard?",
      answer: "Connect socials & spin first asset in < 10 minutes."
    },
    {
      question: "Does ZenCreator replace my current scheduler?",
      answer: "Yes — direct APIs for all major platforms."
    },
    {
      question: "Can I use my own AI models?",
      answer: "Upload LoRa or checkpoint files; lock to your workspace."
    },
    {
      question: "Enterprise SLA?",
      answer: "99.9 % uptime, dedicated account team, on-prem storage optional."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-[150px] bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left side - Title */}
          <div className="lg:col-span-2">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              Frequently asked questions
            </h2>
          </div>
          
          {/* Right side - FAQ Items */}
          <div className="lg:col-span-3">
            <div className="space-y-4">
              {faqData.map((item, index) => (
                <div 
                  key={index}
                  className="border-b border-gray-200 last:border-b-0"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors rounded-lg px-4"
                  >
                    <span className="text-lg font-semibold text-gray-900 pr-4">
                      {item.question}
                    </span>
                    <ChevronDown 
                      className={`w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  {openIndex === index && (
                    <div className="px-4 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
