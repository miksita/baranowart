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

document.addEventListener('DOMContentLoaded', function() {
            if (typeof tinymce !== 'undefined') {
                tinymce.init({
                    selector: '.tinymcecontent',
                    plugins: 'link lists table code',
                    toolbar: 'undo redo | styles | bold italic | alignleft aligncenter alignright | bullist numlist | link table | code',
                    menubar: false,
                    skin: 'bootstrap',
                    content_css: 'bootstrap',
                    height: 300
                });
            }
        });


        // Переключение между языками
document.querySelectorAll('.lang-tab').forEach(tab => {
    tab.addEventListener('click', function() {
        // Убираем активный класс у всех табов
        document.querySelectorAll('.lang-tab').forEach(t => t.classList.remove('active'));
        // Добавляем активный класс текущему табу
        this.classList.add('active');
        
        // Скрываем все textarea
        document.querySelectorAll('.language-content textarea').forEach(ta => {
            ta.style.display = 'none';
            ta.classList.remove('active');
        });
        
        // Показываем активную textarea
        const lang = this.dataset.lang;
        const activeTextarea = document.getElementById(`content_${lang}`);
        activeTextarea.style.display = 'block';
        activeTextarea.classList.add('active');
    });
});

document.getElementById('generateTextBtn').addEventListener('click', function() {
    const activeTab = document.querySelector('.lang-tab.active');
    const lang = activeTab.dataset.lang;
    const textarea = document.getElementById(`content_${lang}`);
    
    generateText(lang).then(generatedText => {
        textarea.value = generatedText;
        
        if (lang === 'en') {
            translateText(generatedText, 'en', 'de').then(translated => {
                document.getElementById('content_de').value = translated;
            });
            translateText(generatedText, 'en', 'ru').then(translated => {
                document.getElementById('content_ru').value = translated;
            });
        }
    });
});

async function generateText(lang) {
    return `Generated description in ${lang}`;
}

async function translateText(text, fromLang, toLang) {
    return `Translated to ${toLang}: ${text}`;
}