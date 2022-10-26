import React, { Suspense } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { Logger } from "./module/logger";

/***
 * https://blog.logrocket.com/lazy-loading-components-in-react-16-6-6cea535c0b52/
 * Use React.lazy() to dynamically import components;
 * Use <Suspense/> to handle the fallback, such as a loading component;
 * Use <ErrorBoundary> to handle error rendering React.lazy() component.
 ***/
const MainPage = React.lazy(() => import(/* webpackChunkName: "MainPage" */"./pages/MainPage/MainPage.jsx"));
const PartyPage = React.lazy(() => import(/* webpackChunkName: "PartyPage" */"./pages/PartyPage/PartyPage.jsx"));
const OpeningPageV2 = React.lazy(() => import(/* webpackChunkName: "OpeningPageV2" */"./pages/OpeningPage/OpeningPageV2.jsx"));
import Loader from "./component/Loader/Loader.jsx";
import ErrorBoundary from "./component/ErrorBoundary/ErrorBoundary.jsx";

const logger = Logger({className: "OpeningPage"});

const loadPage = (pageID) => {
    if (pageID === "/") return <OpeningPageV2/>;
    else if (pageID === "/local") return <MainPage/>;
    else if (pageID === "/party") return <PartyPage/>;
    else if (pageID === "/loading") return <Loader/>;
    // return <Loader/>;
}

const Home = () => {
    const pageID = useSelector(state => state.openingPageReducer.pageID, shallowEqual);
    logger.info(`pageID update to ${pageID}`);
    return (
        <ErrorBoundary fallback={<p>Failed to load page.</p>}>
            <Suspense fallback={<Loader/>}>
                {loadPage(pageID)}
            </Suspense>
        </ErrorBoundary>
    );
};

export default Home;