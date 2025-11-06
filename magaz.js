 const translations = {
            ru: {
                greeting: "Привет",
                guest: "Гость",
                admin: "Администратор",
                home: "Главная",
                ads: "Объявления",
                donates: "Донаты",
                adminPanel: "Админ-панель",
                login: "Войти / Регистрация",
                logout: "Выйти",
                adminLogout: "Выйти из админки",
                // heroTitle: "Фриланс Платформа",
                // heroText: "Найдите исполнителей для своих задач или начните зарабатывать на своих навыках. Безопасно, удобно и надежно!",
                // getStarted: "Начать сейчас",
                security: "Безопасность",
                securityText: "Все платежи защищены, а ваши данные в безопасности. Мы используем современные методы шифрования.",
                fast: "Быстро",
                fastText: "Найдите исполнителя или работу за считанные минуты. Наша система оптимизирована для скорости.",
                profitable: "Выгодно",
                profitableText: "Низкие комиссии и прозрачная система расчетов. Зарабатывайте больше с нашим сервисом.",
                allAds: "Все объявления",
                search: "Поиск",
                searchAds: "Поиск объявлений",
                searchDonates: "Поиск донатов",
                find: "Найти",
                back: "← Назад",
                contact: "Связаться в Telegram",
                categoryAd: "Объявление",
                categoryDonate: "Донаты",
                noAds: "Объявлений пока нет",
                noDonates: "Донатов пока нет",
                nothingFound: "По вашему запросу ничего не найдено",
                loginRegister: "Вход / Регистрация",
                username: "Логин",
                password: "Пароль",
                enter: "Войти",
                noAccount: "Нет аккаунта? Зарегистрироваться",
                haveAccount: "Уже есть аккаунт? Войти",
                register: "Зарегистрироваться",
                postAd: "Выложить объявление",
                manageAds: "Управление объявлениями",
                category: "Категория",
                title: "Заголовок",
                description: "Описание",
                price: "Цена (UZS)",
                telegram: "Telegram пользователя",
                image: "Изображение",
                editAd: "Редактировать объявление",
                saveChanges: "Сохранить изменения",
                delete: "Удалить",
                edit: "Редактировать",
                details: "Подробнее"
            },
            uz: {
                greeting: "Salom",
                guest: "Mehmon",
                admin: "Administrator",
                home: "Bosh sahifa",
                ads: "E'lonlar",
                donates: "Donatlar",
                adminPanel: "Admin panel",
                login: "Kirish / Ro'yxatdan o'tish",
                logout: "Chiqish",
                adminLogout: "Admin paneldan chiqish",
                // heroTitle: "Freelance Platforma",
                // heroText: "O'z vazifalaringiz uchun ijrochilarni toping yoki o'z ko'nikmalaringizdan foydalangan holda pul ishlang. Xavfsiz, qulay va ishonchli!",
                // getStarted: "Hozir boshlash",
                security: "Xavfsizlik",
                securityText: "Barcha to'lovlar himoyalangan va ma'lumotlaringiz xavfsiz. Biz zamonaviy shifrlash usullaridan foydalanamiz.",
                fast: "Tez",
                fastText: "Ijrochi yoki ishni bir necha daqiqada toping. Bizning tizimimiz tezkorlik uchun optimallashtirilgan.",
                profitable: "Foydali",
                profitableText: "Past komissiyalar va shaffof hisob-kitob tizimi. Bizning xizmatimiz bilan ko'proq pul ishlang.",
                allAds: "Barcha e'lonlar",
                search: "Qidirish",
                searchAds: "E'lonlarni qidirish",
                searchDonates: "Donatlarni qidirish",
                find: "Topish",
                back: "← Orqaga",
                contact: "Telegram orqali bog'lanish",
                categoryAd: "E'lon",
                categoryDonate: "Donat",
                noAds: "Hozircha e'lonlar yo'q",
                noDonates: "Hozircha donatlar yo'q",
                nothingFound: "So'rovingiz bo'yicha hech narsa topilmadi",
                loginRegister: "Kirish / Ro'yxatdan o'tish",
                username: "Login",
                password: "Parol",
                enter: "Kirish",
                noAccount: "Hisobingiz yo'q? Ro'yxatdan o'tish",
                haveAccount: "Hisobingiz bormi? Kirish",
                register: "Ro'yxatdan o'tish",
                postAd: "E'lon joylash",
                manageAds: "E'lonlarni boshqarish",
                category: "Kategoriya",
                title: "Sarlavha",
                description: "Tavsif",
                price: "Narx (UZS)",
                telegram: "Foydalanuvchi Telegrami",
                image: "Rasm",
                editAd: "E'lonni tahrirlash",
                saveChanges: "O'zgarishlarni saqlash",
                delete: "O'chirish",
                edit: "Tahrirlash",
                details: "Batafsil"
            }
        };

        let currentLanguage = 'ru';
        let appState = {
            currentUser: null,
            isLoggedIn: false,
            isAdmin: false,
            currentPage: 'home',
            ads: [],
            donates: []
        };

        document.addEventListener('DOMContentLoaded', function() {
            initApp();
            setupEventListeners();
            initCarousel();
            setupLanguageSwitcher();
        });

        function setupLanguageSwitcher() {
            document.querySelectorAll('.lang-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const lang = this.getAttribute('data-lang');
                    switchLanguage(lang);
                });
            });
        }

        function switchLanguage(lang) {
            currentLanguage = lang;
            
            document.querySelectorAll('.lang-btn').forEach(btn => {
                btn.classList.remove('active');
                if (btn.getAttribute('data-lang') === lang) {
                    btn.classList.add('active');
                }
            });

            updateTexts();
            updateUI();
        }

        function updateTexts() {
            const t = translations[currentLanguage];
            
            document.querySelectorAll('[data-ru]').forEach(element => {
                const key = element.getAttribute(`data-${currentLanguage}`);
                if (key) {
                    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                        element.placeholder = key;
                    } else {
                        element.textContent = key;
                    }
                }
            });

            document.getElementById('user-greeting').textContent = `${t.greeting}: ${appState.isLoggedIn ? (appState.isAdmin ? t.admin : appState.currentUser.username) : t.guest}`;
            document.getElementById('nav-home').textContent = t.home;
            document.getElementById('nav-ads').textContent = t.ads;
            document.getElementById('nav-donates').textContent = t.donates;
            document.getElementById('nav-admin').textContent = t.adminPanel;
            document.getElementById('btn-login').textContent = t.login;
            document.getElementById('btn-logout').textContent = t.logout;
            document.getElementById('btn-admin-logout').textContent = t.adminLogout;
            document.getElementById('hero-title').textContent = t.heroTitle;
            document.getElementById('hero-text').textContent = t.heroText;
            document.getElementById('hero-get-started').textContent = t.getStarted;
            document.getElementById('feature1-title').textContent = t.security;
            document.getElementById('feature1-text').textContent = t.securityText;
            document.getElementById('feature2-title').textContent = t.fast;
            document.getElementById('feature2-text').textContent = t.fastText;
            document.getElementById('feature3-title').textContent = t.profitable;
            document.getElementById('feature3-text').textContent = t.profitableText;
            document.getElementById('ads-title').textContent = t.allAds;
            document.getElementById('donates-title').textContent = t.donates;
            document.getElementById('search-ads').placeholder = t.searchAds;
            document.getElementById('search-donates').placeholder = t.searchDonates;
            document.getElementById('search-btn').textContent = t.find;
            document.getElementById('search-donates-btn').textContent = t.find;
            document.getElementById('back-to-ads').textContent = t.back;
            document.getElementById('contact-user').textContent = t.contact;
            document.getElementById('admin-title').textContent = t.adminPanel;
        }

        function initCarousel() {
            let currentSlide = 0;
            const slides = document.querySelectorAll('.carousel-slide');
            const dots = document.querySelectorAll('.carousel-dot');
            const prevBtn = document.querySelector('.carousel-arrow.prev');
            const nextBtn = document.querySelector('.carousel-arrow.next');
            
            function showSlide(n) {
                slides.forEach(slide => slide.classList.remove('active'));
                dots.forEach(dot => dot.classList.remove('active'));
                
                currentSlide = n;
                slides[currentSlide].classList.add('active');
                dots[currentSlide].classList.add('active');
            }
            
            function nextSlide() {
                let next = (currentSlide + 1) % slides.length;
                showSlide(next);
            }
            
            function prevSlide() {
                let prev = (currentSlide - 1 + slides.length) % slides.length;
                showSlide(prev);
            }
            
            // Автопереключение
            let autoSlide = setInterval(nextSlide, 4000);
            
            // Обработчики для стрелок
            nextBtn.addEventListener('click', () => {
                clearInterval(autoSlide);
                nextSlide();
                autoSlide = setInterval(nextSlide, 4000);
            });
            
            prevBtn.addEventListener('click', () => {
                clearInterval(autoSlide);
                prevSlide();
                autoSlide = setInterval(nextSlide, 4000);
            });
            
            // Обработчики для точек
            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    clearInterval(autoSlide);
                    showSlide(index);
                    autoSlide = setInterval(nextSlide, 4000);
                });
            });
        }

        function initApp() {
            const savedUser = localStorage.getItem('currentUser');
            const savedAds = localStorage.getItem('ads');
            const savedDonates = localStorage.getItem('donates');
            const savedAdmin = localStorage.getItem('isAdmin');
            const savedPage = localStorage.getItem('currentPage');
            const savedLang = localStorage.getItem('language');
            
            if (savedLang) {
                currentLanguage = savedLang;
            }
            
            if (savedUser) {
                appState.currentUser = JSON.parse(savedUser);
                appState.isLoggedIn = true;
            }
            
            if (savedAdmin === 'true') {
                appState.isAdmin = true;
            }
            
            if (savedAds) {
                appState.ads = JSON.parse(savedAds);
            }
            
            if (savedDonates) {
                appState.donates = JSON.parse(savedDonates);
            }
            
            if (savedPage) {
                showPage(savedPage);
            } else {
                showPage('home');
            }
            
            updateTexts();
            updateUI();
        }

       function setupEventListeners() {
            document.getElementById('nav-home').addEventListener('click', () => showPage('home'));
            document.getElementById('nav-ads').addEventListener('click', () => showPage('ads'));
            document.getElementById('nav-donates').addEventListener('click', () => showPage('donates'));
            document.getElementById('nav-admin').addEventListener('click', () => showPage('admin'));
            
            document.getElementById('burger-menu').addEventListener('click', function() {
                document.getElementById('nav-links').classList.toggle('active');
            });
            
            document.getElementById('btn-login').addEventListener('click', () => showPage('auth'));
            document.getElementById('btn-logout').addEventListener('click', logout);
            document.getElementById('btn-admin-logout').addEventListener('click', adminLogout);
            
            document.getElementById('auth-form').addEventListener('submit', handleAuth);
            document.getElementById('toggle-auth').addEventListener('click', toggleAuthMode);
            
            document.getElementById('admin-post-ad-form').addEventListener('submit', handleAdminPostAd);
            
            document.getElementById('search-btn').addEventListener('click', searchAds);
            document.getElementById('search-ads').addEventListener('keyup', function(e) {
                if (e.key === 'Enter') searchAds();
            });
            
            document.getElementById('search-donates-btn').addEventListener('click', searchDonates);
            document.getElementById('search-donates').addEventListener('keyup', function(e) {
                if (e.key === 'Enter') searchDonates();
            });
            
            document.getElementById('hero-get-started').addEventListener('click', () => {
                showPage('ads');
            });
            
            document.getElementById('back-to-ads').addEventListener('click', () => {
                if (appState.currentAd && appState.currentAd.category === 'donates') {
                    showPage('donates');
                } else {
                    showPage('ads');
                }
            });
            
            document.querySelectorAll('.admin-tab').forEach(tab => {
                tab.addEventListener('click', function() {
                    document.querySelectorAll('.admin-tab').forEach(t => {
                        t.classList.remove('active');
                    });
                    this.classList.add('active');
                    
                    document.querySelectorAll('.admin-tab-content').forEach(content => {
                        content.classList.add('hidden');
                    });
                    
                    const tabId = this.getAttribute('data-tab');
                    document.getElementById(`admin-${tabId}`).classList.remove('hidden');
                    
                    if (tabId === 'manage-ads') {
                        loadAdminAds();
                    }
                });
            });
            
            document.querySelector('.close-modal').addEventListener('click', closeEditModal);
            document.getElementById('edit-ad-form').addEventListener('submit', handleEditAd);
            
            document.getElementById('edit-modal').addEventListener('click', function(e) {
                if (e.target === this) {
                    closeEditModal();
                }
            });
        }

        function showPage(page) {
            document.getElementById('nav-links').classList.remove('active');
            localStorage.setItem('currentPage', page);
            
            document.querySelectorAll('section').forEach(section => {
                section.classList.add('hidden');
            });
            
            document.getElementById(`${page}-page`).classList.remove('hidden');
            appState.currentPage = page;
            
            switch(page) {
                case 'ads':
                    loadAds();
                    break;
                case 'donates':
                    loadDonates();
                    break;
                case 'admin':
                    if (!appState.isAdmin) showPage('home');
                    break;
            }
        }

        function updateUI() {
            const t = translations[currentLanguage];
            const userGreeting = document.getElementById('user-greeting');
            const btnLogin = document.getElementById('btn-login');
            const btnLogout = document.getElementById('btn-logout');
            const btnAdminLogout = document.getElementById('btn-admin-logout');
            const adminOnlyElements = document.querySelectorAll('.admin-only');
            
            if (appState.isAdmin) {
                userGreeting.textContent = t.admin;
                btnLogin.classList.add('hidden');
                btnLogout.classList.add('hidden');
                btnAdminLogout.classList.remove('hidden');
                adminOnlyElements.forEach(el => el.classList.remove('hidden'));
            } else if (appState.isLoggedIn) {
                userGreeting.textContent = `${t.greeting}: ${appState.currentUser.username}`;
                btnLogin.classList.add('hidden');
                btnLogout.classList.remove('hidden');
                btnAdminLogout.classList.add('hidden');
                adminOnlyElements.forEach(el => el.classList.add('hidden'));
            } else {
                userGreeting.textContent = `${t.greeting}: ${t.guest}`;
                btnLogin.classList.remove('hidden');
                btnLogout.classList.add('hidden');
                btnAdminLogout.classList.add('hidden');
                adminOnlyElements.forEach(el => el.classList.add('hidden'));
            }
        }

        function loadAds() {
            const t = translations[currentLanguage];
            const container = document.getElementById('ads-container');
            container.innerHTML = '';
            
            if (appState.ads.length === 0) {
                container.innerHTML = `<p>${t.noAds}</p>`;
                return;
            }
            
            appState.ads.forEach(ad => {
                const adElement = document.createElement('div');
                adElement.className = 'ad-card';
                adElement.innerHTML = `
                    <div class="ad-image" style="background-image: url('${ad.image}')"></div>
                    <div class="ad-content">
                        <span class="ad-category">${ad.category === 'ads' ? t.categoryAd : t.categoryDonate}</span>
                        <h3 class="ad-title">${ad.title}</h3>
                        <div class="ad-price">${ad.price}UZS</div>
                        <p class="ad-description">${ad.description.substring(0, 100)}...</p>
                        <div class="ad-user">${ad.user}</div>
                         <a href="https://t.me/${ad.user.replace('@', '')}" target="_blank" class="btn btn-primary">${t.contact}</a>
                    </div>
                `;
                container.appendChild(adElement);
            });
            
            document.querySelectorAll('.view-ad').forEach(button => {
                button.addEventListener('click', function() {
                    const adId = parseInt(this.getAttribute('data-id'));
                    showAdDetails(adId);
                });
            });
        }

        function loadDonates() {
            const t = translations[currentLanguage];
            const container = document.getElementById('donates-container');
            container.innerHTML = '';
            
            if (appState.donates.length === 0) {
                container.innerHTML = `<p>${t.noDonates}</p>`;
                return;
            }
            
            appState.donates.forEach(ad => {
                const adElement = document.createElement('div');
                adElement.className = 'ad-card';
                adElement.innerHTML = `
                    <div class="ad-image" style="background-image: url('${ad.image}')"></div>
                    <div class="ad-content">
                        <span class="ad-category">${t.categoryDonate}</span>
                        <h3 class="ad-title">${ad.title}</h3>
                        <div class="ad-price">${ad.price}UZS</div>
                        <p class="ad-description">${ad.description.substring(0, 100)}...</p>
                        <div class="ad-user">${ad.user}</div>
                         <a href="https://t.me/${ad.user.replace('@', '')}" target="_blank" class="btn btn-primary">${t.contact}</a>
                    </div>
                `;
                container.appendChild(adElement);
            });
            
            document.querySelectorAll('.view-ad').forEach(button => {
                button.addEventListener('click', function() {
                    const adId = parseInt(this.getAttribute('data-id'));
                    showAdDetails(adId);
                });
            });
        }

        function loadAdminAds() {
            if (!appState.isAdmin) return;
            const t = translations[currentLanguage];
            const container = document.getElementById('admin-ads-container');
            container.innerHTML = '';
            
            const allItems = [...appState.ads, ...appState.donates];
            
            if (allItems.length === 0) {
                container.innerHTML = `<p>${t.noAds}</p>`;
                return;
            }
            
            allItems.forEach(ad => {
                const adElement = document.createElement('div');
                adElement.className = 'ad-card';
                adElement.innerHTML = `
                    <div class="ad-image" style="background-image: url('${ad.image}')"></div>
                    <div class="ad-content">
                        <span class="ad-category">${ad.category === 'ads' ? t.categoryAd : t.categoryDonate}</span>
                        <h3 class="ad-title">${ad.title}</h3>
                        <div class="ad-price">$${ad.price}</div>
                        <p class="ad-description">${ad.description.substring(0, 100)}...</p>
                        <div class="ad-user">${ad.user}</div>
                        <div>
                            <button class="btn btn-primary edit-admin-ad" data-id="${ad.id}">${t.edit}</button>
                            <button class="btn btn-danger delete-admin-ad" data-id="${ad.id}">${t.delete}</button>
                        </div>
                    </div>
                `;
                container.appendChild(adElement);
            });
            
            document.querySelectorAll('.edit-admin-ad').forEach(button => {
                button.addEventListener('click', function() {
                    const adId = parseInt(this.getAttribute('data-id'));
                    openEditModal(adId);
                });
            });
            
            document.querySelectorAll('.delete-admin-ad').forEach(button => {
                button.addEventListener('click', function() {
                    const adId = parseInt(this.getAttribute('data-id'));
                    deleteAdminAd(adId);
                });
            });
        }

        function showAdDetails(adId) {
            let ad = appState.ads.find(a => a.id === adId);
            if (!ad) ad = appState.donates.find(a => a.id === adId);
            if (!ad) return;
            
            appState.currentAd = ad;
            const t = translations[currentLanguage];
            
            document.getElementById('detail-title').textContent = ad.title;
            document.getElementById('detail-price').textContent = `$${ad.price}`;
            document.getElementById('detail-description').textContent = ad.description;
            document.getElementById('detail-user').textContent = ad.user;
            document.getElementById('detail-category').textContent = ad.category === 'ads' ? t.categoryAd : t.categoryDonate;
            document.getElementById('detail-image').style.backgroundImage = `url('${ad.image}')`;
            
            const telegramLink = document.getElementById('contact-user');
            telegramLink.href = `https://t.me/${ad.user.replace('@', '')}`;
            telegramLink.target = '_blank';
            
            showPage('ad-details');
        }

        function searchAds() {
            const t = translations[currentLanguage];
            const query = document.getElementById('search-ads').value.toLowerCase();
            const filteredAds = appState.ads.filter(ad => 
                ad.title.toLowerCase().includes(query) || 
                ad.description.toLowerCase().includes(query) ||
                ad.user.toLowerCase().includes(query)
            );
            
            const container = document.getElementById('ads-container');
            container.innerHTML = '';
            
            if (filteredAds.length === 0) {
                container.innerHTML = `<p>${t.nothingFound}</p>`;
                return;
            }
            
            filteredAds.forEach(ad => {
                const adElement = document.createElement('div');
                adElement.className = 'ad-card';
                adElement.innerHTML = `
                    <div class="ad-image" style="background-image: url('${ad.image}')"></div>
                    <div class="ad-content">
                        <span class="ad-category">${t.categoryAd}</span>
                        <h3 class="ad-title">${ad.title}</h3>
                        <div class="ad-price">$${ad.price}</div>
                        <p class="ad-description">${ad.description.substring(0, 100)}...</p>
                        <div class="ad-user">${ad.user}</div>
                        <button class="btn btn-primary view-ad" data-id="${ad.id}">${t.details}</button>
                    </div>
                `;
                container.appendChild(adElement);
            });
            
            document.querySelectorAll('.view-ad').forEach(button => {
                button.addEventListener('click', function() {
                    const adId = parseInt(this.getAttribute('data-id'));
                    showAdDetails(adId);
                });
            });
        }

        function searchDonates() {
            const t = translations[currentLanguage];
            const query = document.getElementById('search-donates').value.toLowerCase();
            const filteredDonates = appState.donates.filter(ad => 
                ad.title.toLowerCase().includes(query) || 
                ad.description.toLowerCase().includes(query) ||
                ad.user.toLowerCase().includes(query)
            );
            
            const container = document.getElementById('donates-container');
            container.innerHTML = '';
            
            if (filteredDonates.length === 0) {
                container.innerHTML = `<p>${t.nothingFound}</p>`;
                return;
            }
            
            filteredDonates.forEach(ad => {
                const adElement = document.createElement('div');
                adElement.className = 'ad-card';
                adElement.innerHTML = `
                    <div class="ad-image" style="background-image: url('${ad.image}')"></div>
                    <div class="ad-content">
                        <span class="ad-category">${t.categoryDonate}</span>
                        <h3 class="ad-title">${ad.title}</h3>
                        <div class="ad-price">$${ad.price}</div>
                        <p class="ad-description">${ad.description.substring(0, 100)}...</p>
                        <div class="ad-user">${ad.user}</div>
                        <button class="btn btn-primary view-ad" data-id="${ad.id}">${t.details}</button>
                    </div>
                `;
                container.appendChild(adElement);
            });
            
            document.querySelectorAll('.view-ad').forEach(button => {
                button.addEventListener('click', function() {
                    const adId = parseInt(this.getAttribute('data-id'));
                    showAdDetails(adId);
                });
            });
        }

        function handleAdminPostAd(e) {
            e.preventDefault();
            
            if (!appState.isAdmin) {
                alert('У вас нет прав для выполнения этого действия.');
                return;
            }
            
            const category = document.getElementById('admin-ad-category').value;
            const title = document.getElementById('admin-ad-title').value;
            const description = document.getElementById('admin-ad-description').value;
            const price = parseInt(document.getElementById('admin-ad-price').value);
            const user = document.getElementById('admin-ad-user').value;
            const imageFile = document.getElementById('admin-ad-image').files[0];
            
            let imageUrl = 'https://images.unsplash.com/photo-1556655848-f3a7049761e6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';
            
            if (imageFile) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    imageUrl = e.target.result;
                    saveNewAd(category, title, description, price, user, imageUrl);
                };
                reader.readAsDataURL(imageFile);
            } else {
                saveNewAd(category, title, description, price, user, imageUrl);
            }
        }

        function saveNewAd(category, title, description, price, user, imageUrl) {
            const newAd = {
                id: Date.now(),
                category,
                title,
                description,
                price,
                user,
                image: imageUrl
            };
            
            if (category === 'ads') {
                appState.ads.push(newAd);
                localStorage.setItem('ads', JSON.stringify(appState.ads));
            } else {
                appState.donates.push(newAd);
                localStorage.setItem('donates', JSON.stringify(appState.donates));
            }
            
            alert('Объявление успешно размещено!');
            document.getElementById('admin-post-ad-form').reset();
        }

        function openEditModal(adId) {
            let ad = appState.ads.find(a => a.id === adId);
            let category = 'ads';
            
            if (!ad) {
                ad = appState.donates.find(a => a.id === adId);
                category = 'donates';
            }
            if (!ad) return;
            
            document.getElementById('edit-ad-id').value = ad.id;
            document.getElementById('edit-ad-category').value = category;
            document.getElementById('edit-ad-title').value = ad.title;
            document.getElementById('edit-ad-description').value = ad.description;
            document.getElementById('edit-ad-price').value = ad.price;
            document.getElementById('edit-ad-user').value = ad.user;
            
            document.getElementById('edit-modal').style.display = 'flex';
        }

        function closeEditModal() {
            document.getElementById('edit-modal').style.display = 'none';
            document.getElementById('edit-ad-form').reset();
        }

        function handleEditAd(e) {
            e.preventDefault();
            
            const adId = parseInt(document.getElementById('edit-ad-id').value);
            const category = document.getElementById('edit-ad-category').value;
            const title = document.getElementById('edit-ad-title').value;
            const description = document.getElementById('edit-ad-description').value;
            const price = parseInt(document.getElementById('edit-ad-price').value);
            const user = document.getElementById('edit-ad-user').value;
            const imageFile = document.getElementById('edit-ad-image').files[0];
            
            let adIndex = appState.ads.findIndex(a => a.id === adId);
            let currentCategory = 'ads';
            
            if (adIndex === -1) {
                adIndex = appState.donates.findIndex(a => a.id === adId);
                currentCategory = 'donates';
            }
            if (adIndex === -1) return;
            
            if (currentCategory !== category) {
                if (currentCategory === 'ads') {
                    const ad = appState.ads.splice(adIndex, 1)[0];
                    appState.donates.push(ad);
                } else {
                    const ad = appState.donates.splice(adIndex, 1)[0];
                    appState.ads.push(ad);
                }
                
                if (category === 'ads') {
                    adIndex = appState.ads.length - 1;
                } else {
                    adIndex = appState.donates.length - 1;
                }
            }
            
            const targetArray = category === 'ads' ? appState.ads : appState.donates;
            targetArray[adIndex].category = category;
            targetArray[adIndex].title = title;
            targetArray[adIndex].description = description;
            targetArray[adIndex].price = price;
            targetArray[adIndex].user = user;
            
            if (imageFile) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    targetArray[adIndex].image = e.target.result;
                    saveChanges();
                };
                reader.readAsDataURL(imageFile);
            } else {
                saveChanges();
            }
            
            function saveChanges() {
                localStorage.setItem('ads', JSON.stringify(appState.ads));
                localStorage.setItem('donates', JSON.stringify(appState.donates));
                
                alert('Объявление успешно обновлено!');
                closeEditModal();
                loadAdminAds();
            }
        }

        function deleteAdminAd(adId) {
            if (confirm('Вы уверены, что хотите удалить это объявление?')) {
                appState.ads = appState.ads.filter(ad => ad.id !== adId);
                appState.donates = appState.donates.filter(ad => ad.id !== adId);
                
                localStorage.setItem('ads', JSON.stringify(appState.ads));
                localStorage.setItem('donates', JSON.stringify(appState.donates));
                
                loadAdminAds();
            }
        }

        function handleAuth(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const isRegistration = document.getElementById('auth-title').textContent === 'Регистрация';
            
            if (username === 'AZSDXSAD4' && password === 'AZSGDJ78$') {
                appState.isAdmin = true;
                localStorage.setItem('isAdmin', 'true');
                
                alert('Вход в админ-панель выполнен успешно!');
                showPage('admin');
                updateUI();
                return;
            }
            
            if (isRegistration) {
                if (!username) {
                    alert('Пожалуйста, введите имя пользователя.');
                    return;
                }
                
                const newUser = {
                    id: Date.now(),
                    username,
                    password
                };
                
                appState.currentUser = newUser;
                appState.isLoggedIn = true;
                localStorage.setItem('currentUser', JSON.stringify(newUser));
                
                alert('Регистрация прошла успешно!');
                showPage('home');
            } else {
                if (username === 'BUYER' && password === 'KOD') {
                    appState.currentUser = {
                        id: 1,
                        username: username || 'Пользователь'
                    };
                    appState.isLoggedIn = true;
                    localStorage.setItem('currentUser', JSON.stringify(appState.currentUser));
                    
                    alert('Вход выполнен успешно!');
                    showPage('home');
                } else {
                    alert('Неверный логин или пароль. Для демо используйте BUYER / KOD');
                }
            }
            
            updateUI();
        }

        function toggleAuthMode() {
            const t = translations[currentLanguage];
            const authTitle = document.getElementById('auth-title');
            const authSubmit = document.getElementById('auth-submit');
            const toggleAuth = document.getElementById('toggle-auth');
            
            if (authTitle.textContent === 'Вход / Регистрация' || authTitle.textContent === 'Вход') {
                authTitle.textContent = t.register;
                authSubmit.textContent = t.register;
                toggleAuth.textContent = t.haveAccount;
            } else {
                authTitle.textContent = t.loginRegister;
                authSubmit.textContent = t.enter;
                toggleAuth.textContent = t.noAccount;
            }
        }

        function logout() {
            appState.currentUser = null;
            appState.isLoggedIn = false;
            localStorage.removeItem('currentUser');
            updateUI();
            showPage('home');
        }

        function adminLogout() {
            appState.isAdmin = false;
            localStorage.removeItem('isAdmin');
            updateUI();
            showPage('home');
        }
