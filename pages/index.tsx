import type { NextPage } from "next";
import Link from "next/link";
import ReactFullpage from "@fullpage/react-fullpage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home: NextPage = () => {
  return (
    <div className="bg-main">
      <ReactFullpage
        anchors={["home"]}
        licenseKey="OPEN-SOURCE-GPLv3-LICENSE"
        render={() => (
          <div className="section text-center">
            <div
              className="text-5xl md:text-8xl tracking-normal md:tracking-desktop"
              style={{ color: "#FFC3C3" }}
            >
              PORTFOLIO
            </div>
            <div className="md:pt-2 text-3xl md:text-5xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-start to-end">
                Marty
              </span>
            </div>
            <div className="flex justify-center pt-1.5 md:pt-4 gap-x-4">
              <Link href="https://twitter.com/marty197812">
                <a href="https://twitter.com/marty197812">
                  <FontAwesomeIcon
                    icon={["fab", "twitter"]}
                    className="text-4xl"
                    style={{ color: "#1D9BF0" }}
                  />
                </a>
              </Link>
              <Link href="https://github.com/marty197812">
                <a href="https://github.com/marty197812">
                  <FontAwesomeIcon
                    icon={["fab", "github"]}
                    className="text-4xl"
                    style={{ color: "#fff" }}
                  />
                </a>
              </Link>
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default Home;
