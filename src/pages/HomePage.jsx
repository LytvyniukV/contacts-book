import AppDescription from '../components/AppDescription/AppDescription';
import Instructions from '../components/Instructions/Instructions';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/selectors';
import Title from '../components/Title/Title';
import UserHomeInterface from '../components/UserHomeInterface/UserHomeInterface';
export default function HomePage() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <section>
      {isLoggedIn ? (
        <UserHomeInterface />
      ) : (
        <>
          <Title>
            Welcome to{' '}
            <span style={{ color: 'rgba(2, 155, 137, 0.958)' }}>
              ContactBook
            </span>{' '}
            app
          </Title>
          <AppDescription />
          <Instructions />
        </>
      )}
    </section>
  );
}
