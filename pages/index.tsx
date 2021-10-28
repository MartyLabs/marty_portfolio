import { NextPage } from "next";
import ReactFullpage from "@fullpage/react-fullpage";

const Home: NextPage = () => {
  return (
    <div className='bg-main'>
      <ReactFullpage
        anchors={["home"]}
        licenseKey="OPEN-SOURCE-GPLv3-LICENSE"
        render={() => (
            <div className='section text-center'>
                <div className='text-8xl' style={{ color: "#FFC3C3", letterSpacing: '30px' }}>
                    PORTFOLIO
                </div>
                <div className='pt-2 text-5xl'>
                    <h1 className='text-transparent bg-clip-text bg-gradient-to-r '>Marty</h1>
                </div>
            </div>
        )}
      />
    </div>
  );
};

export default Home;
