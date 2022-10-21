import React, { Suspense } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { Logger } from "./module/logger";

const MainPage = React.lazy(() => import("./pages/MainPage/MainPage.jsx"));
const PartyPage = React.lazy(() => import("./pages/PartyPage/PartyPage.jsx"));
const OpeningPageV2 = React.lazy(() => import("./pages/OpeningPage/OpeningPageV2.jsx"));
import Loader from "./component/Loader/Loader.jsx";

const logger = Logger({className: "OpeningPage"});

const loadPage = (pageID) => {
    if (pageID === "/") return <OpeningPageV2/>;
    else if (pageID === "/local") return <MainPage/>;
    else if (pageID === "/party") return <PartyPage/>;
}

const Home = () => {
    const pageID = useSelector(state => state.openingPageReducer.pageID, shallowEqual);
    logger.info(`pageID update to ${pageID}`);
    return (
        <Suspense fallback={<Loader />}>
            {loadPage(pageID)}
        </Suspense>
    );
};

export default Home;