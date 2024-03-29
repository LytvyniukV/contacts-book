import RegisterForm from '../components/RegistrationForm/RegistrationForm';
import Title from '../components/Title/Title';
import { selectIsAuthLoading } from '../redux/auth/selectors';
import Loader from '../components/Loader/Loader';
import { useSelector } from 'react-redux';
export default function RegistrationPage() {
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
