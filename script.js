
    function sendWhatsApp() {
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
      const text = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
      const phone = "+918767534375";
      window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
    }
  