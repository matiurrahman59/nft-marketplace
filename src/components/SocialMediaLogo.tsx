import {
  RxDiscordLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxVideo,
} from "react-icons/rx";

const SocialMediaLogo = () => {
  return (
    <div className="flex items-center gap-[10px] pt-[15px] text-[#858584]">
      <RxDiscordLogo className="h-8 w-8 cursor-pointer" />
      <RxVideo className="h-8 w-8 cursor-pointer" />
      <RxTwitterLogo className="h-8 w-8 cursor-pointer" />
      <RxInstagramLogo className="h-8 w-8 cursor-pointer" />
    </div>
  );
};

export default SocialMediaLogo;
