function saveSale(amount) {
   const uid = auth.currentUser.uid;

   db.collection("users").doc(uid)
     .collection("sales")
     .add({
       amount: amount,
       created: Date.now()
     });
}
