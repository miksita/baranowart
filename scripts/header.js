document.addEventListener('DOMContentLoaded', function () {
    const languageOptions = document.querySelectorAll('.language-option');
    const currentFlag = document.getElementById('current-flag');
    const mobileCurrentFlag = document.getElementById('mobile-current-flag');

    languageOptions.forEach(option => {
        option.addEventListener('click', function (e) {
            e.preventDefault();
            const flag = this.getAttribute('data-flag');
            if (currentFlag) currentFlag.className = 'flag-icon flag-icon-' + flag;
            if (mobileCurrentFlag) mobileCurrentFlag.className = 'flag-icon flag-icon-' + flag;
        });
    });

    const currencyOptions = document.querySelectorAll('.currency-option');
    const currentCurrency = document.getElementById('current-currency');
    const mobileCurrentCurrency = document.getElementById('mobile-current-currency');

    function getCurrencySymbol(currencyStr) {
        const match = currencyStr.match(/\(([^)]+)\)/);
        return match ? match[1] : currencyStr;
    }

    currencyOptions.forEach(option => {
        option.addEventListener('click', function (e) {
            e.preventDefault();
            const currency = this.getAttribute('data-currency');

            if (currentCurrency) currentCurrency.textContent = currency;

            if (mobileCurrentCurrency) {
                mobileCurrentCurrency.textContent = getCurrencySymbol(currency);
            }

            currencyOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
        });
    });

    const bottomNavItems = document.querySelectorAll('.mobile-bottom-nav-item');
    bottomNavItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            bottomNavItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });

    const searchModal = new bootstrap.Modal('#searchModal');
    const backdrop = document.querySelector('.search-modal-backdrop');

    document.querySelectorAll('[aria-label="Поиск"]').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            searchModal.show();
            backdrop.classList.add('show');
            document.querySelector('.search-input').focus();
        });
    });

    document.getElementById('searchModal').addEventListener('hidden.bs.modal', function () {
        backdrop.classList.remove('show');
    });

    backdrop.addEventListener('click', function () {
        searchModal.hide();
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && searchModal._isShown) {
            searchModal.hide();
        }
    });
});