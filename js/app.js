(function(){
  const $ = (s, p=document) => p.querySelector(s);
  const $$ = (s, p=document) => [...p.querySelectorAll(s)];

  const routes = ['home','about','portfolio','groups','shop','contacts'];
  const showRoute = (name) => {
    $$('.page').forEach(el=>el.classList.remove('active'));
    const page = $(`.page[data-route="${name}"]`) || $('.page[data-route="home"]');
    page.classList.add('active');
    window.scrollTo({top:0, behavior:'smooth'});
  };
  const handleHash = () => {
    const route = location.hash.replace('#/','') || 'home';
    showRoute(routes.includes(route)?route:'home');
  };
  addEventListener('hashchange', handleHash);
  handleHash();

  const drawer = $('#drawer');
  $('.menu-toggle').addEventListener('click', ()=> drawer.classList.add('open'));
  $('.close-drawer').addEventListener('click', ()=> drawer.classList.remove('open'));
  drawer.addEventListener('click', (e)=>{ if(e.target.matches('a[data-link]')) drawer.classList.remove('open'); });

  const elev = $('[data-elevate]');
  addEventListener('scroll', ()=> elev.classList.toggle('scrolled', scrollY>4));

  const io = new IntersectionObserver((entries)=>{
    entries.forEach(en=>{ if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); } });
  }, {threshold:.16});
  $$('[data-animate]').forEach(el=> io.observe(el));

  /* ---------- i18n ---------- */
  const i18n = {
    ru: {
      "nav.home":"Главная","nav.about":"О нас","nav.portfolio":"Портфолио","nav.groups":"Группы","nav.shop":"Магазин","nav.contacts":"Контакты",
      "home.eyebrow":"Инновационная социальная сеть",
      "home.title":"Поделись эмоциями с помощью <span class='accent'>стикеров</span>.",
      "home.text":"MotiPix — это платформа, где визуальное общение становится языком. Создавайте, покупайте и обменивайте стикеры.",
      "home.ctaShop":"<span class='plus'>+</span> Перейти в магазин",
      "home.ctaMore":"<span class='plus'>+</span> Узнать больше",
      "home.f1.title":"<span class='plus'>+</span> Персонализированные чаты","home.f1.text":"Подбираем стикеры под контекст разговора в реальном времени.",
      "home.f2.title":"<span class='plus'>+</span> Магазин стикеров","home.f2.text":"Каталог от создателей, подборки и рекомендации.",
      "home.f3.title":"<span class='plus'>+</span> Рынок стоков","home.f3.text":"Обмен стикерами как активами внутри сообщества.",
      "about.title":"О платформе","about.text":"MotiPix — социальная сеть, сфокусированная на визуальном общении с использованием графических стикеров. Платформа генерирует стикеры на основе контекста диалога, предлагает магазин и рынок, ориентирована на пользователей до 35 лет.","about.cta":"<span class='plus'>+</span> Связаться с нами",
      "about.t1.title":"Персонализация","about.t1.text":"Умные рекомендации.","about.t2.title":"Магазин","about.t2.text":"Подборки и скидки.","about.t3.title":"Рынок","about.t3.text":"Обмен наклейками как валютой.","about.t4.title":"Создатели","about.t4.text":"Монетизация дизайнов.",
      "portfolio.title":"Моё портфолио","portfolio.text":"Добро пожаловать! Ниже — выборка работ.",
      "groups.title":"Лента новостей групп","groups.signin":"Чтобы общаться с участниками, войдите в аккаунт.","groups.inGroup":"написал(а) • в группе «Группа сайта MotiPix»","groups.join":"<span class='plus'>+</span> Присоединиться","groups.postText":"Добро пожаловать в группу! Общайтесь с участниками, делитесь фотографиями и обновлениями.","groups.views":"1 просмотр","groups.recTitle":"Рекомендованные группы","groups.recName":"Группа сайта MotiPix","groups.recUsers":"1 пользователь","groups.commentPh":"Ваш комментарий…","groups.send":"<span class='plus'>+</span> Отправить",
      "shop.title":"Все товары","shop.text":"Здесь можно рассказать о категориях, скидках и подборках.","shop.searchBy":"Искать по","shop.category":"Категория","shop.all":"Все товары","shop.stickers":"Стикеры","shop.market":"Маркетплейс","shop.creators":"Создатели","shop.price":"Цена","shop.to":"До:","shop.sort":"Сортировка","shop.recommended":"Рекомендуемые","shop.asc":"Цена: по возрастанию","shop.desc":"Цена: по убыванию",
      "contacts.title":"Связаться с нами","contacts.text":"Оставьте email и сообщение — мы ответим.","contacts.name":"Имя*","contacts.last":"Фамилия","contacts.email":"Email*","contacts.msg":"Сообщение","contacts.send":"<span class='plus'>+</span> Отправить",
      "policy.privacy":"Политика конфиденциальности","policy.access":"Заявление о доступности","policy.terms":"Правила и условия","policy.refund":"Политика возврата","policy.shipping":"Политика доставки",
      "auth.title":"Вход","auth.desc":"Введите никнейм — он сохранится в localStorage/cookie.","auth.placeholder":"Ваш ник","auth.cancel":"Отмена","auth.login":"Войти",
      "common.search":"Поиск",
      "_toast.addedFav":"Добавлено в избранное",
      "_toast.addedCart":"Добавлено в корзину: ",
      "_toast.cartEmpty":"Корзина пуста",
      "_toast.welcome":"Добро пожаловать, "
    },
    en: {
      "nav.home":"Home","nav.about":"About","nav.portfolio":"Portfolio","nav.groups":"Groups","nav.shop":"Shop","nav.contacts":"Contacts",
      "home.eyebrow":"Innovative social network",
      "home.title":"Share feelings with <span class='accent'>stickers</span>.",
      "home.text":"MotiPix is a platform where visuals are the language. Create, buy and trade stickers.",
      "home.ctaShop":"<span class='plus'>+</span> Go to shop",
      "home.ctaMore":"<span class='plus'>+</span> Learn more",
      "home.f1.title":"<span class='plus'>+</span> Personalized chats","home.f1.text":"Context-aware sticker suggestions in real time.",
      "home.f2.title":"<span class='plus'>+</span> Sticker store","home.f2.text":"Creator catalog, collections and recommendations.",
      "home.f3.title":"<span class='plus'>+</span> Sticker market","home.f3.text":"Trade stickers as community assets.",
      "about.title":"About the platform","about.text":"MotiPix is a social network focused on visual communication using graphic stickers. It generates stickers from dialog context, offers a store and a market, and is geared towards users under 35.","about.cta":"<span class='plus'>+</span> Contact us",
      "about.t1.title":"Personalization","about.t1.text":"Smart recommendations.","about.t2.title":"Store","about.t2.text":"Collections and discounts.","about.t3.title":"Market","about.t3.text":"Exchange stickers like currency.","about.t4.title":"Creators","about.t4.text":"Monetize designs.",
      "portfolio.title":"My portfolio","portfolio.text":"Welcome! Below is a selection of works.",
      "groups.title":"Group news feed","groups.signin":"Sign in to interact with members.","groups.inGroup":"posted • in “MotiPix site group”","groups.join":"<span class='plus'>+</span> Join","groups.postText":"Welcome to the group! Chat with members and share updates.","groups.views":"1 view","groups.recTitle":"Recommended groups","groups.recName":"MotiPix site group","groups.recUsers":"1 user","groups.commentPh":"Your comment…","groups.send":"<span class='plus'>+</span> Send",
      "shop.title":"All products","shop.text":"Use filters to explore categories, deals and picks.","shop.searchBy":"Search by","shop.category":"Category","shop.all":"All","shop.stickers":"Stickers","shop.market":"Marketplace","shop.creators":"Creators","shop.price":"Price","shop.to":"Up to:","shop.sort":"Sort by","shop.recommended":"Recommended","shop.asc":"Price: low to high","shop.desc":"Price: high to low",
      "contacts.title":"Contact us","contacts.text":"Leave your email and message — we will reply.","contacts.name":"First name*","contacts.last":"Last name","contacts.email":"Email*","contacts.msg":"Message","contacts.send":"<span class='plus'>+</span> Send",
      "policy.privacy":"Privacy policy","policy.access":"Accessibility statement","policy.terms":"Terms & conditions","policy.refund":"Refund policy","policy.shipping":"Shipping policy",
      "auth.title":"Sign in","auth.desc":"Enter a nickname — it will be saved in localStorage/cookie.","auth.placeholder":"Your nickname","auth.cancel":"Cancel","auth.login":"Sign in",
      "common.search":"Search",
      "_toast.addedFav":"Added to favorites",
      "_toast.addedCart":"Added to cart: ",
      "_toast.cartEmpty":"Cart is empty",
      "_toast.welcome":"Welcome, "
    }
  };

  const langSel = $('#langSwitcher');
  const getLang = () => localStorage.getItem('mp_lang') || 'ru';
  const setLang = (l) => { localStorage.setItem('mp_lang', l); applyLang(l); document.documentElement.lang = l; };
  langSel.value = getLang();
  langSel.addEventListener('change', (e)=> setLang(e.target.value));

  function applyLang(l){
    const map = i18n[l] || i18n.ru;
    $$('[data-i18n]').forEach(el=>{
      const key = el.getAttribute('data-i18n');
      if(map[key] != null){ el.innerHTML = map[key]; }
    });
    $$('[data-i18n-placeholder]').forEach(el=>{
      const key = el.getAttribute('data-i18n-placeholder');
      if(map[key] != null){ el.setAttribute('placeholder', map[key]); }
    });
    // Update login button text depending on auth later in updateAuthUI
  }
  applyLang(getLang());

  /* ---------- Auth ---------- */
  const loginModal = $('#loginModal');
  const loginBtn = $('#loginBtn');
  const doLoginBtn = $('#doLogin');
  const loginNameInput = $('#loginName');

  const getUser = () => localStorage.getItem('mp_user');
  const setUser = (name) => { localStorage.setItem('mp_user', name); document.cookie = `mp_user=${encodeURIComponent(name)}; path=/; max-age=${60*60*24*30}`; };
  const clearUser = () => { localStorage.removeItem('mp_user'); document.cookie = 'mp_user=; Max-Age=0; path=/'; };

  function t(key){ const l=getLang(); return (i18n[l] && i18n[l][key]) || (i18n.ru && i18n.ru[key]) || key; }

  const updateAuthUI = () => {
    const user = getUser();
    if(user){
      const label = (getLang()==='en') ? (user + ' · Sign out') : (user + ' · Выход');
      loginBtn.textContent = label;
      $('#authNotice')?.setAttribute('hidden','');
    }else{
      loginBtn.textContent = t('auth.login').replace(/<[^>]*>/g,'');
      $('#authNotice')?.removeAttribute('hidden');
    }
  };

  loginBtn.addEventListener('click', ()=>{
    const user = getUser();
    if(user){ clearUser(); toast((getLang()==='en'?'You signed out':'Вы вышли из аккаунта')); updateAuthUI(); }
    else{ loginModal.showModal(); setTimeout(()=> loginNameInput.focus(), 50); }
  });
  $('#openLoginFromNotice')?.addEventListener('click', ()=> loginModal.showModal());

  doLoginBtn?.addEventListener('click', (e)=>{
    e.preventDefault();
    const name = loginNameInput.value.trim();
    if(!name) return;
    setUser(name);
    loginModal.close();
    toast(t('_toast.welcome') + name + '!');
    updateAuthUI();
  });

  updateAuthUI();

  /* ---------- Groups ---------- */
  $$('.post').forEach(setupPost);
  function setupPost(post){
    const id = post.dataset.postId;
    const likeBtn = post.querySelector('.like');
    const likes = post.querySelector('.likes');
    const commentsBox = post.querySelector('.comments');
    const toggleBtn = post.querySelector('.comment-toggle');
    const form = post.querySelector('.comment-form');
    const list = post.querySelector('.comments-list');

    likes.textContent = +localStorage.getItem('likes_'+id) || 0;
    const saved = JSON.parse(localStorage.getItem('comments_'+id) || '[]');
    saved.forEach(addCommentEl);

    likeBtn.addEventListener('click', ()=>{
      if(!getUser()){ loginModal.showModal(); return; }
      const val = (+likes.textContent||0)+1;
      likes.textContent = val;
      localStorage.setItem('likes_'+id, String(val));
      likeBtn.animate([{transform:'scale(1)'},{transform:'scale(1.3)'},{transform:'scale(1)'}],{duration:300});
    });

    toggleBtn.addEventListener('click', ()=>{
      const open = commentsBox.hasAttribute('hidden');
      commentsBox.toggleAttribute('hidden');
      if(open){ commentsBox.animate([{opacity:0, transform:'translateY(6px)'},{opacity:1, transform:'none'}],{duration:260}); }
    });

    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      if(!getUser()){ loginModal.showModal(); return; }
      const text = new FormData(form).get('text').toString().trim();
      if(!text) return;
      const comment = { by:getUser(), text, ts:Date.now() };
      addCommentEl(comment);
      const arr = JSON.parse(localStorage.getItem('comments_'+id) || '[]');
      arr.push(comment); localStorage.setItem('comments_'+id, JSON.stringify(arr));
      form.reset();
    });

    function addCommentEl({by,text,ts}){
      const li = document.createElement('li');
      li.className = 'comment';
      li.innerHTML = `<div>${escapeHtml(text)}</div><small>от ${escapeHtml(by)} • ${timeAgo(ts)}</small>`;
      list.appendChild(li);
    }
  }

  /* ---------- Shop ---------- */
  const products = [
    {id:1, title:'Стикер Дизайнера 3', price:90,  cat:'stickers', img:'assets/portfolio-1.jpg'},
    {id:2, title:'Стикер Дизайнера 1', price:70,  cat:'stickers', img:'assets/portfolio-2.jpg'},
    {id:3, title:'Эмоциональный Стикер Пак', price:50,  cat:'stickers', img:'assets/portfolio-3.jpg'},
    {id:4, title:'Стикер Смешного Лица', price:40,  cat:'stickers', img:'assets/portfolio-4.jpg'},
    {id:5, title:'Стикер Сердечко', price:60,  cat:'stickers', img:'assets/portfolio-5.jpg'},
    {id:6, title:'Стикер на Заказ', price:120, cat:'creators', img:'assets/about-2.jpg'},
    {id:7, title:'Редкий Стикер', price:200, cat:'marketing', img:'assets/about-1.jpg'},
    {id:8, title:'Тематический Стикер Пак', price:150, cat:'stickers', img:'assets/about-3.jpg'},
    {id:9, title:'Розовый Стикер', price:80, cat:'stickers', img:'assets/portfolio-6.jpg'}
  ];

  const catalog = $('#catalog');
  const filterCategory = $('#filterCategory');
  const priceRange = $('#priceRange');
  const priceLabel = $('#priceLabel');
  const sortBy = $('#sortBy');

  const cart = {
    get(){ return JSON.parse(localStorage.getItem('mp_cart') || '[]'); },
    set(items){ localStorage.setItem('mp_cart', JSON.stringify(items)); updateCartCount(); }
  };
  function updateCartCount(){
    const count = cart.get().reduce((a,i)=>a+i.qty,0);
    $('#cartCount').textContent = count;
  }
  updateCartCount();

  $('#cartBtn')?.addEventListener('click', ()=>{
    const items = cart.get();
    if(!items.length) { toast(t('_toast.cartEmpty')); return; }
    const list = items.map(i => `${i.title} × ${i.qty} — €${(i.price*i.qty).toFixed(2)}`).join('\n');
    alert((getLang()==='en'?'Your cart:\n\n':'Ваша корзина:\n\n') + list);
  });

  function addToCart(prod){
    const items = cart.get();
    const idx = items.findIndex(i=>i.id===prod.id);
    if(idx>=0) items[idx].qty += 1; else items.push({...prod, qty:1});
    cart.set(items);
    toast(t('_toast.addedCart') + prod.title);
  }

  function renderCatalog(){
    const cat = filterCategory?.value || 'all';
    const maxPrice = +(priceRange?.value || 200);
    let out = products.filter(p => (cat==='all'||p.cat===cat) && p.price<=maxPrice);
    if(sortBy?.value==='price-asc') out.sort((a,b)=>a.price-b.price);
    else if(sortBy?.value==='price-desc') out.sort((a,b)=>b.price-a.price);
    if(catalog) catalog.innerHTML = out.map(p=>`<article class="card product" data-id="${p.id}">
      <img class="thumb" src="${p.img}" alt="${escapeHtml(p.title)}"/>
      <div class="row between">
        <b>${escapeHtml(p.title)}</b>
        <span class="price">€${p.price.toFixed(2)}</span>
      </div>
      <div class="row wrap">
        <button class="btn add"><span class="plus">+</span> ${getLang()==='en'?'Add to cart':'В корзину'}</button>
        <button class="btn-ghost fav"><span class="plus">+</span> ${getLang()==='en'?'Favorite':'В избранное'}</button>
      </div>
    </article>`).join('');

    $$('.product', catalog).forEach(card=>{
      const id = Number(card.dataset.id);
      const prod = products.find(p=>p.id===id);
      card.querySelector('.add').addEventListener('click', ()=> addToCart(prod));
      card.querySelector('.fav').addEventListener('click', ()=> toast(t('_toast.addedFav')));
    });
  }
  if(catalog){
    renderCatalog();
    filterCategory?.addEventListener('change', renderCatalog);
    sortBy?.addEventListener('change', renderCatalog);
    priceRange?.addEventListener('input', ()=>{ priceLabel.textContent = priceRange.value; renderCatalog(); });
  }

  $('#contactForm')?.addEventListener('submit', (e)=>{
    e.preventDefault();
    const fd = new FormData(e.target);
    const data = Object.fromEntries(fd.entries());
    console.log('CONTACT FORM', data);
    toast(getLang()==='en' ? ('Thanks! We will answer: '+data.email) : ('Спасибо! Мы свяжемся по email: '+data.email));
    e.target.reset();
  });

  function toast(msg){
    const el = $('#toast');
    el.textContent = msg; el.classList.add('show');
    setTimeout(()=> el.classList.remove('show'), 2200);
  }
  function timeAgo(ts){
    const sec = Math.round((Date.now()-ts)/1000);
    if(sec<60) return sec+' сек. назад';
    const m = Math.round(sec/60); if(m<60) return m+' мин. назад';
    const h = Math.round(m/60); if(h<24) return h+' ч. назад';
    const d = Math.round(h/24); return d+' дн. назад';
  }
  function escapeHtml(s){ return s.replace(/[&<>\"']/g, m=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[m])); }
})();