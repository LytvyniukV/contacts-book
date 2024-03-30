import { useSelector } from 'react-redux';
import LoginForm from '../components/LoginForm/LoginForm';
import { selectIsAuthLoading } from '../redux/auth/selectors';
import Loader from '../components/Loader/Loader';
import Title from '../components/Title/Title';
export default function LoginPage() {
  const isLoading = useSelector(selectIsAuthLoading);
  return (
    <>
      <section>
        <Title>Log In</Title>
        <LoginForm />
        {isLoading && <Loader />}
      </section>
    </>
  );
}
