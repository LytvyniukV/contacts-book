import LoginForm from '../components/LoginForm/LoginForm';
import GoBackBtn from '../components/GoBackBtn/GoBackBtn';
import { Link, useLocation } from 'react-router-dom';
import { useRef } from 'react';
export default function LoginPage() {
  const location = useLocation();
  const btnLinkRef = useRef(location.state);
  return (
    <main>
      <Link to={btnLinkRef.current}>
        <GoBackBtn />
      </Link>

      <section>
        <LoginForm />
      </section>
    </main>
  );
}
