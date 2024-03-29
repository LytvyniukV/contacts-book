import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useId } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import css from './RegistrationForm.module.css';
import { register } from '../../redux/auth/operations';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.
const ContactsSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short! Min 3 symbols')
    .max(15, 'Too Long! Max 50 symbols')
    .required('Required'),
  email: Yup.string().email('Please, enter a valid email').required('Required'),
  password: Yup.string()
    .matches(passwordRules, {
      message:
        'Please create a stronger password. Min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit',
    })
    .required('Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
});

export default function RegistrationForm() {
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();
  const confirmPasswordId = useId();
  const dispatch = useDispatch();

  const submitForm = values => {
    dispatch(register(values))
      .unwrap()
      .then(() =>
        toast.success(`Account was created! Welcome to your ContactBook!`)
      )
      .catch(() =>
        toast.error(
          'Maybe this user is already created. Try another name or email!'
        )
      );
  };
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      onSubmit={submitForm}
      validationSchema={ContactsSchema}
    >
      <Form className={css.form}>
        <div>
          <label className={css.label} htmlFor={nameId}>
            name
          </label>
          <Field
            type="text"
            name="name"
            id={nameId}
            className={css.input}
            autoComplete="off"
          />
          <span className={css.error}>
            <ErrorMessage name="name" as="span" />
          </span>
        </div>

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

        <div>
          <label className={css.label} htmlFor={confirmPasswordId}>
            confirm password
          </label>
          <Field
            type="password"
            name="confirmPassword"
            id={confirmPasswordId}
            className={css.input}
            autoComplete="off"
          />

          <span className={css.error}>
            <ErrorMessage name="confirmPassword" as="span" />
          </span>
        </div>
        <button className={css.button} type="submit">
          Create account
        </button>
        <p className={css.text}>
          or{' '}
          <Link to="/login" className={css.link}>
            log in
          </Link>{' '}
          if you already have account
        </p>
      </Form>
    </Formik>
  );
}
