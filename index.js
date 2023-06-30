const files = [
    { name: "Regalo 1", path: "regalo1.html", background: "shein.png", width: 293, height: 172},
    { name: "Regalo 2", path: "regalo2.html", background: "stich.png", width: 293, height: 172 },
    { name: "Regalo 3", path: "regalo3.html", background: "enigma.jpg", width: 293, height: 172}
  ];
  
  const dynamicIndex = document.getElementById("dynamic-index");
  
  files.forEach(file => {
    const card = document.createElement("div");
    card.classList.add("card");
  
    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");
  
    const title = document.createElement("h2");
    title.classList.add("card-title");
    title.textContent = file.name;
  
    const link = document.createElement("a");
    link.href = file.path;
    link.classList.add("card-link");
    link.textContent = "Ver archivo";
  
    cardContent.appendChild(title);
    cardContent.appendChild(link);
    card.appendChild(cardContent);
  
    // Establecer imagen de fondo individual para cada tarjeta
    card.style.backgroundImage = `url('${file.background}')`;
    card.style.backgroundSize = "cover";
    card.style.backgroundPosition = "center";
    card.style.width = file.width + "px";
    card.style.height = file.height + "px";
  
    dynamicIndex.appendChild(card);
  });
  