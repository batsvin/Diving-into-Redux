import classes from './Auth.module.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { authAction } from '../store';

const Auth = () => {
  const dispatch = useDispatch()

  const logintHandle = () => {
    dispatch(authAction.login())
  }

  const isAuth = useSelector(state => state.auth.isAuth)
  return (
    <>
      {!isAuth &&
        <main className={classes.auth}>
          <section>
            <form>
              <div className={classes.control}>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' />
              </div>
              <div className={classes.control}>
                <label htmlFor='password'>Password</label>
                <input type='password' id='password' />
              </div>
              <button onClick={logintHandle}>Login</button>
            </form>
          </section>
        </main>
      }
    </>
  );
};

export default Auth;
