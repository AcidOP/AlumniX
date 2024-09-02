import { MdClose, MdOutlineMenu } from 'react-icons/md';

interface HamburgerProps {
  isOpen: boolean;
  toggle: () => void;
}

const HamburgerButton = ({ isOpen, toggle }: HamburgerProps) => {
  const Icon = isOpen ? MdClose : MdOutlineMenu;

  return (
    <button onClick={toggle}>
      <Icon size={35} />
    </button>
  );
};

export default HamburgerButton;
