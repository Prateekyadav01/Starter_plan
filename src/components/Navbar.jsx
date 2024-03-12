import { TbShoppingCartPlus } from "react-icons/tb";
import { Link } from "react-router-dom";
import imageLogo from '../components/images/istockphoto-1729402032-170667a.webp';

const Navbar = () => {
  return (
    <div className="bg-blue-400">
      <div className="container mx-auto flex justify-evenly items-center py-4">
        <img className="w-32" src={imageLogo} alt="Logo" />

        <div className="flex gap-3 items-center">
          <Link to="/" className="text-white font-semibold hover:text-gray-200">
            Home
          </Link>
          <Link to="/cart" className="text-white hover:text-gray-200">
            <TbShoppingCartPlus className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
