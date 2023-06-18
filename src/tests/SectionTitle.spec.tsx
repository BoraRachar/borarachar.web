import SectionTitle from "../components/SectionTitle/SectionTitle";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";

// Unit test for SectionTitle
describe("SectionTitle", () => {
   it("Should be render correctly the component", () => {
      render(<SectionTitle title="Bora Rachar" />);
      expect(screen.getByText("Bora Rachar")).toBeInTheDocument();
   });
   it("Should be rendered a section title with description", () => {
      render(<SectionTitle title="Bora Rachar" description="..." />);
      expect(screen.getByText("Bora Rachar")).toBeInTheDocument();
      expect(screen.getByText("...")).toBeInTheDocument();
   });
   it("Should be possible change the title text color with the custom classes", () => {
      render(
         <SectionTitle
            title="Bora Rachar"
            customClassesNames={{ title: "text-red-500" }}
         />
      );
      expect(screen.getByText("Bora Rachar")).toHaveClass("text-red-500");
   });
   it("Should be possible change the description text color with the custom classes", () => {
      render(
         <SectionTitle
            title="Bora Rachar"
            description="..."
            customClassesNames={{ description: "text-red-500" }}
         />
      );
      expect(screen.getByText("...")).toHaveClass("text-red-500");
   });
});
