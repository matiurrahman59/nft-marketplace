import Link from "next/link";
import { FC } from "react";

interface NotFoundProps {}

const NotFound: FC<NotFoundProps> = ({}) => {
  return (
    <div className="section-padding main-container">
      <div className="flexCenter h-[30vh]">
        <div className="text-center">
          <h3 className="text-gradient-1">Page not found!</h3>
          <h5>
            Return to{" "}
            <Link href="/" className="underline">
              home page
            </Link>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
