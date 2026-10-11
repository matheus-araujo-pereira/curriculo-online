// main.js - Modern Interactive Cloud DevOps Portfolio
import './styles.css';

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initTerminal();
  initSkillsFilter();
  initClipboardActions();
  initScrollSpy();
  initBackToTop();
});

/* ==========================================================================
   1. NAVBAR & MOBILE DRAWER
   ========================================================================== */
function initNavbar() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  const navbar = document.getElementById('main-nav');

  if (menuBtn && mobileMenu) {
    const toggleMenu = () => {
      const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('hidden');
      document.body.classList.toggle('overflow-hidden', !isExpanded);
    };

    menuBtn.addEventListener('click', toggleMenu);

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuBtn.setAttribute('aria-expanded', 'false');
        mobileMenu.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
      });
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
        toggleMenu();
      }
    });
  }

  // Navbar glass effect on scroll
  window.addEventListener('scroll', () => {
    if (navbar) {
      if (window.scrollY > 40) {
        navbar.classList.add('bg-[#0A0F1D]/90', 'backdrop-blur-md', 'border-b', 'border-gray-800/80', 'shadow-lg');
        navbar.classList.remove('bg-transparent');
      } else {
        navbar.classList.remove('bg-[#0A0F1D]/90', 'backdrop-blur-md', 'border-b', 'border-gray-800/80', 'shadow-lg');
        navbar.classList.add('bg-transparent');
      }
    }
  });
}

/* ==========================================================================
   2. INTERACTIVE DEVOPS TERMINAL
   ========================================================================== */
