import { useDispatch } from 'react-redux';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import YupPassword from 'yup-password';
YupPassword(Yup);

import { register } from '../../redux/auth/operations';

import styles from './RegistrationForm.module.css';

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string().max(50, 'Too Long').required('Required'),
    email: Yup.string()
      .min(7, 'Too Short')
      .max(50, 'Too Long')
      .email('Must be a valid email!')
      .required('Required'),
    password: Yup.string()
      .password()
      .min(8, 'Too short')
      .max(25, 'Too long')
      .required('Required!'),
  });

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={FeedbackSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <label className={styles.label}>
          Username
          <Field className={styles.input} type="text" name="name" />
          <ErrorMessage name="name" component="span" />
        </label>

        <label className={styles.label}>
          Email
          <Field className={styles.input} type="email" name="email" />
          <ErrorMessage name="email" component="span" />
        </label>

        <label className={styles.label}>
          Password
          <Field className={styles.input} type="password" name="password" />
          <ErrorMessage name="password" component="span" />
        </label>

        <button className={styles.button} type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
}
