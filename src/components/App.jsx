import { Suspense, lazy, useEffect } from 'react';
import Loader from '../components/Loader/Loader';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Layout from './Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from '../redux/auth/selectors';
import { refreshUser } from '../redux/auth/operations';
import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';

const Home = lazy(() => import('../pages/Home'));
const Contacts = lazy(() => import('../pages/Contacts'));
const Login = lazy(() => import('../pages/Login'));
const Registration = lazy(() => import('../pages/Registration'));

function App() {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <Loader />
  ) : (
    <Layout>
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute component={<Registration />} redirectTo="/" />
              }
            />
            <Route
              path="/login"
              element={<RestrictedRoute component={<Login />} redirectTo="/" />}
            />
            <Route
              path="/contacts"
              element={<PrivateRoute component={<Contacts />} redirectTo="/" />}
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
        <Toaster
          position="top-center"
          toastOptions={{ style: { width: '500px', height: '50px' } }}
        />
      </main>
    </Layout>
  );
}

export default App;
