'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const HOTMART_URL = process.env.NEXT_PUBLIC_HOTMART_URL || '#oferta'
const VIDEO_URL = process.env.NEXT_PUBLIC_VIDEO_URL || ''

const benefits = [
  ['01', 'Reflexão guiada', 'Um momento por dia para desacelerar, olhar para dentro e perceber o que precisa mudar.'],
  ['02', 'Orações específicas', 'Palavras e direcionamentos para transformar intenção em uma prática de fé.'],
  ['03', 'Áudios guiados', 'Conteúdos para ouvir durante sua jornada, sem precisar parar tudo para acompanhar.'],
  ['04', 'Diário dos 7 dias', 'Um espaço para registrar pensamentos, aprendizados, decisões e pequenos avanços.'],
  ['05', 'Gratidão e presença', 'Exercícios simples para perceber o que já existe e cultivar uma nova perspectiva.'],
  ['06', 'Ação consciente', 'Cada dia termina com um próximo passo claro — pequeno, possível e intencional.'],
]

const days = [
  ['Dia 01', 'Reconhecer', 'Olhar para o momento atual e identificar o que está pedindo mudança.'],
  ['Dia 02', 'Silenciar', 'Criar espaço para reflexão, oração e escuta interior.'],
  ['Dia 03', 'Entregar', 'Soltar o excesso de controle e reorganizar aquilo que realmente importa.'],
  ['Dia 04', 'Recomeçar', 'Escolher uma nova postura diante daquilo que antes parecia travado.'],
  ['Dia 05', 'Agradecer', 'Mudar o foco da falta para aquilo que já sustenta sua caminhada.'],
  ['Dia 06', 'Agir', 'Transformar reflexão em uma atitude concreta e possível.'],
  ['Dia 07', 'Abrir caminhos', 'Fechar o ciclo com clareza e levar os aprendizados para os próximos passos.'],
]

const faqs = [
  ['O que é o Método dos 7 Dias?', 'É uma jornada digital de 7 dias que combina reflexão, fé, orações, áudios guiados, gratidão e pequenas ações práticas. A proposta é oferecer um momento estruturado para você sair do automático e olhar para seus próximos passos com mais clareza.'],
  ['Preciso ter alguma experiência religiosa?', 'Não. O material foi pensado como uma jornada de fé e reflexão. Você pode acompanhar no seu ritmo e adaptar os momentos às suas próprias crenças e práticas.'],
  ['Quanto tempo preciso por dia?', 'A proposta foi criada para caber na rotina. Reserve alguns minutos por dia para ler, ouvir o conteúdo e realizar a reflexão ou ação indicada.'],
  ['Como recebo o produto?', 'A compra será realizada pelo checkout da Hotmart. Após a confirmação do pagamento, o acesso é liberado conforme as condições apresentadas no checkout.'],
  ['Posso fazer os 7 dias em qualquer horário?', 'Sim. Não existe horário obrigatório. O mais importante é separar um momento em que você consiga estar presente e acompanhar a proposta do dia.'],
  ['O Método garante uma mudança na minha vida?', 'Nenhum material pode garantir um resultado específico. O Método foi criado para oferecer estrutura, reflexão e ações que podem ajudar você a olhar para sua caminhada de uma forma mais consciente.'],
]

