const certifications = [
  {
    title: "Introducción a R",
    provider: "CodigoFacilito",
    date: "Julio 2023",
    description: "Fundamentos de R, manipulación de datos y visualización con ggplot2.",
    file: "Certificaciones/Certificado_-_Clase_de_introducción_a_R-1.jpg"
  },
  {
    title: "Introduction to Cybersecurity",
    provider: "Cisco",
    date: "Junio 2024",
    description: "Fundamentos de ciberseguridad, amenazas y protección de redes.",
    file: "Certificaciones/Certificado_-_Introduction_to_Cibersecurity-1.jpg"
  },
  {
    title: "Cybersecutiry Essentials",
    provider: "Cisco",
    date: "Mayo 2024",
    description: "Conceptos básicos de ciberseguridad, amenazas comunes y mejores prácticas.",
    file: "Certificaciones/Certificado_-_Cybersecurity_Essentials-1.jpg"
  },
  {
    title: "Curso Profesional de Javascript",
    provider: "CodigoFacilito",
    date: "Abril 2024",
    description: "Curso avanzado de JavaScript, incluyendo ES6, asincronía y patrones de diseño.",
    file: "Certificaciones/Certificado_-_Curso_profesional_de_JavaScript-1.jpg"
  },
  {
    title: "ICP Developer",
    provider: "ICP Mexico",
    date: "Abril 2025",
    description: "Certificación en desarrollo de aplicaciones con ICP, incluyendo blockchain y smart contracts.",
    file: "Certificaciones/Certificado_-_ICP_Developer_ICP_México.jpg"
  },
  {
    title: "ICP Blockchain",
    provider: "Zona3",
    date: "Abril 2025",
    description: "Fundamentos de blockchain, contratos inteligentes y desarrollo en la plataforma ICP.",
    file: "Certificaciones/Certificado_-_ICP_Developer_Z3.jpg"
  }
];

// DOM refs
const certGrid = document.getElementById("certGrid");
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modalBody");
const closeBtn = document.getElementById("closeBtn");

// Render cards
certifications.forEach((cert, index) => {
  const card = document.createElement("div");
  card.className = "card";
  card.style.animationDelay = `${index * 100}ms`;
  card.innerHTML = `
    <h2>${cert.title}</h2>
    <p><strong>${cert.provider}</strong> — ${cert.date}</p>
    <p>${cert.description}</p>
  `;

  card.addEventListener("click", () => {
    openModal(cert.file);
  });

  certGrid.appendChild(card);
});

// Modal logic
function openModal(file) {
  modal.classList.add("active");
  modalBody.innerHTML = file.endsWith(".pdf")
    ? `<iframe src="${file}" type="application/pdf"></iframe>`
    : `<img src="${file}" alt="Certificado">`;
}

function closeModal() {
  modal.classList.remove("active");
  // Delay clearing content to allow for closing animation
  setTimeout(() => {
    modalBody.innerHTML = "";
  }, 300);
}

closeBtn.addEventListener("click", closeModal);

// Cerrar con ESC o clic fuera
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("active")) {
    closeModal();
  }
});
