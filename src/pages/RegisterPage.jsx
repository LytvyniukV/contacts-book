import { Link, useLocation } from 'react-router-dom';
import GoBackBtn from '../components/GoBackBtn/GoBackBtn';
import RegisterForm from '../components/RegisterForm/RegisterForm';
import Title from '../components/Title/Title';
import { useRef } from 'react';
export default function RegisterPage() {
  const location = useLocation();
  const btnLinkRef = useRef(location.state);
  return (
    <main>
      <Link to={btnLinkRef.current}>
        <GoBackBtn />
      </Link>
      <section>
        <Title>create your account</Title>
        <RegisterForm />
      </section>
    </main>
  );
}
