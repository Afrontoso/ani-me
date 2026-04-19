/* ====== ANI-ME — Data + Interactions ====== */

const CATALOG = {
    featured: [
        {
            id: 'op', title: 'One Piece', jp: 'ワンピース',
            image: 'img/mini1.jpg',
            year: 1999, episodes: '1100+ eps', genre: 'Ação · Aventura', rating: '9.1',
            synopsis: 'Houve um homem que conquistou tudo aquilo que o mundo tinha a oferecer, o lendário Rei dos Piratas, Gold Roger. A revelação do maior tesouro — o One Piece — cobiçado por homens de todo o mundo, deu início à Grande Era dos Piratas.'
        },
        {
            id: 'aot', title: 'Ataque dos Titãs', jp: '進撃の巨人',
            image: 'img/mini8.jpg',
            year: 2013, episodes: '87 eps', genre: 'Ação · Drama', rating: '9.4',
            synopsis: 'A humanidade vive cercada por muralhas gigantescas que a protegem de titãs devoradores de homens. Quando um titã colossal rompe a muralha, Eren Yeager jura extinguir todos os titãs.'
        },
        {
            id: 'kny', title: 'Kimetsu no Yaiba', jp: '鬼滅の刃',
            image: 'img/mini7.jpg',
            year: 2019, episodes: '55+ eps', genre: 'Ação · Sobrenatural', rating: '9.0',
            synopsis: 'Após a família de Tanjiro ser massacrada por demônios e sua irmã transformada, ele jura se tornar um caçador de demônios para vingar os seus e restaurar a humanidade de Nezuko.'
        },
        {
            id: 'jjk', title: 'Jujutsu Kaisen', jp: '呪術廻戦',
            image: 'img/mini3.jpg',
            year: 2020, episodes: '47+ eps', genre: 'Ação · Sobrenatural', rating: '8.7',
            synopsis: 'Yuji Itadori é arrastado para o mundo oculto dos feiticeiros Jujutsu após engolir um artefato amaldiçoado contendo fragmentos de Sukuna, o Rei das Maldições.'
        },
        {
            id: 'dn', title: 'Death Note', jp: 'デスノート',
            image: 'img/mini9.jpg',
            year: 2006, episodes: '37 eps', genre: 'Suspense · Psicológico', rating: '9.0',
            synopsis: 'Light Yagami encontra um caderno sobrenatural capaz de matar qualquer um cujo nome seja escrito nele. Ele decide reformular o mundo — mas o detetive L está no seu encalço.'
        }
    ],

    animes: [
        { id: 'spy', title: 'Spy × Family', jp: 'スパイファミリー', image: 'img/mini0.2.jpg', year: 2022, episodes: '37+ eps', genre: 'Ação · Comédia', rating: '8.6', synopsis: 'O espião Twilight precisa formar uma família falsa para completar sua missão — mas sua esposa é uma assassina e a filha adotiva, uma telepata.' },
        { id: 'baki', title: 'Baki Hanma', jp: '範馬刃牙', image: 'img/mini1.2.jpg', year: 2021, episodes: '26+ eps', genre: 'Ação · Luta', rating: '7.8', synopsis: 'Baki continua sua jornada para superar seu pai Yujiro, o ser mais forte do mundo, enfrentando lutadores lendários em batalhas brutais.' },
        { id: 'tkr', title: 'Tokyo Revengers', jp: '東京卍リベンジャーズ', image: 'img/mini2.2.jpg', year: 2021, episodes: '50+ eps', genre: 'Ação · Sobrenatural', rating: '8.1', synopsis: 'Takemichi viaja no tempo 12 anos ao passado para salvar sua ex-namorada e impedir a ascensão de uma gangue criminosa.' },
        { id: 'poke', title: 'Pokémon Jornadas', jp: 'ポケットモンスター', image: 'img/mini3.2.jpg', year: 1997, episodes: '1200+ eps', genre: 'Aventura · Infantil', rating: '7.5', synopsis: 'Ash Ketchum viaja pelo mundo Pokémon com seu parceiro Pikachu, buscando se tornar o maior mestre Pokémon de todos os tempos.' },
        { id: 'shk', title: 'Shaman King', jp: 'シャーマンキング', image: 'img/mini4.2.jpg', year: 2001, episodes: '64 eps', genre: 'Ação · Sobrenatural', rating: '7.9', synopsis: 'Yoh Asakura luta no Torneio dos Xamãs para se tornar o Shaman King e governar o mundo espiritual ao lado do samurai Amidamaru.' },
        { id: 'gin', title: 'Gintama', jp: '銀魂', image: 'img/mini5.2.jpg', year: 2006, episodes: '367 eps', genre: 'Comédia · Ação', rating: '8.9', synopsis: 'Em um Edo alternativo invadido por alienígenas, o samurai preguiçoso Gintoki faz trabalhos aleatórios para pagar o aluguel.' },
        { id: 'avt', title: 'Avatar: A Lenda de Aang', jp: 'アバター 伝説の少年アン', image: 'img/mini6.2.jpg', year: 2005, episodes: '61 eps', genre: 'Aventura · Fantasia', rating: '9.3', synopsis: 'Aang, o último Avatar, desperta após 100 anos de hibernação para salvar o mundo da Nação do Fogo e restaurar a harmonia.' },
        { id: 'fma', title: 'Fullmetal Alchemist', jp: '鋼の錬金術師', image: 'img/mini7.2.jpg', year: 2003, episodes: '51 eps', genre: 'Ação · Fantasia', rating: '9.1', synopsis: 'Os irmãos Elric buscam a Pedra Filosofal para recuperar seus corpos após uma transmutação alquímica catastrófica.' },
        { id: 'dgm', title: 'Digimon Adventure', jp: 'デジモンアドベンチャー', image: 'img/mini8.2.jpg', year: 1999, episodes: '54 eps', genre: 'Aventura · Fantasia', rating: '8.0', synopsis: 'Sete crianças são transportadas para o Mundo Digital, onde descobrem seus Digimon parceiros e uma missão para salvar dois mundos.' },
        { id: 'mha', title: 'My Hero Academia', jp: '僕のヒーローアカデミア', image: 'img/mini9.2.jpg', year: 2016, episodes: '138+ eps', genre: 'Ação · Super-heróis', rating: '8.3', synopsis: 'Izuku Midoriya nasce sem Quirk em um mundo cheio de super-humanos, mas recebe o poder do maior herói para suceder seu legado.' }
    ],

    populares: [
        { id: 'nar', title: 'Naruto', jp: 'ナルト', image: 'img/mini0.jpg', year: 2002, episodes: '220 eps', genre: 'Ação · Aventura', rating: '8.4', synopsis: 'Naruto Uzumaki, um jovem ninja rejeitado pela vila, busca reconhecimento e sonha em se tornar Hokage, o líder mais forte da Vila da Folha.' },
        { id: 'op', title: 'One Piece', jp: 'ワンピース', image: 'img/mini1.jpg', year: 1999, episodes: '1100+ eps', genre: 'Ação · Aventura', rating: '9.1', synopsis: 'Monkey D. Luffy zarpa em busca do maior tesouro do mundo, o One Piece, reunindo uma tripulação de piratas com sonhos impossíveis.' },
        { id: 'nsh', title: 'Naruto Shippuden', jp: 'ナルト 疾風伝', image: 'img/mini2.jpg', year: 2007, episodes: '500 eps', genre: 'Ação · Aventura', rating: '8.7', synopsis: 'Após treinar por dois anos e meio, Naruto retorna para enfrentar a organização Akatsuki e proteger seus amigos.' },
        { id: 'jjk', title: 'Jujutsu Kaisen', jp: '呪術廻戦', image: 'img/mini3.jpg', year: 2020, episodes: '47+ eps', genre: 'Ação · Sobrenatural', rating: '8.7', synopsis: 'Yuji Itadori engole um artefato amaldiçoado e se torna hospedeiro de uma entidade lendária. Agora ele treina como feiticeiro Jujutsu.' },
        { id: 'dbz', title: 'Dragon Ball Z', jp: 'ドラゴンボールZ', image: 'img/mini4.jpg', year: 1989, episodes: '291 eps', genre: 'Ação · Aventura', rating: '8.8', synopsis: 'Goku e seus amigos enfrentam inimigos intergalácticos em batalhas épicas para proteger a Terra e o universo inteiro.' },
        { id: 'dbs', title: 'Dragon Ball Super', jp: 'ドラゴンボール超', image: 'img/mini5.jpg', year: 2015, episodes: '131 eps', genre: 'Ação · Aventura', rating: '8.2', synopsis: 'Goku e Vegeta enfrentam ameaças de outros universos, dos Deuses da Destruição a um torneio multiversal.' },
        { id: 'ble', title: 'Bleach', jp: 'ブリーチ', image: 'img/mini6.jpg', year: 2004, episodes: '366 eps', genre: 'Ação · Sobrenatural', rating: '8.6', synopsis: 'Ichigo Kurosaki, adolescente que vê fantasmas, ganha os poderes de um Shinigami e passa a proteger os vivos dos Hollows.' },
        { id: 'kny', title: 'Kimetsu no Yaiba', jp: '鬼滅の刃', image: 'img/mini7.jpg', year: 2019, episodes: '55+ eps', genre: 'Ação · Sobrenatural', rating: '9.0', synopsis: 'Tanjiro Kamado se torna caçador de demônios para salvar sua irmã, transformada em demônio após um ataque brutal.' },
        { id: 'aot', title: 'Ataque dos Titãs', jp: '進撃の巨人', image: 'img/mini8.jpg', year: 2013, episodes: '87 eps', genre: 'Ação · Drama', rating: '9.4', synopsis: 'Eren Yeager jura exterminar os titãs após a queda da muralha. Mas a verdade por trás deles é mais sombria do que parece.' },
        { id: 'dn', title: 'Death Note', jp: 'デスノート', image: 'img/mini9.jpg', year: 2006, episodes: '37 eps', genre: 'Suspense · Psicológico', rating: '9.0', synopsis: 'Light Yagami usa um caderno sobrenatural para matar criminosos. L, o maior detetive do mundo, investiga o caso.' }
    ],

    recomendados: [
        { id: 'dif-r', title: 'Darling in the Franxx', jp: 'ダーリン・イン・ザ・フランキス', image: 'img/mini0.1.jpg', year: 2018, episodes: '24 eps', genre: 'Ficção · Romance', rating: '7.4', synopsis: 'Em um futuro distópico, jovens pilotos duplos controlam mechs chamados Franxx para defender a humanidade de kaijus.' },
        { id: 'se-r', title: 'Soul Eater', jp: 'ソウルイーター', image: 'img/mini1.1.jpg', year: 2008, episodes: '51 eps', genre: 'Ação · Sobrenatural', rating: '8.0', synopsis: 'Estudantes da Academia Shibusen treinam como empunhadores de armas vivas para colher almas malignas.' },
        { id: 'hotd-r', title: 'Highschool of the Dead', jp: '学園黙示録', image: 'img/mini2.1.jpg', year: 2010, episodes: '12 eps', genre: 'Ação · Terror', rating: '7.2', synopsis: 'Um grupo de estudantes luta pela sobrevivência após um apocalipse zumbi devastar o Japão.' },
        { id: 'nnt-r', title: 'Nanatsu no Taizai', jp: '七つの大罪', image: 'img/mini3.1.jpg', year: 2014, episodes: '100+ eps', genre: 'Ação · Fantasia', rating: '8.1', synopsis: 'A princesa Elizabeth busca os Sete Pecados Capitais, lendários cavaleiros, para salvar seu reino dos Cavaleiros Sagrados.' },
        { id: 'sao-r', title: 'Sword Art Online', jp: 'ソードアート・オンライン', image: 'img/mini4.1.jpg', year: 2012, episodes: '96+ eps', genre: 'Ficção · Aventura', rating: '7.5', synopsis: 'Kirito fica preso em um MMORPG de realidade virtual onde morrer no jogo significa morrer na vida real.' },
        { id: 'tnyn-r', title: 'Tate no Yuusha', jp: '盾の勇者の成り上がり', image: 'img/mini5.1.jpg', year: 2019, episodes: '50+ eps', genre: 'Fantasia · Aventura', rating: '7.9', synopsis: 'Naofumi é convocado como o Herói do Escudo em outro mundo e, traído por todos, precisa se tornar forte por conta própria.' },
        { id: 'opm-r', title: 'One Punch Man', jp: 'ワンパンマン', image: 'img/mini6.1.jpg', year: 2015, episodes: '24 eps', genre: 'Ação · Comédia', rating: '8.7', synopsis: 'Saitama é um herói tão poderoso que derrota qualquer oponente com um único soco — e isso entediantemente o deprime.' },
        { id: 'hxh-r', title: 'Hunter × Hunter', jp: 'ハンター×ハンター', image: 'img/mini7.1.jpg', year: 2011, episodes: '148 eps', genre: 'Ação · Aventura', rating: '9.1', synopsis: 'Gon Freecss embarca na jornada para se tornar um Hunter e encontrar seu pai desaparecido.' },
        { id: 'iny-r', title: 'Inuyasha', jp: '犬夜叉', image: 'img/mini8.1.jpg', year: 2000, episodes: '193 eps', genre: 'Fantasia · Romance', rating: '7.9', synopsis: 'Kagome viaja no tempo para o Japão feudal, onde se une ao meio-demônio Inuyasha para recuperar a Joia de Quatro Almas.' },
        { id: 'cdz-r', title: 'Cavaleiros do Zodíaco', jp: '聖闘士星矢', image: 'img/mini9.1.jpg', year: 1986, episodes: '114 eps', genre: 'Ação · Fantasia', rating: '8.0', synopsis: 'Cinco jovens guerreiros vestem as armaduras sagradas do Zodíaco para proteger a deusa Atena e a Terra.' }
    ]
};

