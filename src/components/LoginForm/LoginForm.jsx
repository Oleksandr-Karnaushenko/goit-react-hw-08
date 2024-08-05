import { useDispatch } from 'react-redux';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

import { logIn } from '../../redux/auth/operations';

import styles from './LoginForm.module.css';

const FeedbackSchema = Yup.object().shape({
  email: Yup.string()
    .min(7, 'Too Short')
    .max(50, 'Too Long')
    .email('Must be a valid email!')
    .required('Required'),
  password: Yup.string()
    .min(5, 'Too short')
    .max(25, 'Too long')
    .required('Required!'),
});

const initialValues = {
  email: '',
  password: '',
};

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={FeedbackSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
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
