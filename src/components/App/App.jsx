import { useDispatch } from 'react-redux';
import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from '../Layout/Layout';
import { PrivateRoute } from '../../utility/PrivateRoute';
import { RestrictedRoute } from '../../utility/RestrictedRoute';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const RegisterPage = lazy(() =>
  import('../../pages/RegisterPage/RegisterPage')
);
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() =>
  import('../../pages/ContactsPage/ContactsPage')
);

export default function App() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <div style={{ margin: ' 10px' }}>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
        </Routes>
      </Layout>
    </div>
  );
}

//test@123.gmail.com
