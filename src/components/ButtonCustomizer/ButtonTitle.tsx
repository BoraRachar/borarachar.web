interface ButtonTitleProps {
  title: string;
  customClassesNames: string;
}
export function ButtonTitle({ title, customClassesNames }: ButtonTitleProps) {
  return (
    <span className={customClassesNames}>{title}</span>
  )
}