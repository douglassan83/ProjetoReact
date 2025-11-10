import "./Login.css"
import Button from "./Button";
import iconeLogin from "../assets/icone-login.png";
;


export default function Login() {
  function callname(name) {
    alert("Olá " + name)
  }

  return (
    <form>
      <div>
        <img src={iconeLogin} alt="Ícone de login" />
      </div>
      <h2>Login</h2>
      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
          placeholder="seuemail@email.com"
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password" type="password" name="password" />
        </div>

      </div>

      <div className="form-actions">
        <Button functionForClick={() => callname('Douglas')}>Login</Button>
      </div>
    </form>
  );
}
