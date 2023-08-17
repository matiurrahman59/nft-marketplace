import Image from "next/image";

const wallets = [
  {
    title: "Metamask",
    url: "/images/wallet-1.png",
  },
  {
    title: "Wallet Connect",
    url: "/images/wallet-2.png",
  },
  {
    title: "Coinbase",
    url: "/images/wallet-3.png",
  },
];

const ConnectWallet = () => {
  return (
    <section>
      <div className="sm:grid sm:grid-cols-2 sm:gap-[30px] lg:gap-10">
        <div className="relative h-[232px] sm:h-full">
          <Image
            src="/images/wallet-sm.png"
            fill
            alt="sign up banner image"
            className="sm:hidden"
          />
          <Image
            src="/images/wallet-lg.png"
            fill
            alt="sign up banner image"
            className="hidden object-cover sm:flex"
          />
        </div>

        <div className="px-7 py-10 sm:mr-7 sm:px-0 md:w-[90%] lg:py-20 2xl:w-[60%]">
          <h3>Create Account</h3>
          <p className="pt-5 lg:text-xl">
            Choose a wallet you want to connect. There are several wallet
            providers.
          </p>

          <div className="pt-[30px] sm:pt-10 md:w-[85%]">
            <div className="space-y-5">
              {wallets.map((wallet) => (
                <div className="scale-animation flex items-center gap-5 rounded-5 border-0 bg-secondary py-3 pl-10 pr-5 text-[22px] font-semibold leading-[30.8px] ring-1 ring-primary">
                  <Image
                    src={wallet.url}
                    width={32}
                    height={32}
                    alt="MetaMask"
                    className="lg:h-10 lg:w-10"
                  />
                  <span>{wallet.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectWallet;
