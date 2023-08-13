import { BiStoreAlt } from "react-icons/bi";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <BiStoreAlt className="h-6 w-6 text-primary lg:h-8 lg:w-8" />
      <span className="font-spaceMono text-lg font-bold lg:text-xl">
        NF Marketplace
      </span>
    </div>
  );
};

export default Logo;
