async function fetchDogs() {
  const breed = document.getElementById("breedInput").value.trim().toLowerCase();
  const url = breed
    ? `https://dog.ceo/api/breed/${breed}/images/random/5`
    : `https://dog.ceo/api/breeds/image/random/5`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.status === "success") {
      displayDogs(data.message);
    } else {
      alert("Breed not found. Try something like 'labrador' or 'pug'.");
    }
  } catch (error) {
    console.error("Error fetching dog images:", error);
    alert("Failed to fetch dog images.");
  }
}

function displayDogs(images) {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";
  images.forEach(url => {
    const img = document.createElement("img");
    img.src = url;
    gallery.appendChild(img);
  });
}
