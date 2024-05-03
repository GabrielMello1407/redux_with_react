import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementar, reduzir } from './store/contador';
import { abrir, fechar } from './store/modal';
import login from './store/login';

function App() {
  const { contador, modal } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { data } = useSelector((state) => state.login.user);

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
          <p>{data?.email}</p>
        </form>
      </div>
    </div>
  );
}

export default App;
