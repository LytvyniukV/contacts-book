import { useEffect, useId, useState } from 'react';
import css from './EditForm.module.css';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { editContact } from '../../redux/contactsSlice';

import AddFieldButton from '../AddFieldButton/AddFieldButton';
import { FaMinusCircle } from 'react-icons/fa';

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
  email: Yup.string().email('Must be email form'),
});

export default function EditForm({ contact, onCloseModal }) {
  const nameId = useId();
  const numberId = useId();
  const emailId = useId();
  const dispatch = useDispatch();
  const [isEmailActive, setIsEmailActive] = useState(false);

  useEffect(() => {
    if (contact.email) setIsEmailActive(true);
  }, [contact.email]);
  const submitForm = (values, actions) => {
    const newContact = { id: contact.id, ...values };
    dispatch(editContact(newContact));
    onCloseModal(false);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{
        name: `${contact.name}`,
        number: `${contact.number}`,
        email: `${contact.email ? contact.email : ''}`,
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

        {isEmailActive && (
          <div className={css.email}>
            {!contact.email && (
              <button
                className={css.closeMail}
                type="button"
                onClick={() => setIsEmailActive(false)}
              >
                <FaMinusCircle size={20} className={css.icon} />
              </button>
            )}
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
          </div>
        )}
        {!isEmailActive && !contact.email && (
          <AddFieldButton onClick={() => setIsEmailActive(true)}>
            Add email
          </AddFieldButton>
        )}

        <div className={css.btnWrap}>
          <button className={css.button} type="submit">
            Save
          </button>
          <button
            className={css.button}
            type="button"
            onClick={() => onCloseModal(false)}
          >
            Cancel
          </button>
        </div>
      </Form>
    </Formik>
  );
}
