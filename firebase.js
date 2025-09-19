<!-- Firebase App (core) -->
<script src="https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js"></script>

<!-- Firebase Analytics (optional) -->
<script src="https://www.gstatic.com/firebasejs/10.5.0/firebase-analytics.js"></script>

<!-- Firebase Firestore (for coin tracking) -->
<script src="https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js"></script>

<script>
  const firebaseConfig = {
    apiKey: "AIzaSyASQomgcUm0LNNM8ABYxq-vqz7BYpO-eg4",
    authDomain: "talabet-89fce.firebaseapp.com",
    projectId: "talabet-89fce",
    storageBucket: "talabet-89fce.firebasestorage.app",
    messagingSenderId: "767205554053",
    appId: "1:767205554053:web:32cc62707e62aca28b76ec",
    measurementId: "G-FKLT279RDX"
  };

  const app = firebase.initializeApp(firebaseConfig);
  const analytics = firebase.analytics();
  const db = firebase.firestore();
</script>
