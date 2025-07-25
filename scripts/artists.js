
document.addEventListener('DOMContentLoaded', function () {
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
                "/images/painting.jpg",


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
                "/images/painting.jpg",


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
                "/images/painting.jpg",


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
                "/images/painting.jpg",


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
                "/images/painting.jpg",


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
                "/images/painting.jpg",


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
                "/images/painting.jpg",


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
                "/images/painting.jpg",


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
                "/images/painting.jpg",


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
                "/images/painting.jpg",


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
                "/images/painting.jpg",


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
                "/images/painting.jpg",


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
                "/images/painting.jpg",
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

    const artistsContainer = document.getElementById('artists-container');
    const artistsPagination = document.getElementById('artists-pagination');

    function displayArtists(page) {
        artistsContainer.innerHTML = '';
        const startIndex = (page - 1) * artistsPerPage;
        const endIndex = startIndex + artistsPerPage;
        const paginatedArtists = artistsData.slice(startIndex, endIndex);

        paginatedArtists.forEach(artist => {
            const col = document.createElement('div');
            col.className = 'col-md-6 col-lg-4 mb-4';

            col.innerHTML = `
                        <article class="artist-card">
                            <div class="artist-info">
                                <div class="artist-info-wrapper mb-3">
                                    <div class="artist-avatar me-3">
                                        <img src="${artist.avatar}" alt="${artist.name}">
                                        <button class="favorite-btn">
                                            <i class="bi bi-heart small"></i>
                                        </button>
                                    </div>
                                    <div>
                                        <h5 class="fs-5 fw-semibold">${artist.name}</h5>
                                        <div class="small mb-1">
                                            <i class="bi bi-geo-alt"></i>
                                            <span>${artist.country}</span>
                                        </div>
                                        <p class="small">Кол-во картин: ${artist.artworksCount}</p>
                                    </div>
                                </div>
                            </div>

                            <div class="gallery-container">
                                <div class="main-image">
                                    <img src="${artist.images[0]}" class="gallery-img" alt="">
                                </div>
                                <div class="side-images">
                                    <div class="side-image">
                                        <img src="${artist.images[1]}" class="gallery-img" alt="">
                                    </div>
                                    <div class="side-image">
                                        <img src="${artist.images[2]}" class="gallery-img" alt="">
                                    </div>
                                </div>
                            </div>
                        </article>
                    `;

            artistsContainer.appendChild(col);
        });
    }

    // Функция для настройки пагинации
    function setupArtistsPagination() {
        artistsPagination.innerHTML = '';

        const prevLi = document.createElement('li');
        prevLi.className = `page-item ${currentArtistsPage === 1 ? 'disabled' : ''}`;
        prevLi.innerHTML = `
                    <a class="page-link" href="#" aria-label="Previous" id="prev-artists-page">
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
                    <a class="page-link" href="#" aria-label="Next" id="next-artists-page">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                `;
        artistsPagination.appendChild(nextLi);

        // Обработчики событий для пагинации
        document.querySelectorAll('.page-link[data-page]').forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                const page = parseInt(this.getAttribute('data-page'));
                if (page !== currentArtistsPage) {
                    currentArtistsPage = page;
                    displayArtists(currentArtistsPage);
                    setupArtistsPagination();
                    window.scrollTo({ top: artistsContainer.offsetTop - 100, behavior: 'smooth' });
                }
            });
        });

        document.getElementById('prev-artists-page').addEventListener('click', function (e) {
            e.preventDefault();
            if (currentArtistsPage > 1) {
                currentArtistsPage--;
                displayArtists(currentArtistsPage);
                setupArtistsPagination();
                window.scrollTo({ top: artistsContainer.offsetTop - 100, behavior: 'smooth' });
            }
        });

        document.getElementById('next-artists-page').addEventListener('click', function (e) {
            e.preventDefault();
            if (currentArtistsPage < totalArtistsPages) {
                currentArtistsPage++;
                displayArtists(currentArtistsPage);
                setupArtistsPagination();
                window.scrollTo({ top: artistsContainer.offsetTop - 100, behavior: 'smooth' });
            }
        });
    }

    const sortDropdown = document.getElementById('sortDropdown');
    const dropdownItems = document.querySelectorAll('#sortDropdown ~ .dropdown-menu .dropdown-item');

    dropdownItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();

            dropdownItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
            sortDropdown.innerHTML = this.innerHTML;
        });
    });

    displayArtists(currentArtistsPage);
    setupArtistsPagination();

});
