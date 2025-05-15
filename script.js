const closetItems = {
  pants1: {
    name: 'Black Wide-Leg Pants',
    description: 'Thrifted black pants with a wide silhouette. Super comfy and matches with everything.',
    images: [
      'https://via.placeholder.com/600x600?text=Front',
      'https://via.placeholder.com/600x600?text=Back',
      'https://via.placeholder.com/600x600?text=Details'
    ],
    fitPic: 'https://via.placeholder.com/400x500?text=Fit+Pic'
  }
};

let currentImages = [];
let currentIndex = 0;

function openModal(itemId) {
  const item = closetItems[itemId];
  currentImages = item.images;
  currentIndex = 0;
  document.getElementById('carousel-image').src = currentImages[currentIndex];
  document.getElementById('item-name').innerText = item.name;
  document.getElementById('item-description').innerText = item.description;
  document.getElementById('fit-pic').src = item.fitPic;
  document.getElementById('modal').classList.remove('hidden');
}

function closeModal() {
  document.getElementById('modal').classList.add('hidden');
}

function nextImage() {
  currentIndex = (currentIndex + 1) % currentImages.length;
  document.getElementById('carousel-image').src = currentImages[currentIndex];
}

function prevImage() {
  currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
  document.getElementById('carousel-image').src = currentImages[currentIndex];
}
