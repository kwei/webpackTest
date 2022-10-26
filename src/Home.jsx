import React, { Suspense } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { Logger } from "./module/logger";

/***
 * https://blog.logrocket.com/lazy-loading-components-in-react-16-6-6cea535c0b52/
 * Use React.lazy() to dynamically import components;
 * Use <Suspense/> to handle the fallback, such as a loading component;
 * Use <ErrorBoundary> to handle error rendering React.lazy() component.
 ***/
const MainPage = React.lazy(() => {
    return Promise.all([
        import(/* webpackChunkName: "MainPage" */"./pages/MainPage/MainPage.jsx"),
        new Promise(resolve => setTimeout(resolve, 1000))
    ]).then(([moduleExports]) => moduleExports);
});
const PartyPage = React.lazy(() => {
    return Promise.all([
        import(/* webpackChunkName: "PartyPage" */"./pages/PartyPage/PartyPage.jsx"),
        new Promise(resolve => setTimeout(resolve, 1000))
    ]).then(([moduleExports]) => moduleExports);
});
import OpeningPageV2 from "./pages/OpeningPage/OpeningPageV2.jsx";
import Loader from "./component/Loader/Loader.jsx";
import ErrorBoundary from "./component/ErrorBoundary/ErrorBoundary.jsx";

const logger = Logger({className: "OpeningPage"});

const loadPage = (pageID) => {
    if (pageID === "/") return <OpeningPageV2/>;
    else if (pageID === "/local") return <MainPage/>;
    else if (pageID === "/party") return <PartyPage/>;
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