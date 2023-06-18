import React from "react";

interface CustomClassesNamesSectionTitleProps {
   header?: string;
   title?: string;
   description?: string;
}

interface SectionTitleProps {
   title: string;
   description?: string;
   customClassesNames?: CustomClassesNamesSectionTitleProps;
}

// This component will be used in all of section titles, this need receive a title.
// Description and custom classes names are optional.

const SectionTitle = ({
   title,
   description,
   customClassesNames,
}: SectionTitleProps) => {
   return (
      <header
         id={`section-title-header-${title}`}
         className={`flex flex-col gap-8 ${customClassesNames?.header ?? ""}`}
      >
         <h2
            id={`section-title-h2-${title}`}
            className={`text-5xl leading-[65px] font-medium ${
               customClassesNames?.title ?? ""
            }`}
         >
            {title}
         </h2>
         {description && (
            <p
               id={`section-title-description-${title}`}
               className={`text-xl text-[#5A5A5A] font-normal ${
                  customClassesNames?.description ?? ""
               }`}
            >
               {description}
            </p>
         )}
      </header>
   );
};

export default SectionTitle;
