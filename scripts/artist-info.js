function switchTab(tabId) {
    document.querySelectorAll(".btn-tab").forEach(btn => btn.classList.remove("active"));
    document.querySelectorAll(".tab-content").forEach(tab => tab.classList.remove("active"));

    const btn = document.querySelector(`.btn-tab[onclick*="${tabId}"]`);
    const tab = document.getElementById(`${tabId}-tab`);
    
    if (btn) btn.classList.add("active");
    if (tab) tab.classList.add("active");
}

document.addEventListener("DOMContentLoaded", function() {
    switchTab("artist-arts"); 


    //кнопка скрыть и подробнее
    const toggleBtn = document.querySelector('.toggle-text-btn');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', function() {
            const shortText = document.querySelector('.short-text');
            const fullText = document.querySelector('.full-text');
            
            if (fullText.style.display === 'none') {
                shortText.style.display = 'none';
                fullText.style.display = 'block';
                toggleBtn.textContent = 'Скрыть';
            } else {
                shortText.style.display = 'block';
                fullText.style.display = 'none';
                toggleBtn.textContent = 'Подробнее...';
            }
        });
    }

    const minPriceInput = document.getElementById('minPrice');
    const maxPriceInput = document.getElementById('maxPrice');
    const minSlider = document.getElementById('minSlider');
    const maxSlider = document.getElementById('maxSlider');
    const minThumb = document.getElementById('minThumb');
    const maxThumb = document.getElementById('maxThumb');
    const sliderRange = document.getElementById('sliderRange');
    const priceSliderContainer = document.querySelector('.price-slider-container');

    const minValue = 0;
    const maxValue = 1500000;
    let minVal = parseInt(minPriceInput.value);
    let maxVal = parseInt(maxPriceInput.value);

    function updateSlider() {
        const minPercent = ((minVal - minValue) / (maxValue - minValue)) * 100;
        const maxPercent = ((maxVal - minValue) / (maxValue - minValue)) * 100;

        minThumb.style.left = minPercent + '%';
        maxThumb.style.left = maxPercent + '%';

        sliderRange.style.left = minPercent + '%';
        sliderRange.style.right = (100 - maxPercent) + '%';

        minSlider.value = minVal;
        maxSlider.value = maxVal;
    }

    function setMinValue(value) {
        minVal = Math.min(parseInt(value), maxVal - 1000);
        minPriceInput.value = minVal;
        updateSlider();
    }

    function setMaxValue(value) {
        maxVal = Math.max(parseInt(value), minVal + 1000);
        maxPriceInput.value = maxVal;
        updateSlider();
    }

    minPriceInput.addEventListener('input', function () {
        setMinValue(this.value);
    });

    maxPriceInput.addEventListener('input', function () {
        setMaxValue(this.value);
    });

    minSlider.addEventListener('input', function () {
        setMinValue(this.value);
    });

    maxSlider.addEventListener('input', function () {
        setMaxValue(this.value);
    });

    function setupThumb(thumb, setValueFunc) {
        let isDragging = false;

        thumb.addEventListener('mousedown', function (e) {
            isDragging = true;
            document.addEventListener('mousemove', onDrag);
            document.addEventListener('mouseup', onDragEnd);
        });

        thumb.addEventListener('touchstart', function (e) {
            isDragging = true;
            document.addEventListener('touchmove', onDrag);
            document.addEventListener('touchend', onDragEnd);
            e.preventDefault();
        });

        function onDrag(e) {
            if (!isDragging) return;

            const clientX = e.clientX || (e.touches && e.touches[0].clientX);
            if (!clientX) return;

            const rect = priceSliderContainer.getBoundingClientRect();
            let percent = (clientX - rect.left) / rect.width;
            percent = Math.min(Math.max(percent, 0), 1);
            const newValue = minValue + percent * (maxValue - minValue);

            setValueFunc(Math.round(newValue / 1000) * 1000);
        }

        function onDragEnd() {
            isDragging = false;
            document.removeEventListener('mousemove', onDrag);
            document.removeEventListener('mouseup', onDragEnd);
            document.removeEventListener('touchmove', onDrag);
            document.removeEventListener('touchend', onDragEnd);
        }
    }

    setupThumb(minThumb, setMinValue);
    setupThumb(maxThumb, setMaxValue);

    updateSlider();

    document.querySelector('.btn-reset').addEventListener('click', function () {
        setMinValue(minValue);
        setMaxValue(maxValue);
    });

    document.querySelector('.btn-apply').addEventListener('click', function () {
        console.log('Фильтры применены:', { min: minVal, max: maxVal });
    });




    // Мобильный фильтр

    const mobileFilterBtn = document.querySelector('.mobile-filter-btn');
    const filterColumn = document.querySelector('.filter-column');
    const closeFilterBtn = document.createElement('button');

    closeFilterBtn.innerHTML = '<i class="bi bi-x"></i>';
    closeFilterBtn.classList.add('btn', 'close-filter-btn');
    closeFilterBtn.style.position = 'absolute';
    closeFilterBtn.style.top = '1rem';
    closeFilterBtn.style.right = '1rem';
    closeFilterBtn.style.zIndex = '1000';
    closeFilterBtn.style.fontSize = '1.5rem';

    function toggleMobileFilter() {
        if (filterColumn.style.display === 'block') {
            filterColumn.style.display = 'none';
            document.body.style.overflow = 'auto';
            document.body.style.position = 'static';
            document.body.style.paddingBottom = '0';
        } else {
            filterColumn.style.display = 'block';
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
            document.body.style.width = '100%';
            document.body.style.paddingBottom = '80px';

            if (!filterColumn.contains(closeFilterBtn)) {
                filterColumn.appendChild(closeFilterBtn);
            }
        }
    }

    mobileFilterBtn.addEventListener('click', toggleMobileFilter);
    closeFilterBtn.addEventListener('click', toggleMobileFilter);

    document.querySelector('.btn-apply').addEventListener('click', function () {
        if (window.innerWidth <= 768) {
            toggleMobileFilter();
        }
    });

    document.querySelector('.btn-reset').addEventListener('click', function () {
        if (window.innerWidth <= 768) {
            toggleMobileFilter();
        }
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            filterColumn.style.display = '';
            document.body.style.overflow = '';
            document.body.style.position = '';
        }
    });

    // Данные художников (упрощенный вариант)
    const artistsData = [
        {
            id: 1,
            name: "Мария Сидорова",
            country: "Россия",
            artworksCount: 12,
            avatar: "/images/avatar.png",
            images: [
                "/images/painting.jpg",
                "/images/painting.jpg",
                "/images/painting.jpg"
            ]
        },
        {
            id: 1,
            name: "Мария Сидорова",
            country: "Россия",
            artworksCount: 12,
            avatar: "/images/avatar.png",
            images: [
                "/images/painting.jpg",
                "/images/painting.jpg",
                "/images/painting.jpg"
            ]
        },
        {
            id: 1,
            name: "Мария Сидорова",
            country: "Россия",
            artworksCount: 12,
            avatar: "/images/avatar.png",
            images: [
                "/images/painting.jpg",
                "/images/painting.jpg",
                "/images/painting.jpg"
            ]
        },
        {
            id: 1,
            name: "Мария Сидорова",
            country: "Россия",
            artworksCount: 12,
            avatar: "/images/avatar.png",
            images: [
                "/images/painting.jpg",
                "/images/painting.jpg",
                "/images/painting.jpg"
            ]
        },
        {
            id: 1,
            name: "Мария Сидорова",
            country: "Россия",
            artworksCount: 12,
            avatar: "/images/avatar.png",
            images: [
                "/images/painting.jpg",
                "/images/painting.jpg",
                "/images/painting.jpg"
            ]
        },
        {
            id: 1,
            name: "Мария Сидорова",
            country: "Россия",
            artworksCount: 12,
            avatar: "/images/avatar.png",
            images: [
                "/images/painting.jpg",
                "/images/painting.jpg",
                "/images/painting.jpg"
            ]
        },
        {
            id: 1,
            name: "Мария Сидорова",
            country: "Россия",
            artworksCount: 12,
            avatar: "/images/avatar.png",
            images: [
                "/images/painting.jpg",
                "/images/painting.jpg",
                "/images/painting.jpg"
            ]
        },
        {
            id: 1,
            name: "Мария Сидорова",
            country: "Россия",
            artworksCount: 12,
            avatar: "/images/avatar.png",
            images: [
                "/images/painting.jpg",
                "/images/painting.jpg",
                "/images/painting.jpg"
            ]
        },
        {
            id: 1,
            name: "Мария Сидорова",
            country: "Россия",
            artworksCount: 12,
            avatar: "/images/avatar.png",
            images: [
                "/images/painting.jpg",
                "/images/painting.jpg",
                "/images/painting.jpg"
            ]
        },
        {
            id: 1,
            name: "Мария Сидорова",
            country: "Россия",
            artworksCount: 12,
            avatar: "/images/avatar.png",
            images: [
                "/images/painting.jpg",
                "/images/painting.jpg",
                "/images/painting.jpg"
            ]
        },
        {
            id: 1,
            name: "Мария Сидорова",
            country: "Россия",
            artworksCount: 12,
            avatar: "/images/avatar.png",
            images: [
                "/images/painting.jpg",
                "/images/painting.jpg",
                "/images/painting.jpg"
            ]
        },
    ];

    const artistsPerPage = 9;
    let currentArtistsPage = 1;
    const totalArtistsPages = Math.ceil(artistsData.length / artistsPerPage);

    const artistsContainer = document.getElementById('artworks-container');
    const artistsPagination = document.getElementById('pagination');

    function displayArtists(page) {
        artistsContainer.innerHTML = '';
        const startIndex = (page - 1) * artistsPerPage;
        const endIndex = startIndex + artistsPerPage;
        const paginatedArtists = artistsData.slice(startIndex, endIndex);

        if (paginatedArtists.length === 0) {
            artistsContainer.innerHTML = '<p class="text-center py-5">Работы не найдены</p>';
            return;
        }

        paginatedArtists.forEach(artist => {
            const col = document.createElement('div');
            col.className = 'col-6 col-md-6 mb-4 p-1';

            col.innerHTML = `
                <article class="art-card h-100">
                    <div class="square-img-container">
                        <img src="${artist.images[0]}" class="square-img" alt="${artist.name}">
                        <div class="favorite-btn">
                            <i class="bi bi-heart"></i>
                        </div>
                        <div class="cart-btn-container">
                            <div class="cart-btn">
                                <i class="bi bi-cart fs-4"></i>
                            </div>
                        </div>
                    </div>
                    <div class="card-content">
                        <div class="card-text">
                            <h3 class="fs-6 mb-1">${artist.name}</h3>
                            <p class="fs-6 mb-2 fw-semibold">"${artist.title || 'Без названия'}"</p>
                            <p class="mb-2 small">(Артикул: ${artist.sku || 'не указан'})</p>
                            <div class="d-flex small align-items-center">
                                <span>${artist.material || 'не указано'}</span>
                                <span class="px-2">|</span>
                                <span>${artist.size || 'не указан'}</span>
                            </div>
                        </div>
                        <div class="mt-2 fs-md-5 fs-6 fw-semibold">
                            <span>${artist.price || '0'}</span>
                            <span>${artist.currency || '€'}</span>
                        </div>
                    </div>
                </article>
            `;

            artistsContainer.appendChild(col);
        });
    }

    // Функция  пагинации
    function setupArtistsPagination() {
        artistsPagination.innerHTML = '';

        const prevLi = document.createElement('li');
        prevLi.className = `page-item ${currentArtistsPage === 1 ? 'disabled' : ''}`;
        prevLi.innerHTML = `
            <a class="page-link" href="#" aria-label="Previous" id="prev-page">
                <span aria-hidden="true">&laquo;</span>
            </a>
        `;
        artistsPagination.appendChild(prevLi);

        for (let i = 1; i <= totalArtistsPages; i++) {
            const pageLi = document.createElement('li');
            pageLi.className = `page-item ${i === currentArtistsPage ? 'active' : ''}`;
            pageLi.innerHTML = `<a class="page-link" href="#" data-page="${i}">${i}</a>`;
            artistsPagination.appendChild(pageLi);
        }

        const nextLi = document.createElement('li');
        nextLi.className = `page-item ${currentArtistsPage === totalArtistsPages ? 'disabled' : ''}`;
        nextLi.innerHTML = `
            <a class="page-link" href="#" aria-label="Next" id="next-page">
                <span aria-hidden="true">&raquo;</span>
            </a>
        `;
        artistsPagination.appendChild(nextLi);

        document.querySelectorAll('.page-link[data-page]').forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                const page = parseInt(this.getAttribute('data-page'));
                if (page !== currentArtistsPage) {
                    currentArtistsPage = page;
                    displayArtists(currentArtistsPage);
                    setupArtistsPagination();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            });
        });

        document.getElementById('prev-page').addEventListener('click', function (e) {
            e.preventDefault();
            if (currentArtistsPage > 1) {
                currentArtistsPage--;
                displayArtists(currentArtistsPage);
                setupArtistsPagination();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });

        document.getElementById('next-page').addEventListener('click', function (e) {
            e.preventDefault();
            if (currentArtistsPage < totalArtistsPages) {
                currentArtistsPage++;
                displayArtists(currentArtistsPage);
                setupArtistsPagination();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    }

    displayArtists(currentArtistsPage);
    setupArtistsPagination();

});