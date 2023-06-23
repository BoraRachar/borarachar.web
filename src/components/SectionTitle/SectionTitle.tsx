import React from "react";
import classNames from "classnames";

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

const SectionTitle = ({
   title,
   description,
   customClassesNames,
}: SectionTitleProps) => {
   const headerClasses = classNames(
      "flex",
      "flex-col",
      "gap-8",
      customClassesNames?.header
   );
   const titleClasses = classNames(
      "text-5xl",
      "leading-[65px]",
      "font-medium",
      customClassesNames?.title
   );
   const descriptionClasses = classNames(
      "text-xl",
      "text-[#5A5A5A]",
      "font-normal",
      customClassesNames?.description
   );

   return (
      <header id={`section-title-header-${title}`} className={headerClasses}>
         <h2 id={`section-title-h2-${title}`} className={titleClasses}>
            {title}
         </h2>
         {description && (
            <p
               id={`section-title-description-${title}`}
               className={descriptionClasses}
            >
               {description}
            </p>
         )}
      </header>
   );
};

export default SectionTitle;
