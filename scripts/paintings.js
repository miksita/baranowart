document.addEventListener('DOMContentLoaded', function () {

    // фильтр

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


    // массив картин

    const artworksData = [
        {
            artist: "Maria Sidorova",
            title: "Abstract Harmony",
            sku: "MS-202526-51",
            material: "Акрил",
            size: "100 x 100 см",
            price: "2000",
            currency: "€",
            image: "/images/painting.jpg"
        },
        {
            artist: "Maria Sidorova",
            title: "Abstract Harmony",
            sku: "MS-202526-51",
            material: "Акрил",
            size: "100 x 100 см",
            price: "2000",
            currency: "€",
            image: "/images/painting.jpg"
        },
        {
            artist: "Maria Sidorova",
            title: "Abstract Harmony",
            sku: "MS-202526-51",
            material: "Акрил",
            size: "100 x 100 см",
            price: "2000",
            currency: "€",
            image: "/images/painting.jpg"
        },
        {
            artist: "Maria Sidorova",
            title: "Abstract Harmony",
            sku: "MS-202526-51",
            material: "Акрил",
            size: "100 x 100 см",
            price: "2000",
            currency: "€",
            image: "/images/painting.jpg"
        },
        {
            artist: "Maria Sidorova",
            title: "Abstract Harmony",
            sku: "MS-202526-51",
            material: "Акрил",
            size: "100 x 100 см",
            price: "2000",
            currency: "€",
            image: "/images/painting.jpg"
        },
        {
            artist: "Maria Sidorova",
            title: "Abstract Harmony",
            sku: "MS-202526-51",
            material: "Акрил",
            size: "100 x 100 см",
            price: "2000",
            currency: "€",
            image: "/images/painting.jpg"
        },
        {
            artist: "Maria Sidorova",
            title: "Abstract Harmony",
            sku: "MS-202526-51",
            material: "Акрил",
            size: "100 x 100 см",
            price: "2000",
            currency: "€",
            image: "/images/painting.jpg"
        },
        {
            artist: "Maria Sidorova",
            title: "Abstract Harmony",
            sku: "MS-202526-51",
            material: "Акрил",
            size: "100 x 100 см",
            price: "2000",
            currency: "€",
            image: "/images/painting.jpg"
        },
        {
            artist: "Maria Sidorova",
            title: "Abstract Harmony",
            sku: "MS-202526-51",
            material: "Акрил",
            size: "100 x 100 см",
            price: "2000",
            currency: "€",
            image: "/images/painting.jpg"
        },
        {
            artist: "Maria Sidorova",
            title: "Abstract Harmony",
            sku: "MS-202526-51",
            material: "Акрил",
            size: "100 x 100 см",
            price: "2000",
            currency: "€",
            image: "/images/painting.jpg"
        },

        {
            artist: "Maria Sidorova",
            title: "Abstract Harmony",
            sku: "MS-202526-51",
            material: "Акрил",
            size: "100 x 100 см",
            price: "2000",
            currency: "€",
            image: "/images/painting.jpg"
        },

        {
            artist: "Maria Sidorova",
            title: "Abstract Harmony",
            sku: "MS-202526-51",
            material: "Акрил",
            size: "100 x 100 см",
            price: "2000",
            currency: "€",
            image: "/images/painting.jpg"
        },

        {
            artist: "Maria Sidorova",
            title: "Abstract Harmony",
            sku: "MS-202526-51",
            material: "Акрил",
            size: "100 x 100 см",
            price: "2000",
            currency: "€",
            image: "/images/painting.jpg"
        },


    ];


    // пагинация и картины
    const itemsPerPage = 12;
    let currentPage = 1;
    const totalPages = Math.ceil(artworksData.length / itemsPerPage);

    const artworksContainer = document.getElementById('artworks-container');
    const paginationElement = document.getElementById('pagination');

    function displayItems(page) {
        artworksContainer.innerHTML = '';
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const paginatedItems = artworksData.slice(startIndex, endIndex);

        paginatedItems.forEach(item => {
            const card = document.createElement('div');
            card.className = 'col-6 col-md-4 mb-4 p-1';
            card.innerHTML = `
                <article class="art-card h-100">
                    <div class="square-img-container">
                        <img src="${item.image}" class="square-img" alt="${item.title}">
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
                            <h3 class="fs-6 mb-1">${item.artist}</h3>
                            <p class="fs-6 mb-2 fw-semibold">"${item.title}"</p>
                            <p class="mb-2 small">(Артикул: ${item.sku})</p>
                            <div class="d-flex small align-items-center">
                                <span>${item.material}</span>
                                <span class="px-2">|</span>
                                <span>${item.size}</span>
                            </div>
                        </div>
                        <div class="mt-2 fs-md-5 fs-6 fw-semibold">
                            <span>${item.price}</span>
                            <span>${item.currency}</span>
                        </div>
                    </div>
                </article>
            `;
            artworksContainer.appendChild(card);
        });
    };


    function setupPagination() {
        paginationElement.innerHTML = '';

        const prevLi = document.createElement('li');
        prevLi.className = `page-item ${currentPage === 1 ? 'disabled' : ''}`;
        prevLi.innerHTML = `
            <a class="page-link" href="#" aria-label="Previous" id="prev-page">
                <span aria-hidden="true">&laquo;</span>
            </a>
        `;
        paginationElement.appendChild(prevLi);

        const maxVisiblePages = 1000; 
        let startPage, endPage;

        if (totalPages <= maxVisiblePages) {
            startPage = 1;
            endPage = totalPages;
        } else {
            const maxPagesBeforeCurrent = Math.floor(maxVisiblePages / 2);
            const maxPagesAfterCurrent = Math.ceil(maxVisiblePages / 2) - 1;

            if (currentPage <= maxPagesBeforeCurrent) {
                startPage = 1;
                endPage = maxVisiblePages;
            } else if (currentPage + maxPagesAfterCurrent >= totalPages) {
                startPage = totalPages - maxVisiblePages + 1;
                endPage = totalPages;
            } else {
                startPage = currentPage - maxPagesBeforeCurrent;
                endPage = currentPage + maxPagesAfterCurrent;
            }
        }

        if (startPage > 1) {
            const firstLi = document.createElement('li');
            firstLi.className = 'page-item';
            firstLi.innerHTML = `<a class="page-link" href="#" data-page="1">1</a>`;
            paginationElement.appendChild(firstLi);

            if (startPage > 2) {
                const dotsLi = document.createElement('li');
                dotsLi.className = 'page-item disabled';
                dotsLi.innerHTML = `<span class="page-link">...</span>`;
                paginationElement.appendChild(dotsLi);
            }
        }

        for (let i = startPage; i <= endPage; i++) {
            const pageLi = document.createElement('li');
            pageLi.className = `page-item ${i === currentPage ? 'active' : ''}`;
            pageLi.innerHTML = `<a class="page-link" href="#" data-page="${i}">${i}</a>`;
            paginationElement.appendChild(pageLi);
        }

        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                const dotsLi = document.createElement('li');
                dotsLi.className = 'page-item disabled';
                dotsLi.innerHTML = `<span class="page-link">...</span>`;
                paginationElement.appendChild(dotsLi);
            }

            const lastLi = document.createElement('li');
            lastLi.className = 'page-item';
            lastLi.innerHTML = `<a class="page-link" href="#" data-page="${totalPages}">${totalPages}</a>`;
            paginationElement.appendChild(lastLi);
        }

        const nextLi = document.createElement('li');
        nextLi.className = `page-item ${currentPage === totalPages ? 'disabled' : ''}`;
        nextLi.innerHTML = `
            <a class="page-link" href="#" aria-label="Next" id="next-page">
                <span aria-hidden="true">&raquo;</span>
            </a>
        `;
        paginationElement.appendChild(nextLi);

        document.querySelectorAll('.page-link[data-page]').forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                const page = parseInt(this.getAttribute('data-page'));
                if (page !== currentPage) {
                    currentPage = page;
                    displayItems(currentPage);
                    setupPagination();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            });
        });

        document.getElementById('prev-page').addEventListener('click', function (e) {
            e.preventDefault();
            if (currentPage > 1) {
                currentPage--;
                displayItems(currentPage);
                setupPagination();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });

        document.getElementById('next-page').addEventListener('click', function (e) {
            e.preventDefault();
            if (currentPage < totalPages) {
                currentPage++;
                displayItems(currentPage);
                setupPagination();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    }

    displayItems(currentPage);
    setupPagination();
});