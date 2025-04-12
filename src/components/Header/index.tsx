import Logo from '../../assets/logo.svg'

export default function Header() {
  return (
    <header className="w-full h-[200px] flex items-center justify-center bg-gray-700">
      <img src={Logo} alt="Todo rockeseat logo" />
    </header>
  );
}
