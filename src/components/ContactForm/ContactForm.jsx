import { useId } from 'react';
import css from './ContactForm.module.css';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contacts/selectors';
import { showWarning } from '../../js/message';
import { addContact } from '../../redux/contacts/operations';
import toast from 'react-hot-toast';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const ContactsSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short! Min 3 symbols')
    .max(50, 'Too Long! Max 50 symbols')
    .required('Required'),
  number: Yup.string()
    .min(7, 'Too Short! Min 7 symbols')
    .max(12, 'Too Long! Max 12 symbols')
    .matches(phoneRegExp, 'Phone number is not valid. Only numbers!')
    .required('Required'),
});

export default function ContactForm() {
  const nameId = useId();
  const numberId = useId();
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const submitForm = (values, actions) => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === values.name.toLowerCase()
      )
    ) {
      return showWarning(values.name);
    }
    dispatch(addContact(values))
      .unwrap()
      .then(() => {
        toast.success('Contact was successfully added');
        actions.resetForm();
      })
      .catch(() =>
        toast.error(
          'Whoops, something went wrong! Please try reloading this page!'
        )
      );
  };
  return (
    <div className={css.wrap}>
      <h2 className={css.title}>
        Create <span className={css.accent}>new</span> contact
      </h2>
      <Formik
        initialValues={{ name: '', number: '' }}
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
            <label className={css.label} htmlFor={numberId}>
              number
            </label>
            <Field
              type="text"
              name="number"
              id={numberId}
              className={css.input}
              autoComplete="off"
            />

            <span className={css.error}>
              <ErrorMessage name="number" as="span" />
            </span>
          </div>

          <button className={css.button} type="submit">
            Save Contact
          </button>
        </Form>
      </Formik>
    </div>
  );
}
