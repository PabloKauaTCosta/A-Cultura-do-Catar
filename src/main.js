import './style.css'
import heroImg from './assets/hero-doha.jpg'
import desertImg from './assets/desert.jpg'
import thobeImg from './assets/thobe.jpg'
import abayaImg from './assets/abaya.jpg'
import machboosImg from './assets/machboos.jpg'
import babaganucheImg from './assets/babaganuche.jpg'
import luqaimatImg from './assets/luqaimat.jpg'
import museumImg from './assets/museum-islamic-art.jpg'
import souqImg from './assets/souq-waqif.jpg'
import kataraImg from './assets/katara.jpg'
import pearlImg from './assets/pearl-qatar.jpg'
import nationalMuseumImg from './assets/national-museum.jpg'
import qatarMapImg from './assets/mapa catar.webp'

const aboutCards = [
  {
    icon: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Z" fill="none" stroke="currentColor" stroke-width="1.8"/>
        <circle cx="12" cy="10" r="2.2" fill="none" stroke="currentColor" stroke-width="1.8"/>
      </svg>
    `,
    title: 'Localização',
    text: 'O Catar é uma península pequena no Golfo Pérsico, ligada à Arábia Saudita e voltada para o Oriente Médio moderno.',
  },
  {
    icon: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 20h16M6 20V9l6-4 6 4v11M9 20v-7h6v7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `,
    title: 'História',
    text: 'Por séculos, a vida foi marcada por beduínos e mergulhadores de pérolas, até a transformação econômica com petróleo e gás.',
  },
  {
    icon: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3l1.7 4.5L18 9.2l-4.3 1.7L12 15l-1.7-4.1L6 9.2l4.3-1.7L12 3Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
        <path d="M19.5 14l.8 2.1L22 17l-1.7.9-.8 2.1-.8-2.1-1.7-.9 1.7-.9.8-2.1ZM5.2 14l.8 2.1 1.7.9-1.7.9-.8 2.1-.8-2.1L2.7 17l1.7-.9.8-2.1Z" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>
      </svg>
    `,
    title: 'Curiosidades',
    text: 'Sediou a Copa do Mundo FIFA de 2022 e reúne arranha-céus, museus e mercados tradicionais em um contraste único.',
  },
]

const cultureCards = [
  {
    title: 'Costumes',
    text: 'Hospitalidade, respeito aos mais velhos e o café árabe com tâmaras fazem parte da vida social catariana.',
  },
  {
    title: 'Religião',
    text: 'O Islã orienta o calendário, os rituais cotidianos e celebrações como o Ramadã e o Eid.',
  },
  {
    title: 'Estilo de vida',
    text: 'Mercados tradicionais convivem com arquitetura futurista, e o árabe divide espaço com o inglês no dia a dia.',
  },
]

const tourismCards = [
  {
    title: 'Doha',
    image: heroImg,
    text: 'A capital vibrante reúne Corniche, The Pearl e um skyline que resume a modernidade do país.',
  },
  {
    title: 'Museu de Arte Islâmica',
    image: museumImg,
    text: 'Uma das referências culturais do Golfo, com acervo e arquitetura de destaque internacional.',
  },
  {
    title: 'Souq Waqif',
    image: souqImg,
    text: 'Mercado tradicional com especiarias, tecidos, artesanato e cafés em becos iluminados.',
  },
  {
    title: 'Katara Cultural Village',
    image: kataraImg,
    text: 'Um centro cultural com galerias, anfiteatro, mesquitas e festivais artísticos ao longo do ano.',
  },
]

const galleryImages = [
  heroImg,
  souqImg,
  museumImg,
  desertImg,
  kataraImg,
  nationalMuseumImg,
  pearlImg,
  machboosImg,
]

const quizQuestions = [
  {
    question: 'Qual é a capital do Catar?',
    options: [
      { text: 'Dubai', correct: false },
      { text: 'Doha', correct: true },
      { text: 'Riad', correct: false },
      { text: 'Manama', correct: false },
    ],
    feedbackCorrect: 'Resposta correta. Doha é a capital do Catar.',
    feedbackWrong: 'Resposta incorreta. A capital do Catar é Doha.',
  },
  {
    question: 'Em que região o Catar está localizado?',
    options: [
      { text: 'Península Arábica', correct: true },
      { text: 'Península Ibérica', correct: false },
      { text: 'Chifre da África', correct: false },
      { text: 'Sudeste Asiático', correct: false },
    ],
    feedbackCorrect: 'Isso. O Catar fica na Península Arábica.',
    feedbackWrong: 'Não é essa região. O Catar fica na Península Arábica.',
  },
  {
    question: 'Qual prato é típico da culinária catariana?',
    options: [
      { text: 'Machboos', correct: true },
      { text: 'Feijoada', correct: false },
      { text: 'Paella', correct: false },
      { text: 'Sushi', correct: false },
    ],
    feedbackCorrect: 'Correto. O machboos é um prato tradicional do Catar.',
    feedbackWrong: 'Resposta errada. O machboos é um prato típico do Catar.',
  },
  {
    question: 'Qual vestimenta masculina tradicional aparece no site?',
    options: [
      { text: 'Kimono', correct: false },
      { text: 'Thobe', correct: true },
      { text: 'Kilt', correct: false },
      { text: 'Sarong', correct: false },
    ],
    feedbackCorrect: 'Perfeito. O thobe é a vestimenta masculina tradicional.',
    feedbackWrong: 'Não. A vestimenta masculina tradicional é o thobe.',
  },
  {
    question: 'O Catar sediou qual grande evento esportivo em 2022?',
    options: [
      { text: 'Copa América', correct: false },
      { text: 'Copa do Mundo FIFA', correct: true },
      { text: 'Jogos Olímpicos', correct: false },
      { text: 'Mundial de Clubes feminino', correct: false },
    ],
    feedbackCorrect: 'Correto. O Catar sediou a Copa do Mundo FIFA de 2022.',
    feedbackWrong: 'Resposta incorreta. O evento foi a Copa do Mundo FIFA de 2022.',
  },
  {
    question: 'Qual mercado tradicional é um ponto turístico famoso em Doha?',
    options: [
      { text: 'Souq Waqif', correct: true },
      { text: 'Times Square', correct: false },
      { text: 'La Rambla', correct: false },
      { text: 'Camden Market', correct: false },
    ],
    feedbackCorrect: 'Isso mesmo. O Souq Waqif é um mercado tradicional muito conhecido.',
    feedbackWrong: 'Não é esse. O mercado tradicional famoso é o Souq Waqif.',
  },
]

const app = document.querySelector('#app')

app.innerHTML = `
  <header class="topbar topbar-overlay">
    <a class="brand" href="#inicio" aria-label="Ir para o início">
      <span class="brand-mark">ق</span>
      <span>
        <strong>Catar</strong>
      </span>
    </a>

    <nav class="nav">
      <a href="#cultura">Cultura</a>
      <a href="#culinaria">Culinária</a>
      <a href="#quiz">Quiz</a>
    </nav>
  </header>

  <main>
    <section class="hero-section reveal" id="inicio" style="--hero-image: url('${heroImg}')">
      <div class="hero-overlay"></div>

      <div class="hero-copy">
        <p class="hero-pill">Península Arábica · Golfo Pérsico</p>
        <h1>A Cultura do <span>Catar</span></h1>
        <p class="lead">
          Uma jornada pela história, tradições, sabores e maravilhas de um país que une o legado do deserto à modernidade do Golfo.
        </p>

        <div class="hero-actions">
          <a class="button button-primary" href="#sobre">Explorar o Catar</a>
          <a class="button button-secondary" href="#quiz">Fazer o Quiz</a>
        </div>
      </div>
    </section>

    <section class="section" id="sobre">
      <div class="section-heading reveal section-heading-center">
        <p class="eyebrow">CONHEÇA O PAÍS</p>
        <h2>Sobre o Catar</h2>
        <p class="section-subtitle">Um país pequeno em território, mas gigante em história e ambição, onde o deserto encontra a modernidade.</p>
      </div>

      <div class="about-layout">
        <article class="about-image-card reveal">
          <img src="${desertImg}" alt="Caravana de camelos atravessando as dunas do deserto do Catar ao pôr do sol" />
        </article>

        <div class="about-info-stack">
          ${aboutCards
            .map(
              (card) => `
                <article class="about-info-card reveal">
                  <span class="about-icon" aria-hidden="true">${card.icon}</span>
                  <div>
                    <h3>${card.title}</h3>
                    <p>${card.text}</p>
                  </div>
                </article>
              `,
            )
            .join('')}
        </div>
      </div>
    </section>

    <section class="stats-section" aria-labelledby="numbers-title">
      <div class="section-heading reveal section-heading-center">
        <p class="eyebrow eyebrow-light">CATAR EM NÚMEROS</p>
        <h2 id="numbers-title">O Catar em Números</h2>
      </div>

      <div class="stats-strip reveal">
        <div>
          <strong>1971</strong>
          <span>Ano da independência</span>
        </div>
        <div>
          <strong>2022</strong>
          <span>Sede da Copa do Mundo</span>
        </div>
        <div>
          <strong>2,6M+</strong>
          <span>Habitantes (aprox.)</span>
        </div>
        <div>
          <strong>100+</strong>
          <span>Nações representadas</span>
        </div>
      </div>
    </section>

    <section class="section section-muted" id="cultura">
      <div class="section-heading reveal">
        <p class="eyebrow">CULTURA E TRADIÇÕES</p>
        <h2>Valores enraizados na fé, na família e na hospitalidade.</h2>
      </div>

      <div class="grid three-up">
        ${cultureCards
          .map(
            (card) => `
              <article class="info-card reveal">
                <p class="card-kicker">TRADIÇÃO</p>
                <h3>${card.title}</h3>
                <p>${card.text}</p>
              </article>
            `,
          )
          .join('')}
      </div>
    </section>

    <section class="section" id="vestimentas">
      <div class="section-heading reveal">
        <p class="eyebrow">TRADIÇÃO QUE SE VESTE</p>
        <h2>Vestimentas típicas que carregam séculos de história e respeito.</h2>
      </div>

      <div class="grid two-up">
        <article class="media-card reveal">
          <img src="${thobeImg}" alt="Homem catariano vestindo o thobe branco tradicional e o ghutra" />
          <div>
            <p class="card-kicker">VESTIMENTA MASCULINA</p>
            <h3>Thobe</h3>
            <p>
              Túnica longa, geralmente branca e fresca, ideal para o clima do deserto. É acompanhada pelo ghutra, preso pelo agal.
            </p>
          </div>
        </article>

        <article class="media-card reveal">
          <img src="${abayaImg}" alt="Abaya preta tradicional, vestimenta feminina do Catar" />
          <div>
            <p class="card-kicker">VESTIMENTA FEMININA</p>
            <h3>Abaya</h3>
            <p>
              Manto elegante, normalmente preto, usado sobre as roupas e muitas vezes combinado com o shayla, o véu de cabeça.
            </p>
          </div>
        </article>
      </div>
    </section>

    <section class="section section-muted" id="culinaria">
      <div class="section-heading reveal">
        <p class="eyebrow">SABORES DO GOLFO</p>
        <h2>Uma culinária rica em especiarias, com heranças árabe, persa e indiana.</h2>
      </div>

      <div class="grid three-up">
        <article class="food-card reveal">
          <img src="${machboosImg}" alt="Machboos, prato de arroz temperado com carne, prato típico do Catar" />
          <div>
            <p class="card-kicker">PRATO PRINCIPAL</p>
            <h3>Machboos</h3>
            <p>Arroz aromático com especiarias, açafrão e limão seco, servido com frango, carne ou peixe.</p>
          </div>
        </article>

        <article class="food-card reveal">
          <img src="${babaganucheImg}" alt="Babaganuche, pasta cremosa e defumada de berinjela." />
          <div>
            <p class="card-kicker">CONFORTO</p>
            <h3>Babaganuche</h3>
            <p>Pasta cremosa e defumada. É feito basicamente de berinjela assada ou grelhada, tahine (pasta de gergelim), alho, suco de limão e azeite.</p>
          </div>
        </article>

        <article class="food-card reveal">
          <img src="${luqaimatImg}" alt="Luqaimat, bolinhos doces fritos cobertos com calda de tâmara" />
          <div>
            <p class="card-kicker">SOBREMESA</p>
            <h3>Luqaimat</h3>
            <p>Bolinhos dourados e crocantes por fora, macios por dentro, regados com calda de tâmaras e gergelim.</p>
          </div>
        </article>
      </div>
    </section>

    <section class="section" id="turismo">
      <div class="section-heading reveal">
        <p class="eyebrow">PARA VISITAR</p>
        <h2>Destinos que unem patrimônio histórico, arte e arquitetura de tirar o fôlego.</h2>
      </div>

      <div class="grid tourism-grid">
        ${tourismCards
          .map(
            (card) => `
              <article class="tour-card reveal">
                <img src="${card.image}" alt="${card.title}" />
                <div>
                  <p class="card-kicker">${card.title === 'Doha' ? 'CAPITAL' : 'PONTO CULTURAL'}</p>
                  <h3>${card.title}</h3>
                  <p>${card.text}</p>
                </div>
              </article>
            `,
          )
          .join('')}
      </div>
    </section>

    <section class="section section-muted" id="galeria">
      <div class="section-heading reveal">
        <p class="eyebrow">GALERIA</p>
        <h2>Um passeio visual pelas paisagens, cidades e tradições do Catar.</h2>
      </div>

      <div class="gallery-grid">
        ${galleryImages
          .map(
            (image, index) => `
              <figure class="gallery-item reveal">
                <img src="${image}" alt="Imagem da galeria do Catar ${index + 1}" />
              </figure>
            `,
          )
          .join('')}
      </div>
    </section>

    <section class="section" id="mapa">
      <div class="section-heading reveal">
        <p class="eyebrow">ONDE FICA</p>
        <h2>Mapa do Catar.</h2>
      </div>

      <article class="map-card map-card-static reveal">
        <div class="map-static">
          <img src="${qatarMapImg}" alt="Mapa estático do Catar com Doha destacada na costa leste" />
        </div>
        <p>
          O Catar fica na Península Arábica, às margens do Golfo Pérsico, com Doha na costa leste.
        </p>
      </article>
    </section>

    <section class="section section-muted" id="quiz">
      <div class="section-heading reveal">
        <p class="eyebrow">TESTE SEU CONHECIMENTO</p>
        <h2>Quiz interativo sobre a cultura do Catar.</h2>
      </div>

      <div class="quiz-card reveal">
        <div class="quiz-header">
          <p class="card-kicker" id="quiz-progress">PERGUNTA 1 DE ${quizQuestions.length}</p>
          <strong id="quiz-score">Pontos: 0</strong>
        </div>

        <h3 id="quiz-question"></h3>

        <div class="quiz-options" id="quiz-options">
        </div>

        <div class="quiz-footer">
          <div class="quiz-feedback" id="quiz-feedback">Escolha uma resposta para continuar.</div>
          <button class="button button-primary quiz-next" id="quiz-next" type="button" hidden>Próxima pergunta</button>
        </div>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div>
      <strong>A Cultura do Catar</strong>
      <p>Site educativo desenvolvido para apresentação escolar, explorando história, cultura e tradições do Estado do Catar.</p>
    </div>

    <div>
      <strong>Navegação</strong>
      <p>Sobre · Cultura · Vestimentas · Culinária · Turismo · Quiz</p>
    </div>

    
`

const quizProgress = document.querySelector('#quiz-progress')
const quizQuestion = document.querySelector('#quiz-question')
const quizOptions = document.querySelector('#quiz-options')
const quizScore = document.querySelector('#quiz-score')
const quizFeedback = document.querySelector('#quiz-feedback')
const quizNext = document.querySelector('#quiz-next')
let currentQuestionIndex = 0
let score = 0
let correctAnswers = 0
let wrongAnswers = 0
let quizCompleted = false

const renderQuizQuestion = () => {
  quizCompleted = false
  const currentQuestion = quizQuestions[currentQuestionIndex]

  quizProgress.textContent = `PERGUNTA ${currentQuestionIndex + 1} DE ${quizQuestions.length}`
  quizQuestion.textContent = currentQuestion.question
  quizFeedback.textContent = 'Escolha uma resposta para continuar.'
  quizNext.hidden = true
  quizNext.textContent = currentQuestionIndex === quizQuestions.length - 1 ? 'Finalizar quiz' : 'Próxima pergunta'

  quizOptions.innerHTML = currentQuestion.options
    .map(
      (option) => `
        <button type="button" data-correct="${option.correct}">${option.text}</button>
      `,
    )
    .join('')

  quizOptions.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', () => {
      const isCorrect = button.dataset.correct === 'true'

      quizOptions.querySelectorAll('button').forEach((option) => {
        option.disabled = true
        option.classList.toggle('is-correct', option.dataset.correct === 'true')
        option.classList.toggle('is-wrong', option === button && !isCorrect)
      })

      if (isCorrect) {
        score += 1
        correctAnswers += 1
        quizScore.textContent = `Pontos: ${score}`
        quizFeedback.textContent = currentQuestion.feedbackCorrect
      } else {
        wrongAnswers += 1
        quizFeedback.textContent = currentQuestion.feedbackWrong
      }

      quizNext.hidden = false
    })
  })
}

const renderQuizSummary = () => {
  quizCompleted = true
  quizProgress.textContent = 'QUIZ FINALIZADO'
  quizQuestion.textContent = 'Resumo do quiz'
  quizOptions.innerHTML = ''
  quizFeedback.textContent = `Você acertou ${correctAnswers} e errou ${wrongAnswers} perguntas.`
  quizNext.hidden = false
  quizNext.textContent = 'Reiniciar quiz'
}

quizNext.addEventListener('click', () => {
  if (quizCompleted) {
    currentQuestionIndex = 0
    score = 0
    correctAnswers = 0
    wrongAnswers = 0
    quizScore.textContent = 'Pontos: 0'
    renderQuizQuestion()
    return
  }

  if (currentQuestionIndex < quizQuestions.length - 1) {
    currentQuestionIndex += 1
    renderQuizQuestion()
    return
  }

  renderQuizSummary()
})

renderQuizQuestion()

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        revealObserver.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.15 },
)

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element))