/* ====== FAVORITES (localStorage) ====== */
const FAV_KEY = 'anime_favs_v1';
const getFavs = () => {
    try { return JSON.parse(localStorage.getItem(FAV_KEY) || '[]'); }
    catch (e) { return []; }
};
const setFavs = (arr) => localStorage.setItem(FAV_KEY, JSON.stringify(arr));
const isFav = (id) => getFavs().includes(id);
const toggleFav = (id) => {
    const favs = getFavs();
    const i = favs.indexOf(id);
    if (i >= 0) favs.splice(i, 1); else favs.push(id);
    setFavs(favs);
    return i < 0;
};

/* ====== HELPERS ====== */
const allAnimes = () => [
    ...CATALOG.animes,
    ...CATALOG.populares.filter(a => !CATALOG.animes.find(x => x.id === a.id)),
    ...CATALOG.recomendados.filter(a =>
        !CATALOG.animes.find(x => x.id === a.id) &&
        !CATALOG.populares.find(x => x.id === a.id)
    )
];

const findById = (id) => allAnimes().find(a => a.id === id)
    || CATALOG.featured.find(a => a.id === id);

/* ====== CARD TEMPLATE ====== */
function cardHTML(anime, rank) {
    const fav = isFav(anime.id);
    return `
        <div class="card" data-id="${anime.id}" role="button" tabindex="0">
            ${rank ? `<span class="card-rank">#${rank}</span>` : ''}
            <button class="card-fav ${fav ? 'is-active' : ''}" data-fav="${anime.id}" aria-label="Favoritar" aria-pressed="${fav}">♥</button>
            <img src="${anime.image}" alt="Capa ${anime.title}" loading="lazy">
            <div class="card-info">
                <h4 class="card-title">${anime.title}</h4>
                <p class="card-meta">${anime.year} · ${anime.genre}</p>
            </div>
        </div>
    `;
}

/* ====== RENDER SHELVES ====== */
function renderShelf(rowKey, list, { ranked = false } = {}) {
    const el = document.querySelector(`[data-row="${rowKey}"]`);
    if (!el) return;
    el.innerHTML = list
        .map((a, i) => `<div class="item">${cardHTML(a, ranked ? i + 1 : null)}</div>`)
        .join('');
}

renderShelf('row-animes', CATALOG.animes);
renderShelf('row-populares', CATALOG.populares, { ranked: true });
renderShelf('row-recomendados', CATALOG.recomendados);

/* ====== OWL CAROUSELS ====== */
$('.shelf-row').owlCarousel({
    loop: true,
    margin: 12,
    nav: false,
    dots: false,
    dragEndSpeed: 500,
    smartSpeed: 450,
    responsive: {
        0: { items: 2 },
        480: { items: 3 },
        720: { items: 4 },
        1024: { items: 5 },
        1280: { items: 6 }
    }
});

/* ====== CAROUSEL NAV BUTTONS ====== */
document.querySelectorAll('.shelf-btn[data-carousel]').forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-carousel');
        const dir = btn.getAttribute('data-dir');
        const $car = $(`[data-row="${target}"]`);
        $car.trigger(dir === 'next' ? 'next.owl.carousel' : 'prev.owl.carousel');
    });
});

/* ====== HERO ROTATOR ====== */
const heroState = { i: 0, timer: null };
const heroEls = {
    bg: document.getElementById('heroBg'),
    title: document.getElementById('heroTitle'),
    sub: document.getElementById('heroSubtitle'),
    desc: document.getElementById('heroDesc'),
    genre: document.getElementById('heroGenre'),
    year: document.getElementById('heroYear'),
    eps: document.getElementById('heroEps'),
    num: document.getElementById('heroNum'),
    total: document.getElementById('heroTotal'),
    dots: document.getElementById('heroDots')
};

const HERO_BGS = ['img/capa2.jpg', 'img/capa.jpg', 'img/capa3.jpg', 'img/capa2.jpg', 'img/capa.jpg'];

function renderHero(i) {
    const a = CATALOG.featured[i];
    if (!a) return;
    heroEls.bg.style.backgroundImage = `url('${HERO_BGS[i % HERO_BGS.length]}')`;

    heroEls.title.textContent = a.title;
    heroEls.sub.textContent = a.jp;
    heroEls.desc.textContent = a.synopsis;
    heroEls.genre.textContent = a.genre;
    heroEls.year.textContent = a.year;
    heroEls.eps.textContent = a.episodes;
    heroEls.num.textContent = String(i + 1).padStart(2, '0');
    heroEls.total.textContent = '/ ' + String(CATALOG.featured.length).padStart(2, '0');

    heroEls.dots.querySelectorAll('.hero-dot').forEach((d, j) => {
        d.classList.toggle('active', j === i);
    });

    heroEls.title.style.animation = 'none';
    void heroEls.title.offsetWidth;
    heroEls.title.style.animation = 'heroIn .6s cubic-bezier(.2,.7,.2,1) both';
}

function buildHeroDots() {
    heroEls.dots.innerHTML = CATALOG.featured
        .map((_, i) => `<button class="hero-dot" data-dot="${i}" aria-label="Slide ${i + 1}"></button>`)
        .join('');
    heroEls.dots.querySelectorAll('[data-dot]').forEach(btn => {
        btn.addEventListener('click', () => {
            heroState.i = parseInt(btn.dataset.dot, 10);
            renderHero(heroState.i);
            resetHeroTimer();
        });
    });
}

function nextHero() {
    heroState.i = (heroState.i + 1) % CATALOG.featured.length;
    renderHero(heroState.i);
}
function prevHero() {
    heroState.i = (heroState.i - 1 + CATALOG.featured.length) % CATALOG.featured.length;
    renderHero(heroState.i);
}
function resetHeroTimer() {
    clearInterval(heroState.timer);
    heroState.timer = setInterval(nextHero, 7000);
}

buildHeroDots();
renderHero(0);
resetHeroTimer();

document.getElementById('heroPrev').addEventListener('click', () => { prevHero(); resetHeroTimer(); });
document.getElementById('heroNext').addEventListener('click', () => { nextHero(); resetHeroTimer(); });
document.getElementById('heroInfoBtn').addEventListener('click', () => openModal(CATALOG.featured[heroState.i].id));
document.getElementById('heroPlayBtn').addEventListener('click', () => {
    const a = CATALOG.featured[heroState.i];
    showToast(`▶ Reproduzindo: ${a.title}`);
});

/* ====== HEADER SCROLL ====== */
const header = document.getElementById('site-header');
const applyScroll = () => {
    if (window.scrollY > 10) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
};
window.addEventListener('scroll', applyScroll, { passive: true });
applyScroll();

/* ====== NAV ACTIVE ON SCROLL ====== */
const navLinks = document.querySelectorAll('[data-nav]');
const sections = [...document.querySelectorAll('main section[id], main[id]')];
const spy = () => {
    let active = 'home';
    sections.forEach(sec => {
        const rect = sec.getBoundingClientRect();
        if (rect.top <= 140 && rect.bottom > 140) active = sec.id;
    });
    navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + active));
};
window.addEventListener('scroll', spy, { passive: true });
spy();

/* ====== CARD INTERACTIONS (delegated) ====== */
document.addEventListener('click', (e) => {
    const favBtn = e.target.closest('[data-fav]');
    if (favBtn) {
        e.stopPropagation();
        const id = favBtn.getAttribute('data-fav');
        const nowFav = toggleFav(id);
        document.querySelectorAll(`[data-fav="${id}"]`).forEach(b => {
            b.classList.toggle('is-active', nowFav);
            b.setAttribute('aria-pressed', nowFav);
        });
        updateListCount();
        showToast(nowFav ? '♥ Adicionado à Minha Lista' : 'Removido da Minha Lista');
        if (document.getElementById('modal') && !document.getElementById('modal').hidden) {
            syncModalFavBtn(id);
        }
        if (!document.getElementById('minha-lista').hidden) renderFavRow();
        return;
    }

    const card = e.target.closest('.card[data-id]');
    if (card) openModal(card.getAttribute('data-id'));
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        const card = document.activeElement.closest?.('.card[data-id]');
        if (card) { e.preventDefault(); openModal(card.getAttribute('data-id')); }
    }
    if (e.key === 'Escape') {
        if (!document.getElementById('modal').hidden) closeModal();
        else if (!document.getElementById('searchPanel').hidden) toggleSearch(false);
    }
});

/* ====== MODAL ====== */
const modal = document.getElementById('modal');
const modalEls = {
    img: document.getElementById('modalImg'),
    genre: document.getElementById('modalGenre'),
    title: document.getElementById('modalTitle'),
    jp: document.getElementById('modalJp'),
    year: document.getElementById('modalYear'),
    eps: document.getElementById('modalEps'),
    rating: document.getElementById('modalRating'),
    desc: document.getElementById('modalDesc'),
    fav: document.getElementById('modalFav'),
    play: document.getElementById('modalPlay')
};
let currentModalId = null;

function openModal(id) {
    const a = findById(id);
    if (!a) return;
    currentModalId = id;
    modalEls.img.src = a.image;
    modalEls.img.alt = 'Capa ' + a.title;
    modalEls.genre.textContent = a.genre;
    modalEls.title.textContent = a.title;
    modalEls.jp.textContent = a.jp;
    modalEls.year.textContent = a.year;
    modalEls.eps.textContent = a.episodes;
    modalEls.rating.textContent = '★ ' + a.rating;
    modalEls.desc.textContent = a.synopsis;
    syncModalFavBtn(id);
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
}
function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = '';
    currentModalId = null;
}
function syncModalFavBtn(id) {
    const fav = isFav(id);
    modalEls.fav.classList.toggle('is-fav', fav);
    modalEls.fav.querySelector('span:last-child').textContent = fav ? 'Na Minha Lista' : 'Minha Lista';
    modalEls.fav.querySelector('.btn-icon').textContent = fav ? '♥' : '♡';
}

document.querySelectorAll('[data-modal-close]').forEach(el => el.addEventListener('click', closeModal));
modalEls.fav.addEventListener('click', () => {
    if (!currentModalId) return;
    const nowFav = toggleFav(currentModalId);
    document.querySelectorAll(`[data-fav="${currentModalId}"]`).forEach(b => {
        b.classList.toggle('is-active', nowFav);
        b.setAttribute('aria-pressed', nowFav);
    });
    updateListCount();
    syncModalFavBtn(currentModalId);
    showToast(nowFav ? '♥ Adicionado à Minha Lista' : 'Removido da Minha Lista');
    if (!document.getElementById('minha-lista').hidden) renderFavRow();
});
modalEls.play.addEventListener('click', () => {
    const a = findById(currentModalId);
    if (a) showToast(`▶ Reproduzindo: ${a.title}`);
});

/* ====== SEARCH ====== */
const searchPanel = document.getElementById('searchPanel');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const searchRow = document.getElementById('searchRow');
const searchEmpty = document.getElementById('searchEmpty');
const searchSummary = document.getElementById('searchSummary');

function toggleSearch(open) {
    const willOpen = open ?? searchPanel.hidden;
    searchPanel.hidden = !willOpen;
    if (willOpen) setTimeout(() => searchInput.focus(), 60);
    else {
        searchInput.value = '';
        exitSearchMode();
    }
}
function exitSearchMode() {
    searchResults.hidden = true;
    document.body.classList.remove('is-searching');
}
document.getElementById('searchToggle').addEventListener('click', () => toggleSearch());
document.getElementById('searchClose').addEventListener('click', () => toggleSearch(false));

function runSearch(q) {
    q = q.trim().toLowerCase();
    if (!q) { exitSearchMode(); return; }
    const hits = allAnimes().filter(a =>
        a.title.toLowerCase().includes(q)
        || a.jp.includes(q)
        || a.genre.toLowerCase().includes(q)
        || String(a.year).includes(q)
    );
    searchSummary.textContent = `${hits.length} resultado${hits.length === 1 ? '' : 's'} para "${q}"`;
    searchRow.innerHTML = hits.map(a => cardHTML(a)).join('');
    searchEmpty.hidden = hits.length > 0;
    searchResults.hidden = false;
    document.body.classList.add('is-searching');
}

let searchTimer;
searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => runSearch(e.target.value), 180);
});
searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') { e.preventDefault(); runSearch(e.target.value); }
});

/* ====== MINHA LISTA ====== */
const favSection = document.getElementById('minha-lista');
const favRow = document.getElementById('favRow');
const favEmpty = document.getElementById('favEmpty');

function renderFavRow() {
    const ids = getFavs();
    const list = ids.map(id => findById(id)).filter(Boolean);
    favRow.innerHTML = list.map(a => cardHTML(a)).join('');
    favEmpty.hidden = list.length > 0;
}

document.getElementById('listToggle').addEventListener('click', () => {
    const opening = favSection.hidden;
    if (opening) {
        renderFavRow();
        favSection.hidden = false;
        favSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
        favSection.hidden = true;
    }
});
document.getElementById('closeList').addEventListener('click', () => { favSection.hidden = true; });

function updateListCount() {
    const n = getFavs().length;
    const el = document.getElementById('listCount');
    el.textContent = n;
    el.classList.toggle('show', n > 0);
}
updateListCount();

/* ====== TOAST ====== */
const toast = document.getElementById('toast');
let toastTimer;
function showToast(msg) {
    toast.textContent = msg;
    toast.hidden = false;
    requestAnimationFrame(() => toast.classList.add('show'));
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => { toast.hidden = true; }, 400);
    }, 2400);
}
