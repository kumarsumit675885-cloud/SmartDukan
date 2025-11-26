// assets/js/app.js

// ===== Mobile menu toggle =====
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("nav");

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      if (nav.style.display === "flex") {
        nav.style.display = "none";
      } else {
        nav.style.display = "flex";
        nav.style.flexDirection = "column";
        nav.style.gap = "10px";
        nav.style.position = "absolute";
        nav.style.right = "20px";
        nav.style.top = "64px";
        nav.style.background = "rgba(255,255,255,0.98)";
        nav.style.padding = "12px";
        nav.style.borderRadius = "10px";
        nav.style.boxShadow = "0 8px 30px rgba(2,6,23,0.08)";
      }
    });
  }

  // Close nav on outside click (mobile)
  document.addEventListener("click", (e) => {
    if (!nav || !hamburger) return;
    const isClickInside = nav.contains(e.target) || hamburger.contains(e.target);
    if (!isClickInside && window.innerWidth < 920) {
      nav.style.display = "none";
    }
  });
});

// ===== Dukandar Login =====
function loginDukandar() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  if (!email || !password) {
    document.getElementById("loginMessage").textContent = "Please enter email & password";
    return;
  }

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      document.getElementById("loginMessage").textContent = "Login Successful!";
      
      // Store UID for later use
      localStorage.setItem("dukandarUID", user.uid);
      window.location.href = "daily-sales.html";
    })
    .catch((error) => {
      document.getElementById("loginMessage").textContent = "Error: " + error.message;
    });
}

// ===== Fetch Dukandar Sales Data =====
function fetchDukandarSales() {
  const uid = localStorage.getItem("dukandarUID");
  if (!uid) {
    alert("Please login first.");
    window.location.href = "login.html";
    return;
  }

  db.collection("users").doc(uid).collection("sales")
    .get()
    .then(snapshot => {
      const tbody = document.querySelector("#salesTable tbody");
      tbody.innerHTML = "";
      snapshot.forEach(doc => {
        const s = doc.data();
        tbody.innerHTML += `
          <tr>
            <td>${new Date(s.date.seconds * 1000).toLocaleDateString()}</td>
            <td>${s.customerName}</td>
            <td>₹${s.amount}</td>
            <td>${s.gst}%</td>
            <td>₹${s.total}</td>
          </tr>`;
      });
    })
    .catch(err => console.error(err));
}
