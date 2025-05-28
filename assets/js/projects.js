const carouselContainer = document.querySelector('.image-carousel');
const descriptionContainer = document.querySelector('.project-description');

// Build the carousel from projectData
projectData.forEach(project => {
  const placeholder = document.createElement('div');
  placeholder.classList.add('image-placeholder');

  const img = document.createElement('img');
  img.src = project.image;
  img.alt = project.title;
  img.setAttribute('data-id', project.id);
  img.loading = 'lazy';

  placeholder.appendChild(img);
  carouselContainer.appendChild(placeholder);

  const desc = document.createElement('div');
  desc.classList.add('description');
  desc.setAttribute('data-id', project.id);
  desc.innerHTML = `
    <h1>${project.title}</h1>
    <p>${project.description}</p>
  `;
  descriptionContainer.appendChild(desc);
});

const allImages = Array.from(document.querySelectorAll('.image-placeholder img'));
let centerIndex = Math.floor(allImages.length / 2);

function updateCarousel() {
  allImages.forEach((img, index) => {
    const placeholder = img.parentElement;

    placeholder.classList.remove('center', 'left', 'right', 'left-offscreen', 'right-offscreen', 'invisible');

    if (index === centerIndex) {
      placeholder.classList.add('center');
    } else if (index === centerIndex - 1) {
      placeholder.classList.add('left');
    } else if (index === centerIndex + 1) {
      placeholder.classList.add('right');
    } else if (index === centerIndex - 2) {
      placeholder.classList.add('left-offscreen');
    } else if (index === centerIndex + 2) {
      placeholder.classList.add('right-offscreen');
    } else {
      placeholder.classList.add('invisible');
    }
  });

  // Update descriptions
  document.querySelectorAll('.description').forEach(desc => {
    if (desc.getAttribute('data-id') === allImages[centerIndex].dataset.id) {
      desc.classList.add('active');
    } else {
      desc.classList.remove('active');
    }
  });

  updateArrows();
}

// Add click interaction
allImages.forEach((img, index) => {
  img.addEventListener('click', () => {
    centerIndex = index;
    updateCarousel();
  });
});

document.addEventListener('click', (event) => {
  const leftArrowClicked = event.target.closest('.left-button');
  const rightArrowClicked = event.target.closest('.right-button');

  if (leftArrowClicked && centerIndex > 0) {
    centerIndex--;
    updateCarousel();
  } else if (rightArrowClicked && centerIndex < allImages.length - 1) {
    centerIndex++;
    updateCarousel();
  }
});

function updateArrows() {
  const leftArrow = document.querySelector('.left-button');
  const rightArrow = document.querySelector('.right-button');

  if (centerIndex <= 0) {
    leftArrow.style.filter = 'opacity(0.3)';
    leftArrow.style.transform = 'unset';
  } else {
    leftArrow.style.filter = 'opacity(1)';
  }

  if (centerIndex >= allImages.length - 1) {
    rightArrow.style.filter = 'opacity(0.3)';
  } else {
    rightArrow.style.filter = 'opacity(1)';
  }
}


document.addEventListener('click', (event) => {
  const isImage = event.target.closest('.image-placeholder img');
  const isLeftArrow = event.target.closest('.left-button');
  const isRightArrow = event.target.closest('.right-button');

  if (!isImage && !isLeftArrow && !isRightArrow) {
    centerIndex = Math.floor(allImages.length / 2);
    updateCarousel();
  }
});
// Initial display
updateCarousel();