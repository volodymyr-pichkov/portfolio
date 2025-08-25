import { Phone } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <a
      href="tel:+3807778899"
      className="pt-6 sm:pt-8 md:pt-10 pb-2 sm:pb-3 md:pb-4 font-raleway text-xs sm:text-sm md:text-base non-italic font-semibold leading-normal tracking-navigation lining-nums proportional-nums whitespace-nowrap transition-colors duration-100 active:scale-90 flex items-center justify-center"
    >
      <span className="hidden lg:inline">+380 (777) 88-99</span>
      <span className="inline lg:hidden">
        <Phone size={20} />
      </span>
    </a>
  );
};

export default Contact;
