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
              className="text-8xl"
              style={{ color: "#FFC3C3", letterSpacing: "30px" }}
            >
              PORTFOLIO
            </div>
            <div className="pt-2 text-5xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-start to-end">
                Marty
              </span>
            </div>
            <div className="flex justify-center pt-4 gap-x-4">
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
