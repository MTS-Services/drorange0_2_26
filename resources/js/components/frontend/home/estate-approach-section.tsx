import React from "react";

import { Link } from "@inertiajs/react";
import { useReveal } from "@/hooks/use-reveal";

const lpaSteps = [
  {
    title: "Enter personal details",
    description:
      "Enter the details for everyone who needs to appear on the document, including the full name, address, and date of birth for any attorneys you want to nominate.",
  },
  {
    title: "Documents are checked by experts",
    description:
      "Once our experts have checked your documents they are posted immediately. If you’d like help at any stage call 0808 169 3475.",
  },
  {
    title: "Documents are signed",
    description:
      "The documents are clearly labelled indicating exactly where to sign. Simply sign and date them and you’re ready to register.",
  },
  {
    title: "Documents are posted",
    description:
      "Post your document using the envelope provided. Once registered, your document will be sent back to you ready to use.",
  },
];

const explanationCards = [
  {
    title: "What is a Lasting Power of Attorney?",
    body:
      "A lasting power of attorney (LPA) is a legal document that lets you (the donor) appoint one or more people (attorneys) to help you make decisions or to make decisions on your behalf when you lack mental capacity.",
  },
  {
    title: "Health & Welfare LPA",
    body:
      "Gives an attorney the power to make decisions about your daily routine, medical care, moving into a care home, or life-sustaining treatment. It can only be used when you’re unable to make your own decisions.",
  },
  {
    title: "Property & Finance LPA",
    body:
      "Lets an attorney manage bank accounts, pay bills, collect benefits, or even sell your home. It can be used as soon as it’s registered, with your permission.",
  },
  {
    title: "Signing your Lasting Power of Attorney",
    body:
      "Signing and dating is easy—simply follow the instructions provided. We clearly label every page so you can be 100% sure you’re signing in the correct place before registration.",
  },
  {
    title: "Registering your documents",
    body:
      "The Office of the Public Guardian charges £0–£92 per LPA. Fees are paid directly to the OPG once the registration process begins by card or cheque. Documents aren’t legally binding until they are registered.",
  },
  {
    title: "No deadlines, but register to activate",
    body:
      "There’s no deadline to submit your documents, but they only become legally effective once registered. Our service confirms your exact registration fees and walks you through payment options.",
  },
];

export function EstateApproachSection() {
  const [headerRef, headerVisible] = useReveal<HTMLDivElement>();
  const [listRef, listVisible] = useReveal<HTMLDivElement>(0.2);

  return (
    <section className="max-w-7xl mx-auto lg:py-20 py-10 px-8 bg-gray-50">
    <div className="">
      <div className="text-center mb-12"> 
        <h2 className="font-sf-pro font-semibold text-gray-900 text-3xl md:text-4xl xl:text-5xl">What Our Clients Say</h2>
        <p className="text-gray-600 mt-3 font-inter font-normal text-xl">Join hundreds of satisfied homeowners who transformed their bathrooms with us.</p>
      </div>
  
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  
        <div className="review-card">
          <div className="flex gap-0.5 mb-3">
            <span className="star text-2xl font-bold">★★★★★</span>
          </div>
          <p className="text-base font-inter font-normal italic text-gray-700 leading-relaxed mb-4">"The entire process was seamless! From the estimate to the final installation, everything was professional, and the results exceeded our expectations."</p>
          <div>
            <p className=" font-inter font-bold text-base text-gray-900">Sarah Johnson</p>
            <p className="font-inter font-normal text-sm text-gray-400">Columbus, OH</p>
          </div>
        </div>
  
        <div className="review-card">
          <div className="flex gap-0.5 mb-3">
            <span className="star text-2xl font-bold">★★★★★</span>
          </div>
          <p className="text-base font-inter font-normal italic text-gray-700 leading-relaxed mb-4">"They communicated via text beautifully. The team was punctual, clean, and the results exceeded our expectations and were completed on time."</p>
          <div>
            <p className="font-inter font-bold text-base text-gray-900">Michael Chen</p>
            <p className="font-inter font-normal text-sm text-gray-400">Columbus, OH</p>
          </div>
        </div>
  
        <div className="review-card">
          <div className="flex gap-0.5 mb-3">
            <span className="star text-2xl font-bold">★★★★★</span>
          </div>
          <p className="text-base font-inter font-normal italic text-gray-700 leading-relaxed mb-4">"I loved being able to track the progress in real time. The estimates were accurate and there were no surprise costs – just a beautiful new bathroom!"</p>
          <div>
            <p className="font-inter font-bold text-base text-gray-900">Emily Rodriguez</p>
            <p className="font-inter font-normal text-sm text-gray-400">Columbus, OH</p>
          </div>
        </div>
  
      </div>
    </div>
  </section>
  );
}
