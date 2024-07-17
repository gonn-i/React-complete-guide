import { Form, Link, useActionData, useNavigation, useSearchParams } from 'react-router-dom';

import classes from './AuthForm.module.css';

function AuthForm() {
  // useActionData 를 통해, action의 return 값을 받아옴
  const data = useActionData();
  // navigation 객체에서, state를 통해 진행상태를 알 수 있음
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  // useSerachParams() 를 통해, query 값을 받아올 수 있음,
  const [searchParams, setSearchParams] = useSearchParams();
  const isLogin = searchParams.get('mode') === 'login'; // query 값이 login 인지(현재 머물고 있는 페이지가 isLogin)

  return (
    <>
      <Form method="post" className={classes.form}>
        <h1>{isLogin ? 'Log in' : 'Create a new user'}</h1>
        {data && data.error && (
          <ul>
            {Object.values(data.errors).map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}
        {data && data.message && <p>{data.message}</p>}
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={classes.actions}>
          <Link to={`?mode=${isLogin ? 'signup' : 'login'}`}> {isLogin ? 'Create new user' : 'Login'}</Link>
          <button disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Save'}</button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;
