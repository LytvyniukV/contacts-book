import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useId } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import css from './LoginForm.module.css';
import { login } from '../../redux/auth/authOperations';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.
const ContactsSchema = Yup.object().shape({
  email: Yup.string().email('Please, enter a valid email').required('Required'),
  password: Yup.string()
    .matches(passwordRules, { message: 'Invalid password' })
    .required('Required'),
});

export default function LoginForm() {
  const emailId = useId();
  const passwordId = useId();

  const dispatch = useDispatch();

  const submitForm = values => {
    dispatch(login(values))
      .unwrap()
      .then(() => toast.success('Login is successfull'))
      .catch(() => toast.error('Wrong password or email. Try again'));
  };
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={submitForm}
      validationSchema={ContactsSchema}
    >
      <Form className={css.form}>
        <div>
          <label className={css.label} htmlFor={emailId}>
            email
          </label>
          <Field
            type="email"
            name="email"
            id={emailId}
            className={css.input}
            autoComplete="off"
          />

          <span className={css.error}>
            <ErrorMessage name="email" as="span" />
          </span>
        </div>

        <div>
          <label className={css.label} htmlFor={passwordId}>
            password
          </label>
          <Field
            type="password"
            name="password"
            id={passwordId}
            className={css.input}
            autoComplete="off"
          />

          <span className={css.error}>
            <ErrorMessage name="password" as="span" />
          </span>
        </div>

        <button className={css.button} type="submit">
          log in
        </button>
        <p className={css.text}>
          or{' '}
          <Link to="/register" className={css.link}>
            create
          </Link>{' '}
          new account
        </p>
      </Form>
    </Formik>
  );
}
