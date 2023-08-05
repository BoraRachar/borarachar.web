import Checkbox from "@/components/Form/Checkbox";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
describe("Checkbox component", () => {
   it("Should be render correctly the component", () => {
      let checked = true;
      render(
         <Checkbox
            title="Teste"
            currentState={checked}
            onClickFunction={() => {
               checked = !checked;
            }}
         />
      );
      expect(screen.getByText("Teste")).toBeInTheDocument();
   });

   it("Should be one checked state", () => {
      let checked = true;
      render(
         <Checkbox
            title="Teste"
            currentState={checked}
            onClickFunction={() => {
               checked = !checked;
            }}
         />
      );
      const checkbox = screen.getByTestId("checkbox-input-Teste");
      expect(checkbox).toBeChecked();
   });

   it("Should be one unchecked state", () => {
      let checked = false;
      render(
         <Checkbox
            title="Teste"
            currentState={checked}
            onClickFunction={() => {
               checked = !checked;
            }}
         />
      );
      const checkbox = screen.getByTestId("checkbox-input-Teste");
      expect(checkbox).not.toBeChecked();
   });
});
