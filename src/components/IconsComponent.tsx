import Logo from '../assets/Logo.svg';
import Image from 'next/image';

const IconsComponent: React.FC = () => {
  return (
    <Image src={Logo} alt='icone'/>
  );
}

export default IconsComponent;
