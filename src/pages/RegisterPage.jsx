import RegisterForm from '../components/RegisterForm/RegisterForm';
import Title from '../components/Title/Title';
import { selectIsAuthLoading } from '../redux/auth/authSelectors';
import Loader from '../components/Loader/Loader';
import { useSelector } from 'react-redux';
export default function RegisterPage() {
  const isLoading = useSelector(selectIsAuthLoading);
  return (
    <>
      <section>
        <Title>create your account</Title>
        <RegisterForm />
        {isLoading && <Loader />}
      </section>
    </>
  );
}