function Icon({ type }: { type: string }) {
  const common = { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
  if (type === 'lock') return <svg {...common}><rect x="5" y="10" width="14" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>
  if (type === 'play') return <svg {...common}><circle cx="12" cy="12" r="9"/><path d="m10 8 6 4-6 4V8Z" fill="currentColor" stroke="none"/></svg>
  if (type === 'arrow') return <svg {...common}><path d="M5 12h13"/><path d="m13 7 5 5-5 5"/></svg>
  if (type === 'check') return <svg {...common}><path d="m5 12 4 4L19 6"/></svg>
  if (type === 'spark') return <svg {...common}><path d="m12 3 1.4 5.1L18 10l-4.6 1.9L12 17l-1.4-5.1L6 10l4.6-1.9L12 3Z"/><path d="m19 16 .6 2.2L22 19l-2.4.8L19 22l-.6-2.2L16 19l2.4-.8L19 16Z"/></svg>
  if (type === 'book') return <svg {...common}><path d="M5 4.5A2.5 2.5 0 0 1 7.5 2H19v17H7.5A2.5 2.5 0 0 0 5 21.5v-17Z"/><path d="M5 19.5A2.5 2.5 0 0 1 7.5 17H19"/></svg>
  return <svg {...common}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
}

function CTA({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <a className={`cta ${className}`} href={HOTMART_URL} target={HOTMART_URL === '#' ? undefined : '_blank'} rel={HOTMART_URL === '#' ? undefined : 'noreferrer'}>{children}<Icon type="arrow" /></a>
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeFaq, setActiveFaq] = useState<number | null>(null)

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.reveal')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <main>
      <header className="nav-wrap">
        <nav className="nav container">
          <a href="#top" className="brand" onClick={closeMenu}>
            <span className="brand-mark">⌁</span>
            <span><strong>MÉTODO DOS 7 DIAS</strong><small>DESTRAVANDO NOVOS CAMINHOS</small></span>
          </a>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu">{menuOpen ? '×' : '☰'}</button>
          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <a href="#metodo" onClick={closeMenu}>O método</a>
            <a href="#jornada" onClick={closeMenu}>7 dias</a>
            <a href="#video" onClick={closeMenu}>Vídeo</a>
            <a href="#duvidas" onClick={closeMenu}>Dúvidas</a>
            <CTA className="nav-cta">Quero começar</CTA>
          </div>
        </nav>
      </header>

      <section id="top" className="hero">
        <div className="hero-glow" />
        <div className="hero-orbit orbit-one" />
        <div className="hero-orbit orbit-two" />
        <div className="container hero-grid">
          <div className="hero-copy reveal">
            <div className="eyebrow"><span /> FÉ · REFLEXÃO · GRATIDÃO · AÇÃO</div>
            <p className="kicker">UMA JORNADA DIGITAL DE 7 DIAS</p>
            <h1>Destrave novos <em>caminhos</em> sem precisar ter todas as respostas.</h1>
            <p className="hero-text">Um método simples para parar, refletir, fortalecer sua fé e transformar pequenos pensamentos em próximos passos.</p>
            <div className="hero-actions">
              <CTA>Quero começar por R$ 9,99</CTA>
              <a className="text-link" href="#video">Conhecer o método <span>↓</span></a>
            </div>
            <div className="trust-row">
              <span><Icon type="lock" /> Compra processada pela Hotmart</span>
              <span><Icon type="book" /> Produto digital</span>
              <span><Icon type="check" /> Acesso conforme checkout</span>
            </div>
          </div>
          <div className="hero-art reveal delay-2">
            <div className="sun-halo" />
            <div className="mountain m1" /><div className="mountain m2" /><div className="mountain m3" />
            <div className="path" />
            <div className="traveler"><span /></div>
            <div className="hero-quote">“Novos caminhos começam<br />quando você decide dar<br /><strong>o próximo passo.</strong>”</div>
            <div className="gold-line" />
          </div>
        </div>
      </section>

      <section className="intro section" id="metodo">
        <div className="container intro-grid">
          <div className="reveal">
            <p className="section-label">O QUE É O MÉTODO</p>
            <h2>Mais do que consumir conteúdo. <em>É viver uma jornada.</em></h2>
            <p>Durante 7 dias, você recebe uma sequência pensada para criar um momento diário de pausa, presença e ação. Sem complicar. Sem exigir horas da sua rotina.</p>
            <div className="quote-line"><span>“</span><p>Você não precisa enxergar todo o caminho. Precisa apenas conseguir enxergar o próximo passo.</p></div>
          </div>
          <div className="benefit-grid reveal delay-1">
            {benefits.map(([n, title, text]) => <article className="benefit" key={n}><span className="number">{n}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="video-section section" id="video">
        <div className="container video-grid">
          <div className="video-copy reveal">
            <p className="section-label">ANTES DE DECIDIR</p>
            <h2>Veja o que existe por trás dos <em>7 dias.</em></h2>
            <p>Assista ao vídeo explicativo e entenda como funciona a jornada, o que você recebe e como aproveitar melhor cada etapa.</p>
            <div className="video-note"><Icon type="play" /><span>Coloque aqui seu vídeo principal de vendas ou apresentação.</span></div>
          </div>
          <div className="video-frame reveal delay-1">
            {VIDEO_URL ? <video controls playsInline poster="/capa-metodo-7-dias.png" src={VIDEO_URL} /> : <div className="video-placeholder" style={{ backgroundImage: "url('/capa-metodo-7-dias.png')" }}><div className="video-overlay" /><button className="play-button" aria-label="Vídeo explicativo"><Icon type="play" /></button><div className="video-placeholder-copy"><span>SEU VÍDEO ENTRA AQUI</span><strong>Apresente o Método dos 7 Dias</strong><small>Configure NEXT_PUBLIC_VIDEO_URL ou adicione o arquivo de vídeo ao projeto.</small></div></div>}
          </div>
        </div>
      </section>

      <section className="journey section" id="jornada">
        <div className="container">
          <div className="section-head reveal"><div><p className="section-label">A JORNADA</p><h2>7 dias. <em>Um passo por vez.</em></h2></div><p>O conteúdo foi organizado para que cada dia tenha uma intenção diferente. Você não precisa correr: precisa estar presente.</p></div>
          <div className="day-list">
            {days.map(([day, title, text], i) => <article className="day-card reveal" style={{ transitionDelay: `${i * 70}ms` }} key={day}><span>{day}</span><div className="day-dot">{i + 1}</div><div><h3>{title}</h3><p>{text}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="product section">
        <div className="container product-grid">
          <div className="product-visual reveal">
            <div className="book-shadow" />
            <Image src="/capa-metodo-7-dias.png" alt="Capa do Método dos 7 Dias — Destravando Novos Caminhos" width={1024} height={1536} priority />
            <div className="floating-note note-one">7 dias<br /><strong>de jornada</strong></div>
            <div className="floating-note note-two">fé +<br /><strong>ação</strong></div>
          </div>
          <div className="product-copy reveal delay-1">
            <p className="section-label">O QUE VOCÊ RECEBE</p>
            <h2>Um material para voltar quando precisar <em>recomeçar.</em></h2>
            <ul className="check-list">
              <li><Icon type="check" /><span><strong>Reflexões diárias</strong> para acompanhar cada etapa.</span></li>
              <li><Icon type="check" /><span><strong>Orações específicas</strong> para momentos da jornada.</span></li>
              <li><Icon type="check" /><span><strong>Áudios guiados</strong> para ouvir onde estiver.</span></li>
              <li><Icon type="check" /><span><strong>Diário dos 7 dias</strong> para registrar sua caminhada.</span></li>
              <li><Icon type="check" /><span><strong>Bônus exclusivos</strong> apresentados no material.</span></li>
            </ul>
            <CTA>Quero receber o Método</CTA>
            <p className="small-trust"><Icon type="lock" /> Você será direcionado ao checkout da Hotmart.</p>
          </div>
        </div>
      </section>

      <section className="offer section" id="oferta">
        <div className="container offer-card reveal">
          <div className="offer-copy">
            <p className="section-label">SEU PRÓXIMO PASSO</p>
            <h2>Comece sua jornada por <em>R$ 9,99.</em></h2>
            <p>Um investimento pequeno para reservar um espaço na sua rotina e começar os 7 dias com intenção.</p>
            <div className="price"><small>apenas</small><strong>R$ 9<span>,99</span></strong></div>
            <CTA>Quero começar agora</CTA>
            <div className="secure"><Icon type="lock" /><span><strong>Pagamento seguro</strong><br />Você será direcionado para o checkout da Hotmart.</span></div>
          </div>
          <div className="offer-side">
            <div className="offer-ring"><span>7</span><small>DIAS</small></div>
            <p>Você não precisa mudar tudo hoje.</p><strong>Comece com um passo.</strong>
          </div>
        </div>
      </section>

      <section className="faq section" id="duvidas">
        <div className="container faq-grid">
          <div className="reveal"><p className="section-label">AINDA TEM DÚVIDAS?</p><h2>Talvez sua resposta <em>esteja aqui.</em></h2><p>Se alguma informação importante ainda não ficou clara, confira as perguntas abaixo.</p></div>
          <div className="faq-list reveal delay-1">
            {faqs.map(([q, a], i) => <div className={`faq-item ${activeFaq === i ? 'active' : ''}`} key={q}><button onClick={() => setActiveFaq(activeFaq === i ? null : i)}><span>{q}</span><b>{activeFaq === i ? '−' : '+'}</b></button>{activeFaq === i && <div className="faq-answer"><p>{a}</p></div>}</div>)}
          </div>
        </div>
      </section>

      <section className="final-cta section">
        <div className="container final-inner reveal">
          <span className="final-mark">✦</span>
          <p className="section-label">UM NOVO COMEÇO PODE SER SIMPLES</p>
          <h2>Talvez você não precise de mais respostas.<br /><em>Talvez precise começar.</em></h2>
          <p>Reserve alguns minutos. Faça os 7 dias. Veja o que acontece quando reflexão encontra ação.</p>
          <CTA>Quero começar por R$ 9,99</CTA>
          <small>Produto digital • Checkout pela Hotmart</small>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner"><div className="brand"><span className="brand-mark">⌁</span><span><strong>MÉTODO DOS 7 DIAS</strong><small>DESTRAVANDO NOVOS CAMINHOS</small></span></div><span>© {new Date().getFullYear()} • Todos os direitos reservados.</span><a href="#duvidas">Dúvidas</a></div>
      </footer>

      <a className="floating-cta" href={HOTMART_URL} target={HOTMART_URL === '#' ? undefined : '_blank'} rel={HOTMART_URL === '#' ? undefined : 'noreferrer'}><span>Comece por</span><strong>R$ 9,99</strong><Icon type="arrow" /></a>
    </main>
  )
}
