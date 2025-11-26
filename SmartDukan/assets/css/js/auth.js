// LOGIN
function login() {
  const email = document.getElementById("email").value;
  const pass  = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, pass)
  .then(() => {
      window.location.href = "dashboard.html";
  })
  .catch(err => {
      document.getElementById("error").innerText = err.message;
  });
}

// SIGNUP
function signup() {
  const email = document.getElementById("email").value;
  const pass  = document.getElementById("password").value;

  auth.createUserWithEmailAndPassword(email, pass)
  .then(user => {
      db.collection("users").doc(user.user.uid).set({
        shopName: "",
        owner: email,
        createdAt: Date.now()
      });
      window.location.href = "dashboard.html";
  })
  .catch(err => {
      document.getElementById("error").innerText = err.message;
  });
}

// LOGOUT
function logout() {
  auth.signOut().then(()=>{
    window.location.href = "login.html";
  });
}
