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

    currencyOptions.forEach(option => {
        option.addEventListener('click', function (e) {
            e.preventDefault();
            const currency = this.getAttribute('data-currency');
            if (currentCurrency) currentCurrency.textContent = currency;
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
});