function initTerminal() {
  const terminalBody = document.getElementById('terminal-output');
  const commandInput = document.getElementById('terminal-input');
  const terminalForm = document.getElementById('terminal-form');
  const quickCmdButtons = document.querySelectorAll('.quick-cmd-btn');

  if (!terminalBody || !commandInput) return;

  const COMMANDS = {
    help: () => `
<div class="text-cyan-400 font-semibold mb-1">Comandos Disponíveis:</div>
<div class="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs">
  <div><span class="text-emerald-400 font-mono">summary</span> : Resumo executivo do perfil</div>
  <div><span class="text-emerald-400 font-mono">skills</span> : Stack tecnológica principal</div>
  <div><span class="text-emerald-400 font-mono">experience</span> : Experiência SEMFAZ & SOFTEAM</div>
  <div><span class="text-emerald-400 font-mono">aws</span> : Status e serviços de Cloud AWS</div>
  <div><span class="text-emerald-400 font-mono">contact</span> : Canais de comunicação direta</div>
  <div><span class="text-emerald-400 font-mono">whoami</span> : Identidade do profissional</div>
  <div><span class="text-emerald-400 font-mono">uname -a</span> : Detalhes do ambiente operacional</div>
  <div><span class="text-emerald-400 font-mono">clear</span> : Limpar a tela do console</div>
</div>
`,
    summary: () => `
<div class="text-gray-300">
  <span class="text-cyan-400 font-semibold">Matheus Araujo Pereira</span> — Cloud DevOps Engineer<br>
  Especialista em ecossistema Java (Spring Boot), automação de infraestrutura AWS e administração Linux (Debian/Red Hat).<br>
  Histórico em sistemas governamentais e corporativos de missão crítica, com Quality Gates (100% JaCoCo) e PIX em tempo real.
</div>
`,
    skills: () => `
<div class="text-gray-300 space-y-1">
  <div><span class="text-sky-400 font-bold">[Cloud AWS]</span> EC2, S3, RDS, IAM Roles/Policies, VPC, CloudWatch</div>
  <div><span class="text-emerald-400 font-bold">[DevOps]</span> Docker, Multi-Stage Builds, Jenkins CI/CD, Git/GitHub</div>
  <div><span class="text-amber-400 font-bold">[Linux]</span> Debian, Red Hat (RHEL), WSL2, Shell Script (Bash)</div>
  <div><span class="text-purple-400 font-bold">[Backend]</span> Java 8/17/21, Spring Boot, Kafka, RabbitMQ, Clean Arch</div>
  <div><span class="text-blue-400 font-bold">[Quality/DB]</span> JUnit 5, JaCoCo (100%), PostgreSQL, Oracle DB, MySQL</div>
</div>
`,
    experience: () => `
<div class="text-gray-300 space-y-2">
  <div>
    <span class="text-cyan-400 font-bold">1. SEMFAZ Aracaju</span> (2023 - Atual) - Backend & DevOps<br>
    <span class="text-xs text-gray-400">Integração PIX municipal em tempo real, Jenkins Quality Gates (100% JaCoCo), Refatoração Java 17/21.</span>
  </div>
  <div>
    <span class="text-emerald-400 font-bold">2. SOFTEAM</span> (2022 - 2025) - Cloud DevOps & Backend<br>
    <span class="text-xs text-gray-400">Infra AWS (EC2/S3/RDS/IAM), mensageria distribuída Kafka/RabbitMQ, Linux corporativo.</span>
  </div>
</div>
`,
    aws: () => `
<div class="text-gray-300">
  <span class="text-sky-400 font-bold">AWS Status:</span> <span class="text-emerald-400">ONLINE</span> (us-east-1)<br>
  - IAM: Menor privilégio configurado para Roles & Policies<br>
  - Compute & Storage: EC2 Autoscaling, S3 Buckets privados com versionamento<br>
  - Database: RDS Multi-AZ PostgreSQL & MySQL com snapshots automatizados<br>
  - Monitoramento: Métricas de latência e alarmes no CloudWatch
</div>
`,
    contact: () => `
<div class="text-gray-300 space-y-1">
  <div>E-mail: <a href="mailto:matharaupere@gmail.com" class="text-cyan-400 underline hover:text-cyan-300">matharaupere@gmail.com</a></div>
  <div>WhatsApp: <a href="https://wa.me/5579999984882" target="_blank" class="text-emerald-400 underline hover:text-emerald-300">+55 (79) 99998-4882</a></div>
  <div>LinkedIn: <a href="https://linkedin.com/in/matheus-araujo-pereira" target="_blank" class="text-sky-400 underline hover:text-sky-300">linkedin.com/in/matheus-araujo-pereira</a></div>
  <div>GitHub: <a href="https://github.com/matheus-araujo-pereira" target="_blank" class="text-gray-300 underline hover:text-white">github.com/matheus-araujo-pereira</a></div>
</div>
`,
    whoami: () => `<div class="text-cyan-400">matheus (Cloud DevOps Engineer & M.Sc. Student @ UFS)</div>`,
    'uname -a': () => `<div class="text-gray-300">Linux cloud-devops-node-01 6.8.0-cloud #1 SMP PREEMPT_DYNAMIC AWS x86_64 GNU/Linux</div>`,
  };

  function executeCommand(rawCmd) {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === 'clear') {
      terminalBody.innerHTML = '';
      return;
    }

    const commandLineEl = document.createElement('div');
    commandLineEl.className = 'flex items-center space-x-2 text-xs sm:text-sm text-gray-400 mt-2 font-mono';
    commandLineEl.innerHTML = `
      <span class="text-cyan-400">matheus@devops</span>:<span class="text-emerald-400">~</span>$ 
      <span class="text-gray-100">${escapeHtml(rawCmd)}</span>
    `;
    terminalBody.appendChild(commandLineEl);

    const outputEl = document.createElement('div');
    outputEl.className = 'text-xs sm:text-sm text-gray-300 font-mono mt-1 mb-2 leading-relaxed';

    if (COMMANDS[cmd]) {
      outputEl.innerHTML = COMMANDS[cmd]();
    } else if (cmd === 'cat summary.json') {
      outputEl.innerHTML = COMMANDS.summary();
    } else if (cmd.startsWith('aws')) {
      outputEl.innerHTML = COMMANDS.aws();
    } else if (cmd.startsWith('pix') || cmd.includes('semfaz')) {
      outputEl.innerHTML = `
<div class="text-emerald-400 font-bold">[SEMFAZ PIX MODULE]</div>
<div class="text-gray-300">Liquidação instantânea de tributos (IPTU, ISS, ITBI, certidões) integrada à compensação bancária e REDESIM. Resposta em sub-segundo.</div>
`;
    } else {
      outputEl.innerHTML = `<span class="text-red-400">Comando não reconhecido: "${escapeHtml(rawCmd)}". Digite <span class="text-cyan-300 font-bold underline cursor-pointer" onclick="window.runQuickCmd('help')">help</span> para a lista.</span>`;
    }

    terminalBody.appendChild(outputEl);
    terminalBody.scrollTop = terminalBody.scrollHeight;
  }

  window.runQuickCmd = (cmd) => {
    commandInput.value = cmd;
    executeCommand(cmd);
    commandInput.value = '';
    commandInput.focus();
  };

  quickCmdButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const cmd = btn.getAttribute('data-cmd');
      if (cmd) window.runQuickCmd(cmd);
    });
  });

  if (terminalForm) {
    terminalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      executeCommand(commandInput.value);
      commandInput.value = '';
    });
  }
}

