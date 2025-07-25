document.addEventListener('DOMContentLoaded', function () {
    
    const itemsPerPage = 9;
    let currentPage = 1;
    const totalPages = Math.ceil(newsData.length / itemsPerPage);

    const newsContainer = document.getElementById('news-container');
    const paginationElement = document.getElementById('pagination');

    function displayItems(page) {
        newsContainer.innerHTML = '';
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const paginatedItems = newsData.slice(startIndex, endIndex);

        paginatedItems.forEach(item => {
            const card = document.createElement('article');
            card.className = 'col-12 col-md-6 col-lg-4';
            card.innerHTML = `
                        <div class="news-card h-100">
                            <figure class="square-img-container">
                                <img src="${item.image}" class="square-img" alt="${item.title}">
                            </figure>
                            <div class="card-content">
                                <div class="card-text">
                                    <h2 class="fs-5 fw-semibold mb-2">${item.title}</h2>
                                    <p class="mb-3">${item.description}</p>
                                </div>
                                <div class="d-flex align-items-center fs-6 mb-3">
                                    <i class="bi bi-calendar me-2"></i>
                                    <span>${item.date}</span>
                                </div>
                                <div class="card-footer">
                                    <button class="btn-primary py-2 px-3 fs-6">Подробнее</button>
                                </div>
                            </div>
                        </div>
                    `;
            newsContainer.appendChild(card);
        });
    }


    function setupPagination() {
        paginationElement.innerHTML = '';

        // Кнопка "Назад"
        const prevLi = document.createElement('li');
        prevLi.className = `page-item ${currentPage === 1 ? 'disabled' : ''}`;
        prevLi.innerHTML = `
                    <a class="page-link" href="#" aria-label="Previous" id="prev-page">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                `;
        paginationElement.appendChild(prevLi);

        const maxVisiblePages = 1000;  //макс количество страниц
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




   const newsData = [
        {
            id: 1,
            title: "Современные русские пейзажи — разумная инвестиция",
            description: "Исследуйте инвестиционный потенциал современных российских пейзажей.",
            date: "15.06.2023",
            image: "../images/painting.jpg"
        },
        {
            id: 1,
            title: "Современные русские пейзажи — разумная инвестиция",
            description: "Исследуйте инвестиционный потенциал современных российских пейзажей.",
            date: "15.06.2023",
            image: "../images/painting.jpg"
        },
        {
            id: 1,
            title: "Современные русские пейзажи — разумная инвестиция",
            description: "Исследуйте инвестиционный потенциал современных российских пейзажей.",
            date: "15.06.2023",
            image: "../images/painting.jpg"
        },
        {
            id: 1,
            title: "Современные русские пейзажи — разумная инвестиция",
            description: "Исследуйте инвестиционный потенциал современных российских пейзажей.",
            date: "15.06.2023",
            image: "../images/painting.jpg"
        },
        {
            id: 1,
            title: "Современные русские пейзажи — разумная инвестиция",
            description: "Исследуйте инвестиционный потенциал современных российских пейзажей.",
            date: "15.06.2023",
            image: "../images/painting.jpg"
        },
        {
            id: 1,
            title: "Современные русские пейзажи — разумная инвестиция",
            description: "Исследуйте инвестиционный потенциал современных российских пейзажей.",
            date: "15.06.2023",
            image: "../images/painting.jpg"
        },
        {
            id: 1,
            title: "Современные русские пейзажи — разумная инвестиция",
            description: "Исследуйте инвестиционный потенциал современных российских пейзажей.",
            date: "15.06.2023",
            image: "../images/painting.jpg"
        },
        {
            id: 1,
            title: "Современные русские пейзажи — разумная инвестиция",
            description: "Исследуйте инвестиционный потенциал современных российских пейзажей.",
            date: "15.06.2023",
            image: "../images/painting.jpg"
        },
        {
            id: 1,
            title: "Современные русские пейзажи — разумная инвестиция",
            description: "Исследуйте инвестиционный потенциал современных российских пейзажей.",
            date: "15.06.2023",
            image: "../images/painting.jpg"
        },
           {
            id: 1,
            title: "Современные русские пейзажи — разумная инвестиция",
            description: "Исследуйте инвестиционный потенциал современных российских пейзажей.",
            date: "15.06.2023",
            image: "../images/painting.jpg"
        },
           {
            id: 1,
            title: "Современные русские пейзажи — разумная инвестиция",
            description: "Исследуйте инвестиционный потенциал современных российских пейзажей.",
            date: "15.06.2023",
            image: "../images/painting.jpg"
        },
           {
            id: 1,
            title: "Современные русские пейзажи — разумная инвестиция",
            description: "Исследуйте инвестиционный потенциал современных российских пейзажей.",
            date: "15.06.2023",
            image: "../images/painting.jpg"
        },
           {
            id: 1,
            title: "Современные русские пейзажи — разумная инвестиция",
            description: "Исследуйте инвестиционный потенциал современных российских пейзажей.",
            date: "15.06.2023",
            image: "../images/painting.jpg"
        },
           {
            id: 1,
            title: "Современные русские пейзажи — разумная инвестиция",
            description: "Исследуйте инвестиционный потенциал современных российских пейзажей.",
            date: "15.06.2023",
            image: "../images/painting.jpg"
        },
           {
            id: 1,
            title: "Современные русские пейзажи — разумная инвестиция",
            description: "Исследуйте инвестиционный потенциал современных российских пейзажей.",
            date: "15.06.2023",
            image: "../images/painting.jpg"
        },
           {
            id: 1,
            title: "Современные русские пейзажи — разумная инвестиция",
            description: "Исследуйте инвестиционный потенциал современных российских пейзажей.",
            date: "15.06.2023",
            image: "../images/painting.jpg"
        },
           {
            id: 1,
            title: "Современные русские пейзажи — разумная инвестиция",
            description: "Исследуйте инвестиционный потенциал современных российских пейзажей.",
            date: "15.06.2023",
            image: "../images/painting.jpg"
        },
           {
            id: 1,
            title: "Современные русские пейзажи — разумная инвестиция",
            description: "Исследуйте инвестиционный потенциал современных российских пейзажей.",
            date: "15.06.2023",
            image: "../images/painting.jpg"
        },
           {
            id: 1,
            title: "Современные русские пейзажи — разумная инвестиция",
            description: "Исследуйте инвестиционный потенциал современных российских пейзажей.",
            date: "15.06.2023",
            image: "../images/painting.jpg"
        },
           {
            id: 1,
            title: "Современные русские пейзажи — разумная инвестиция",
            description: "Исследуйте инвестиционный потенциал современных российских пейзажей.",
            date: "15.06.2023",
            image: "../images/painting.jpg"
        },
           {
            id: 1,
            title: "Современные русские пейзажи — разумная инвестиция",
            description: "Исследуйте инвестиционный потенциал современных российских пейзажей.",
            date: "15.06.2023",
            image: "../images/painting.jpg"
        },
        

    ];
