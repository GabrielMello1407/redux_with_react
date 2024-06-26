import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementar, reduzir, somar } from './store/contador';
import { abrir, fechar } from './store/modal';
import { autoLogin, login } from './store/login';

function App() {
  const { contador, modal } = useSelector((state) => state);

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.login.user);
  console.log(data);

  React.useEffect(() => {
    dispatch(autoLogin());
  }, [dispatch]);

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(login(username, password));
  }

  return (
    <div>
      {modal && <h1>Total: {contador}</h1>}
      <button onClick={() => dispatch(incrementar())}>Incrementar</button>
      <button onClick={() => dispatch(reduzir())}>Reduzir</button>
      <button onClick={() => dispatch(abrir())}>Abrir</button>
      <button onClick={() => dispatch(fechar())}>Fechar</button>
      <div>
        <form onSubmit={handleSubmit}>
          <label
            style={{ display: 'block', marginTop: '20px' }}
            htmlFor="username"
          >
            Usuário
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={({ target }) => setUsername(target.value)}
          />
          <label style={{ display: 'block' }} htmlFor="password">
            Senha
          </label>
          <input
            type="text"
            id="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
          <button>Enviar</button>
        </form>
        <p>{data?.email}</p>
        <button onClick={() => dispatch(somar(5))}>Somar</button>
      </div>
    </div>
  );
}

export default App;
