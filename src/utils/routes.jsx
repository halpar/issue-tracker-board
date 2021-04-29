import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
// import { useSelector } from "react-redux";
import Layout from '../presentation/components/Layout';
import LayoutHeader from '../presentation/components/Layout/Header';
import LayoutSider from '../presentation/components/Layout/Sider';
import LayoutFooter from '../presentation/components/Layout/Footer';
import LayoutContent from '../presentation/components/Layout/Content';
import LoadingSpinner from '../presentation/components/LoadingSpinner';

// Shared
const SharedLandingPage = lazy(() => import('../presentation/pages/Shared/LandingPage'));
const SharedContactUsPage = lazy(() => import('../presentation/pages/Shared/ContactUsPage'));
const SharedLoginPage = lazy(() => import('../presentation/pages/Shared/LoginPage'));
const SharedSignupPage = lazy(() => import('../presentation/pages/Shared/SignupPage'));

// Customer
const CustomerProjectDetailsPage = lazy(() => import('../presentation/pages/Customer/ProjectDetailsPage'));

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
        <Layout style={{ minHeight: '100vh' }}>
            <LayoutHeader userRole={userRole} />
            <Layout>
                <LayoutSider />
                <LayoutContent userRole={userRole}>
                    <Suspense fallback={<LoadingSpinner fullHeight />}>
                        <Switch>
                            <Route path={`${match.url}/inbox`} exact component={CustomerProjectDetailsPage} />
                            <Route path={`${match.url}/today`} exact component={CustomerProjectDetailsPage} />
                            <Route path={`${match.url}/upcoming`} exact component={CustomerProjectDetailsPage} />
                            <Route path={`${match.url}/project-details/:projectId`} exact component={CustomerProjectDetailsPage} />
                            <Route path={match.url} exact component={SharedLandingPage} />
                        </Switch>
                    </Suspense>
                </LayoutContent>
            </Layout>
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
