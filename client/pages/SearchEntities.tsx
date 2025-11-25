import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import { ArrowRight } from "lucide-react";

interface Category {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const categories: Category[] = [
  {
    title: "Schools & Universities",
    description:
      "Verify the identity and background of potential students before admission or enrollment.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24.5013 19.8333V11.7833L14.0013 17.5L1.16797 10.5L14.0013 3.5L26.8346 10.5V19.8333H24.5013ZM14.0013 24.5L5.83464 20.0667V14.2333L14.0013 18.6667L22.168 14.2333V20.0667L14.0013 24.5Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: "Companies & Recruiters",
    description:
      "Verify the legitimacy and trustworthiness of candidates before hiring, especially for remote or international roles.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.33203 22.1666H25.6654V25.6666H2.33203V22.1666ZM13.9987 2.33325L2.33203 6.99992V9.33325H25.6654V6.99992L13.9987 2.33325ZM19.832 11.6666H23.332V19.8333H19.832V11.6666ZM12.2487 11.6666H15.7487V19.8333H12.2487V11.6666ZM4.66536 11.6666H8.16537V19.8333H4.66536V11.6666Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: "Embassies & Government Agencies",
    description:
      "Strengthen due diligence by cross-checking applicants against trusted reports before approvals or processing.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.8005 26.1333V20.5333H11.2005V26.1333H1.86719V12.1333C1.86719 11.6107 2.27785 11.2 2.80052 11.2H7.46719V10.2667C7.46719 9.744 7.87785 9.33333 8.40052 9.33333H13.0672V1.86667L16.8005 0L20.5339 1.86667L24.2672 0V5.6L20.5339 7.46667L16.8005 5.6L14.9339 6.53333V9.33333H19.6005C20.1232 9.33333 20.5339 9.744 20.5339 10.2667V11.2H25.2005C25.7232 11.2 26.1339 11.6107 26.1339 12.1333V26.1333H16.8005ZM22.4005 14.9333V18.6667H24.2672V14.9333H22.4005ZM18.6672 14.9333V18.6667H20.5339V14.9333H18.6672ZM18.6672 20.5333V24.2667H20.5339V20.5333H18.6672ZM22.4005 20.5333V24.2667H24.2672V20.5333H22.4005ZM7.46719 20.5333V24.2667H9.33385V20.5333H7.46719ZM3.73385 20.5333V24.2667H5.60052V20.5333H3.73385ZM14.9339 14.9333V18.6667H16.8005V14.9333H14.9339ZM11.2005 14.9333V18.6667H13.0672V14.9333H11.2005ZM7.46719 14.9333V18.6667H9.33385V14.9333H7.46719ZM3.73385 14.9333V18.6667H5.60052V14.9333H3.73385Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: "Individuals",
    description:
      "Verify the people you interact with to ensure safety before dates, deals or personal engagements.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.33333 8.16667C9.33333 6.92899 9.825 5.742 10.7002 4.86683C11.5753 3.99167 12.7623 3.5 14 3.5C15.2377 3.5 16.4247 3.99167 17.2998 4.86683C18.175 5.742 18.6667 6.92899 18.6667 8.16667C18.6667 9.40434 18.175 10.5913 17.2998 11.4665C16.4247 12.3417 15.2377 12.8333 14 12.8333C12.7623 12.8333 11.5753 12.3417 10.7002 11.4665C9.825 10.5913 9.33333 9.40434 9.33333 8.16667ZM9.33333 15.1667C7.78624 15.1667 6.30251 15.7812 5.20854 16.8752C4.11458 17.9692 3.5 19.4529 3.5 21C3.5 21.9283 3.86875 22.8185 4.52513 23.4749C5.1815 24.1313 6.07174 24.5 7 24.5H21C21.9283 24.5 22.8185 24.1313 23.4749 23.4749C24.1313 22.8185 24.5 21.9283 24.5 21C24.5 19.4529 23.8854 17.9692 22.7915 16.8752C21.6975 15.7812 20.2138 15.1667 18.6667 15.1667H9.33333Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: "Insurance Companies",
    description:
      "Verify clients, partners and entities to reduce risk and ensure trustworthy interactions.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.819 2.56081L22.9857 5.62331C23.4305 5.79007 23.8139 6.08864 24.0845 6.47913C24.3551 6.86961 24.5001 7.33339 24.5 7.80848V14.0653C24.5 16.0153 23.9571 17.9268 22.9319 19.5856C21.9068 21.2444 20.44 22.5849 18.6958 23.457L14.7828 25.4123C14.5398 25.5339 14.2718 25.5972 14 25.5972C13.7282 25.5972 13.4602 25.5339 13.2172 25.4123L9.30417 23.4558C7.56005 22.5837 6.09323 21.2432 5.06808 19.5844C4.04293 17.9256 3.49996 16.0141 3.5 14.0641V7.80964C3.4997 7.33436 3.64456 6.87032 3.91518 6.4796C4.1858 6.08889 4.56929 5.79014 5.01433 5.62331L13.181 2.56081C13.7091 2.36287 14.2909 2.36287 14.819 2.56081ZM14 9.33331C13.7142 9.33335 13.4384 9.43826 13.2249 9.62814C13.0114 9.81803 12.8749 10.0797 12.8415 10.3635L12.8333 10.5V12.8333H10.5C10.2026 12.8336 9.91663 12.9475 9.7004 13.1516C9.48418 13.3558 9.35406 13.6348 9.33663 13.9316C9.31921 14.2285 9.41579 14.5208 9.60664 14.7488C9.7975 14.9768 10.0682 15.1234 10.3635 15.1585L10.5 15.1666H12.8333V17.5C12.8337 17.7973 12.9475 18.0833 13.1517 18.2996C13.3558 18.5158 13.6348 18.6459 13.9316 18.6633C14.2285 18.6808 14.5208 18.5842 14.7488 18.3933C14.9768 18.2025 15.1234 17.9318 15.1585 17.6365L15.1667 17.5V15.1666H17.5C17.7974 15.1663 18.0834 15.0525 18.2996 14.8483C18.5158 14.6442 18.6459 14.3652 18.6634 14.0683C18.6808 13.7715 18.5842 13.4792 18.3934 13.2512C18.2025 13.0231 17.9318 12.8766 17.6365 12.8415L17.5 12.8333H15.1667V10.5C15.1667 10.1906 15.0437 9.89381 14.825 9.67502C14.6062 9.45623 14.3094 9.33331 14 9.33331Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: "Legal and Accounting Firms",
    description:
      "Validate clients, partners and entities to mitigate risk and ensure compliance.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.9987 3.5C12.5171 3.5 11.1987 4.43333 10.7087 5.83333H3.49874V8.16667H5.77374L2.33207 16.3333C1.78374 18.6667 3.49874 19.8333 6.41541 19.8333C9.33207 19.8333 11.1521 18.6667 10.4987 16.3333L7.05707 8.16667H10.6971C11.0821 9.15833 11.8404 9.91667 12.8321 10.3017V23.3333H2.33207V25.6667H25.6654V23.3333H15.1654V10.29C16.1571 9.91667 16.9154 9.15833 17.2887 8.16667H20.9404L17.4987 16.3333C16.9504 18.6667 18.6654 19.8333 21.5821 19.8333C24.4987 19.8333 26.3187 18.6667 25.6654 16.3333L22.2237 8.16667H24.4987V5.83333H17.3004C16.7987 4.43333 15.4804 3.5 13.9987 3.5ZM13.9987 5.83333C14.3082 5.83333 14.6049 5.95625 14.8237 6.17504C15.0425 6.39383 15.1654 6.69058 15.1654 7C15.1654 7.30942 15.0425 7.60616 14.8237 7.82496C14.6049 8.04375 14.3082 8.16667 13.9987 8.16667C13.6893 8.16667 13.3926 8.04375 13.1738 7.82496C12.955 7.60616 12.8321 7.30942 12.8321 7C12.8321 6.69058 12.955 6.39383 13.1738 6.17504C13.3926 5.95625 13.6893 5.83333 13.9987 5.83333ZM6.41541 11.9583L8.16541 16.3333H4.66541L6.41541 11.9583ZM21.5821 11.9583L23.3321 16.3333H19.8321L21.5821 11.9583Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: "Real Estate Agencies",
    description:
      "Verify clients, tenants and partners to protect your assets, transactions and investments.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.1654 10.85V4.66667H18.6654V7.7L13.9987 3.5L2.33203 14H5.83203V23.3333H11.6654V16.3333H16.332V23.3333H22.1654V14H25.6654L22.1654 10.85ZM11.6654 11.6667C11.6654 10.3833 12.7154 9.33333 13.9987 9.33333C15.282 9.33333 16.332 10.3833 16.332 11.6667H11.6654Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: "Private Security and Investigators",
    description:
      "Verify individuals and entities to enhance due diligence and operational safety.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.832 2.33325C11.2849 2.33325 9.8012 2.94783 8.70724 4.0418C7.61328 5.13576 6.9987 6.61949 6.9987 8.16659C6.9987 9.71368 7.61328 11.1974 8.70724 12.2914C9.8012 13.3853 11.2849 13.9999 12.832 13.9999C14.3791 13.9999 15.8629 13.3853 16.9568 12.2914C18.0508 11.1974 18.6654 9.71368 18.6654 8.16659C18.6654 6.61949 18.0508 5.13576 16.9568 4.0418C15.8629 2.94783 14.3791 2.33325 12.832 2.33325ZM12.832 15.1666C10.0379 15.1666 7.49453 15.9763 5.62436 17.1173C4.69103 17.6866 3.89303 18.3586 3.3167 19.0889C2.7497 19.8053 2.33203 20.6651 2.33203 21.5833C2.33203 22.5691 2.81153 23.3461 3.5022 23.9003C4.15553 24.4253 5.0177 24.7729 5.93353 25.0156C7.77453 25.5021 10.2315 25.6666 12.832 25.6666L13.6312 25.6608C13.8266 25.6581 14.0182 25.6063 14.1884 25.5103C14.3586 25.4143 14.5019 25.2771 14.6053 25.1113C14.7086 24.9454 14.7687 24.7563 14.7799 24.5612C14.7911 24.3661 14.7532 24.1714 14.6695 23.9948C14.2271 23.0584 13.998 22.0355 13.9987 20.9999C13.9987 19.5393 14.4455 18.1859 15.2085 17.0648C15.3219 16.8981 15.3903 16.705 15.4068 16.5041C15.4234 16.3033 15.3876 16.1015 15.303 15.9186C15.2184 15.7357 15.0879 15.5778 14.9241 15.4603C14.7603 15.3428 14.5689 15.2697 14.3685 15.2483C13.8661 15.1938 13.3539 15.1666 12.832 15.1666ZM21.3674 16.3928C21.128 16.313 20.8693 16.313 20.63 16.3928L17.13 17.5594C16.8976 17.6368 16.6955 17.7854 16.5522 17.9841C16.409 18.1829 16.332 18.4216 16.332 18.6666V20.6161C16.3319 21.864 16.7919 23.0681 17.6241 23.998C18.4562 24.9279 19.6021 25.5183 20.8424 25.6561C20.9474 25.6678 21.0516 25.6678 21.155 25.6561C22.3953 25.5183 23.5412 24.9279 24.3733 23.998C25.2055 23.0681 25.6655 21.864 25.6654 20.6161V18.6666C25.6654 18.4216 25.5884 18.1829 25.4452 17.9841C25.3019 17.7854 25.0998 17.6368 24.8674 17.5594L21.3674 16.3928Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

function CategoryCard({ title, description, icon }: Category) {
  return (
    <div className="bg-gradient-to-br from-[#117465] to-[#0A463D] rounded-[10px] p-6 md:p-10 flex flex-col gap-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer relative overflow-hidden">
      <div className="flex items-center justify-center w-14 h-14 rounded-md bg-white/10 border border-white/20 text-white group-hover:bg-white group-hover:text-[#0A463D] transition-colors">
        {icon}
      </div>
      <div className="flex flex-col gap-2.5">
        <h3 className="text-white font-semibold text-xl md:text-2xl leading-[150%]">
          {title}
        </h3>
        <div className="flex flex-col justify-between gap-4 min-h-[165px]">
          <p className="text-white/90 text-base md:text-lg leading-[150%]">
            {description}
          </p>
          <button className="text-[#E5FDC5] font-bold text-base md:text-lg leading-[150%] text-left flex items-center gap-2 group-hover:gap-3 group-hover:text-white transition-all hover:underline">
            Click to run a search
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function SearchEntities() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Get Started - Search Entities Section */}
      <section className="w-full bg-[#F7F7F8] py-12 md:py-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20">
          <div className="flex flex-col items-center gap-6">
            <h2 className="text-[#100E21] font-semibold text-3xl md:text-5xl leading-[130%] text-center">
              Get Started With Our Verification Search System
            </h2>
            <p className="text-[#3F3E4D] text-base md:text-lg leading-[150%] text-center max-w-5xl">
              In today's connected world, opportunities and risks often travel
              together. Whether you are a company hiring remote workers, an
              embassy, school or organization processing applications or an
              individual preparing to meet someone new, protecting yourself with
              the right information.
            </p>

            {/* Category Cards Grid */}
            <div className="w-full max-w-6xl mt-8 md:mt-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {categories.map((category, index) => (
                  <CategoryCard
                    key={index}
                    title={category.title}
                    description={category.description}
                    icon={category.icon}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
