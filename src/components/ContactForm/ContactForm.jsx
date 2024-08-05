import { useDispatch } from 'react-redux';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import * as Yup from 'yup';

import { addContact } from '../../redux/contacts/operations';

import styles from './ContactForm.module.css';

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
    return iziToast.success({
      title: 'OK',
      message: 'Contact successfully added',
      timeout: 2000,
      position: 'topRight',
    });
  };

  const initialValues = {
    name: '',
    number: '',
  };

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(25, 'Too Long!')
      .required('Required'),
    number: Yup.string()
      .min(7, 'Too Short!')
      .max(12, 'Too Long!')
      .required('Required'),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={styles.form}>
        <label className={styles.label}>
          Name
          <Field className={styles.input} type="text" name="name" />
          <ErrorMessage name="name" component="span" />
        </label>

        <label className={styles.label}>
          Number
          <Field className={styles.input} type="text" name="number" />
          <ErrorMessage name="number" component="span" />
        </label>

        <button type="submit" className={styles.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
