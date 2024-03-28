import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import css from './FormWrapper.module.css';
export default function FormWrapper() {
  return (
    <section className={css.wrap}>
      <ContactForm />
      <SearchBox />
    </section>
  );
}
