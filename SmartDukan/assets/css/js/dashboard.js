auth.onAuthStateChanged(user => {
    if(!user) {
        window.location.href = "login.html";
        return;
    }

    const uid = user.uid;

    // Load Sales
    db.collection("users").doc(uid).collection("sales")
      .get().then(snap => {
         let total = 0;
         snap.forEach(d => total += d.data().amount);
         document.getElementById("totalSales").innerText = "₹ " + total;
      });

    // Load Customers
    db.collection("users").doc(uid).collection("customers")
      .get().then(snap => {
         document.getElementById("customers").innerText = snap.size;
      });

    // Load Stock
    db.collection("users").doc(uid).collection("stock")
      .get().then(snap => {
         document.getElementById("stockItems").innerText = snap.size;
      });

    // Load Outstanding
    db.collection("users").doc(uid).collection("customers")
      .get().then(snap => {
         let sum = 0;
         snap.forEach(c => sum += c.data().balance || 0);
         document.getElementById("outstanding").innerText = "₹ " + sum;
      });
});
