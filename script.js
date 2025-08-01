document.getElementById("responderStatus").addEventListener("change", function () {
  const status = this.value;
  document.getElementById("responderTypeGroup").style.display = (status === "Responder") ? "block" : "none";
  document.getElementById("civilianPrepperGroup").style.display = (status === "Civilian") ? "block" : "none";
});

document.getElementById("responderType").addEventListener("change", function () {
  const type = this.value;
  document.getElementById("fireCareerGroup").style.display = (type === "Fire") ? "block" : "none";
  document.getElementById("agencyGroup").style.display = (type !== "") ? "block" : "none";
});

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  fetch("https://script.google.com/macros/s/AKfycbw6hyCRS8ys7QMx6KwboMBPnfM3C75JWhYxAVzcE1cIyujTwGPFwxtFRXcOv3pke3YS/exec", {
    method: "POST",
    body: formData
  })
    .then(res => res.json())
    .then(data => {
      if (data.status === "success" && data.redirect) {
        window.location.href = data.redirect;
      } else {
        alert("Something went wrong. Try again later.");
      }
    })
    .catch(err => {
      console.error("Submission failed:", err);
      alert("Submission error. Try again later.");
    });
});
