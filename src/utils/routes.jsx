import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
// import { useSelector } from "react-redux";
import Layout from '../presentation/components/Layout';
import LayoutHeader from '../presentation/components/Layout/Header';
import LayoutFooter from '../presentation/components/Layout/Footer';
import LayoutContent from '../presentation/components/Layout/Content';
import LoadingSpinner from '../presentation/components/LoadingSpinner';

// Shared
const SharedLandingPage = lazy(() => import('../presentation/pages/Shared/LandingPage'));
const SharedContactUsPage = lazy(() => import('../presentation/pages/Shared/ContactUsPage'));
const SharedLoginPage = lazy(() => import('../presentation/pages/Shared/LoginPage'));
const SharedSignupPage = lazy(() => import('../presentation/pages/Shared/SignupPage'));

const Shared = ({ match }) => {
    const userRole = localStorage.getItem('role');
    return (
        <Layout>
            <LayoutHeader userRole={userRole} />
            <LayoutContent pageType="shared">
                <Suspense fallback={<LoadingSpinner fullHeight />}>
                    <Switch>
                        <Route path={`${match.url}features`} exact component={SharedContactUsPage} />
                        <Route path={`${match.url}for-teams`} exact component={SharedLandingPage} />
                        <Route path={`${match.url}login`} exact component={SharedLoginPage} />
                        <Route path={`${match.url}signup`} exact component={SharedSignupPage} />
                        <Route path={match.url} exact component={SharedLandingPage} />
                    </Switch>
                </Suspense>
            </LayoutContent>
            <LayoutFooter />
        </Layout>
    );
};
const Customer = ({ match }) => {
    // const userRole = localStorage.getItem('role');
    const userRole = 'customer';
    return userRole === 'customer' ? (
        <Layout>
            <LayoutHeader userRole={userRole} />
            <LayoutContent pageType={userRole}>
                <Suspense fallback={<LoadingSpinner fullHeight />}>
                    <Switch>
                        {/* <Route path={`${match.url}/profile`} component={CustomerProfilePage} exact /> */}
                        <Route path={`${match.url}features`} exact component={SharedContactUsPage} />
                        <Route path={`${match.url}for-teams`} exact component={SharedLandingPage} />
                        <Route path={`${match.url}pricing`} exact component={SharedLandingPage} />
                        <Route path={`${match.url}login`} exact component={SharedLoginPage} />
                        <Route path={match.url} exact component={SharedLandingPage} />
                    </Switch>
                </Suspense>
            </LayoutContent>
            <LayoutFooter />
        </Layout>
    ) : (
        <Redirect to="/" />
    );
};

const Admin = ({ match }) => {
    // const userRole = localStorage.getItem('role');
    const userRole = '';
    return userRole === 'admin' ? (
        <Layout>
            <LayoutHeader userRole={userRole} />
            <LayoutContent pageType={userRole}>
                <Suspense fallback={<LoadingSpinner fullHeight />}>
                    <Switch>
                        <Route path={`${match.url}features`} exact component={SharedContactUsPage} />
                        <Route path={`${match.url}for-teams`} exact component={SharedLandingPage} />
                        <Route path={`${match.url}pricing`} exact component={SharedLandingPage} />
                        <Route path={match.url} exact component={SharedLandingPage} />
                    </Switch>
                </Suspense>
            </LayoutContent>
            <LayoutFooter />
        </Layout>
    ) : (
        <Redirect to="/" />
    );
};

const Routes = () => (
    <Router>
        <Layout color="#F5F9FC">
            <Switch>
                <Route path="/chefs" component={Admin} />
                <Route path="/customer" component={Customer} />
                <Route path="/" component={Shared} />
            </Switch>
        </Layout>
    </Router>
);

export default Routes;
