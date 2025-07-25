  document.querySelectorAll('.panel-item').forEach(item => {
            item.addEventListener('click', function () {
                document.querySelectorAll('.panel-item').forEach(el => {
                    el.classList.remove('active');
                });
                this.classList.add('active');
            });
        });


        document.querySelectorAll('.panel-title').forEach(title => {
            title.addEventListener('click', function () {
                console.log('Clicked:', this.textContent);
            });
        });

document.getElementById('mobilePanelToggle').addEventListener('click', function() {
    const panel = document.getElementById('mobilePersonalPanel');
    const icon = document.getElementById('mobilePanelIcon');
    
    panel.classList.toggle('d-none');
    icon.classList.toggle('bi-chevron-down');
    icon.classList.toggle('bi-chevron-up');
});


document.addEventListener('DOMContentLoaded', function() {
    const dropdownItems = document.querySelectorAll('#addDropdown + .dropdown-menu .dropdown-item');
    
    dropdownItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const selectedValue = this.getAttribute('data-value');
            const dropdownButton = document.getElementById('addDropdown');
            
            dropdownButton.innerHTML = this.textContent.trim() + ' ' + icon;            
      
        });
    });
});