/* ==========================================================================
   3. SKILLS CATEGORY FILTER
   ========================================================================== */
function initSkillsFilter() {
  const filterButtons = document.querySelectorAll('.skill-filter-btn');
  const skillCards = document.querySelectorAll('.skill-card');

  if (!filterButtons.length || !skillCards.length) return;

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-filter');

      // Update active button state
      filterButtons.forEach(b => {
        b.classList.remove('bg-sky-500/20', 'text-sky-300', 'border-sky-500/50');
        b.classList.add('bg-gray-800/60', 'text-gray-400', 'border-gray-750');
      });
      btn.classList.add('bg-sky-500/20', 'text-sky-300', 'border-sky-500/50');
      btn.classList.remove('bg-gray-800/60', 'text-gray-400', 'border-gray-750');

      // Filter cards
      skillCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (category === 'all' || cardCategory === category) {
          card.classList.remove('hidden');
          card.classList.add('animate-fadeIn');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}

/* ==========================================================================
   4. CLIPBOARD & QUICK ACTIONS
   ========================================================================== */
function initClipboardActions() {
  const copyButtons = document.querySelectorAll('.copy-btn');
  const toast = document.getElementById('toast-notification');

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.remove('opacity-0', 'translate-y-4', 'pointer-events-none');
    toast.classList.add('opacity-100', 'translate-y-0');

    setTimeout(() => {
      toast.classList.remove('opacity-100', 'translate-y-0');
      toast.classList.add('opacity-0', 'translate-y-4', 'pointer-events-none');
    }, 3000);
  }

  copyButtons.forEach(btn => {
    btn.addEventListener('click', async () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      try {
        await navigator.clipboard.writeText(textToCopy);
        const originalText = btn.innerHTML;
        btn.innerHTML = `
          <svg class="w-4 h-4 text-emerald-400 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <span class="text-emerald-400">Copiado!</span>
        `;
        showToast(`Copiado: "${textToCopy}"`);

        setTimeout(() => {
          btn.innerHTML = originalText;
        }, 2200);
      } catch (err) {
        console.error('Falha ao copiar:', err);
      }
    });
  });
}

/* ==========================================================================
   5. SCROLLSPY
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.desktop-nav-link');

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('text-sky-400', 'border-b-2', 'border-sky-400');
            link.classList.remove('text-gray-300');
          } else {
            link.classList.remove('text-sky-400', 'border-b-2', 'border-sky-400');
            link.classList.add('text-gray-300');
          }
        });
      }
    });
  }, {
    rootMargin: '-20% 0px -70% 0px'
  });

  sections.forEach(section => observer.observe(section));
}

/* ==========================================================================
   6. BACK TO TOP
   ========================================================================== */
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
      backToTopBtn.classList.add('opacity-100', 'translate-y-0');
    } else {
      backToTopBtn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
      backToTopBtn.classList.remove('opacity-100', 'translate-y-0');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Helper: Escape HTML
function escapeHtml(string) {
  const div = document.createElement('div');
  div.textContent = string;
  return div.innerHTML;
}

