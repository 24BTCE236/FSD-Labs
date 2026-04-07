const generateFakeToken = () => {
  return Math.random().toString(36).substring(2);
};

const Login = ({ onLogin }) => {
  const handleLogin = () => {
    const fakeToken = generateFakeToken();
    localStorage.setItem("authToken", fakeToken);
    onLogin();
  };

  return (
    <div>
      <h2>Login Page</h2>
      <p>
        This lab stores a fake auth token in <strong>localStorage</strong> to
        simulate login persistence.
      </p>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
