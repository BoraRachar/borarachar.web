import Image from 'next/image';

interface IconComponentProps {
  url: string;
}

const IconComponent: React.FC<IconComponentProps> = ({ url }) => {
  return (
    <Image src={url} alt='icone' width={100} height={100}/>
  );
}

export default IconComponent;
