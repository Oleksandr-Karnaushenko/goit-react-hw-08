import { Form, Formik, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  const initialValues = {
    name: '',
    number: '',
  };

  const nameFieldId = nanoid();
  const phoneFieldId = nanoid();

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    number: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <div className={css.input}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field type="text" name="name" id={nameFieldId} />
          <ErrorMessage name="name" component="span" />
        </div>

        <div className={css.input}>
          <label htmlFor={phoneFieldId}>Number</label>
          <Field type="text" name="number" id={phoneFieldId} />
          <ErrorMessage name="number" component="span" />
        </div>
        <button type="submit" className={css.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
