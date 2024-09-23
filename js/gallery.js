const images = [
      {
        preview:
          'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
        original:
          'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
        description: 'Hokkaido Flower',
      },
      {
        preview:
          'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
        original:
          'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
        description: 'Container Haulage Freight',
      },
      {
        preview:
          'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
        original:
          'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
        description: 'Aerial Beach View',
      },
      {
        preview:
          'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
        original:
          'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
        description: 'Flower Blooms',
      },
      {
        preview:
          'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
        original:
          'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
        description: 'Alpine Mountains',
      },
      {
        preview:
          'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
        original:
          'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
        description: 'Mountain Lake Sailing',
      },
      {
        preview:
          'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
        original:
          'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
        description: 'Alpine Spring Meadows',
      },
      {
        preview:
          'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
        original:
          'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
        description: 'Nature Landscape',
      },
      {
        preview:
          'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
        original:
          'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
        description: 'Lighthouse Coast Sea',
      },
    ];
    

    document.addEventListener('DOMContentLoaded', () => {
        const galleryContainer = document.querySelector('.gallery');
        if (galleryContainer) {
            const imagesMarkup = images.map(image => `
              <li class="gallery-item">
                <a class="gallery-link" href="${image.original}" onclick="event.preventDefault()">
                  <img
                    class="gallery-image"
                    src="${image.preview}"
                    data-source="${image.original}"
                    alt="${image.description}"
                  />
                </a>
              </li>
            `).join('');
    
            galleryContainer.innerHTML = imagesMarkup;
        }
    
        const galleryItems = document.querySelectorAll('.gallery-item');
        galleryItems.forEach(item => {
            item.addEventListener('click', (event) => {
                event.preventDefault(); // Запобігає стандартній поведінці посилання
                const img = event.target.closest('.gallery-item').querySelector('.gallery-image');
                if (img) {
                    const src = img.getAttribute('data-source');
                    const instance = basicLightbox.create(`
                        <div class="modal-content" style="width: 1440px; height: 696px; display: flex; align-items: center; justify-content: center; background-color: #2E2F42CC;">
                            <img src="${src}" style="max-width: 1112px; max-height: 640px; margin: 28px 164px; border: 0 solid transparent;">
                        </div>`
                    );
                    instance.show(); // Відображення модального вікна
                }
            });
        });
    });
    
    
    
    
    
    
    
      