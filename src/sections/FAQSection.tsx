import SectionTitle from "@/components/SectionTitle/SectionTitle";
import DropDown from "@/components/DropDown";


const faqList = [
  {
    title: 'Tenho que pagar alguma coisa?',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    title: 'Quais as formas de pagamento?',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    title: 'O que são os grupos?',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    title: 'O que acontece se a assinatura parar de funcionar?',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    title: 'Posso cancelar a qualquer momento?',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
]

export default function FAQSection () {
  return (
    <main className="flex w-full items-center justify-center h-[952px] mb-4">
      <section className="flex flex-col items-center w-[970px] h-[614px]">
        <SectionTitle 
          title="Perguntas Frequentes"
          customClassesNames={{
            header: "mb-14 ",
            title: "text-5xl",
            description: "",
         }}
        />
        {faqList.map(({ title, message }, index) => (
          <DropDown key={title} title={title} message={message} id={index}/>
        ))}
      </section>
    </main>
  );
}