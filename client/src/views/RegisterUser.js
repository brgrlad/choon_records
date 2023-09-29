
function RegisterUser() {
    return (

      <div className="registerUserWrapper">


      <h1> Create an account!</h1>

      <input type="name" id="name" placeholder="First Name"/>
      <input type="text" id="surname" placeholder="Surname"/>
      <input type="email" id="email" placeholder="E-mail Address"/>
      <input type="password" id="password" placeholder="Password"/>
      <input type="text" id="address" placeholder="Address"/>
      <input type="date" id="birthDate" placeholder="Birth Date"/>
      <input type="checkbox"/>


      </div>
    );
  }

  export default RegisterUser;
