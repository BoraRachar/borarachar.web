import Category from "@/components/Footer/Category";
import Socials from "@/components/Footer/Socials";
import Newsletter from "@/components/Footer/Newsletter";

const CompanyCategoryData = {
  name: "Company",
  links: [
    {
      name: "About company",
      url: "#",
    },
    {
      name: "Company services",
      url: "#",
    },
    {
      name: "Job opportunities",
      url: "#",
    },
    {
      name: "Creative people",
      url: "#",
    },
    {
      name: "Contact us",
      url: "#",
    },
  ],
};

const CustomerCategoryData = {
  name: "Customer",
  links: [
    {
      name: "Client support",
      url: "#",
    },
    {
      name: "Latest news",
      url: "#",
    },
    {
      name: "Company story",
      url: "#",
    },
    {
      name: "Pricing packages",
      url: "#",
    },
    {
      name: "Who we are",
      url: "#",
    },
  ],
};

export default function FooterSection() {
  return (
    <footer
      id="footer-section"
      className="h-[491px] flex justify-center items-center"
    >
      <section id="footer-container" className="flex w-[85%] justify-between">
        <Socials />
        <Category
          name={CompanyCategoryData.name}
          links={CompanyCategoryData.links}
        />
        <Category
          name={CustomerCategoryData.name}
          links={CustomerCategoryData.links}
        />
        <Newsletter />
      </section>
    </footer>
  );
}
