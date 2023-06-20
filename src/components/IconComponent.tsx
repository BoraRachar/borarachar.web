import Image from 'next/image';

interface IconComponentProps {
  url: string;
  widthIcon: number;
  heightIcon: number;
}

const IconComponent: React.FC<IconComponentProps> = ({ 
  url,
  widthIcon,
  heightIcon,
}) => {
  return (
    <Image src={url} alt='icone' width={widthIcon} height={heightIcon}/>
  );
}

export default IconComponent;
