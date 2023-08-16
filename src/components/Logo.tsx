import { BiStoreAlt } from "react-icons/bi";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <BiStoreAlt className="h-4 w-4 text-primary lg:h-6 lg:w-6" />
      <span className="font-spaceMono text-base font-bold lg:text-lg">
        NF Marketplace
      </span>
    </div>
  );
};

export default Logo;
