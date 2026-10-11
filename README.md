# 🚀 Matheus Pereira — Cloud DevOps Engineer | Online Resume

[![Vercel Deployment](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)
[![AWS](https://img.shields.io/badge/AWS-Cloud%20Architecture-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=FF9900)](https://aws.amazon.com)
[![Linux](https://img.shields.io/badge/Linux-Debian%20%7C%20RHEL-FCC624?style=for-the-badge&logo=linux&logoColor=black)](https://kernel.org)
[![Java](https://img.shields.io/badge/Java-8%20%7C%2017%20%7C%2021-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)](https://openjdk.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-Modern%20UI-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Docker](https://img.shields.io/badge/Docker-Containers-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://docker.com)
[![Jenkins](https://img.shields.io/badge/Jenkins-CI%2FCD%20Pipelines-D24939?style=for-the-badge&logo=jenkins&logoColor=white)](https://jenkins.io)

Landing Page e Currículo Online executivo de **Matheus Araujo Pereira**, Engenheiro Cloud DevOps com sólida bagagem no ecossistema Java (Spring Boot), automação de infraestrutura em nuvem (AWS), sistemas Linux corporativos e esteiras de integração contínua (CI/CD).

---

## 🌐 Visão Geral do Projeto & Arquitetura

O projeto foi concebido seguindo a filosofia de **alta performance, design corporativo e zero bloatware**, garantindo pontuação máxima (100/100) no Google Lighthouse / Core Web Vitals e carregamento em tempo inferior a 200ms.

```
curriculo-online/
├── curriculo_matheus_araujo_pereira_java_aws_linux.pdf  # PDF original para download
├── public/
│   ├── curriculo_matheus_araujo_pereira_java_aws_linux.pdf
│   ├── favicon.svg                                      # Favicon SVG temático DevOps
│   └── robots.txt                                       # Diretrizes para indexadores
├── src/
│   ├── styles.css                                       # Design tokens, grid e glassmorphism
│   └── main.js                                          # Terminal interativo, filtros e UX
├── index.html                                           # Marcação semântica com Schema JSON-LD
├── vite.config.js                                       # Bundler de alta performance
├── package.json                                         # Dependências e scripts npm
├── vercel.json                                          # Configuração de headers e cache Vercel
└── .gitignore                                           # Arquivos ignorados pelo Git
```

---

## ✨ Principais Funcionalidades

### 🎨 1. Identidade Visual "Tech / Cloud DevOps"
- **Dark Mode Corporativo:** Paleta baseada em Deep Navy (`#0A0F1D` / `#0B132B`), Navy Intermediário (`#111827` / `#1C2541`) e bordas sutis.
- **Acentos Elétricos:** Ciano (`#38BDF8`) e Azul Elétrico (`#00B4D8`) para detalhes, ícones e estados ativos.
- **Status Ativo Pulsante:** Badge esmeralda (`#10B981`) indicando disponibilidade imediata para contratação (*Remoto ou Presencial*).
- **Tipografia:** `Inter` para leitura limpa e fontes monoespaçadas (`JetBrains Mono` / `Fira Code`) para dados técnicos.

### 💻 2. Terminal Interativo DevOps Embutido
- Console embutido estilo Linux/AWS CLI executável diretamente na página:
  - Comandos interativos suportados: `help`, `summary`, `skills`, `experience`, `aws`, `contact`, `whoami`, `uname -a`, `clear`.
  - Botões de clique rápido (*Quick Commands*) para navegação rápida em mobile ou desktop.

### ⏱️ 3. Linha do Tempo de Casos de Impacto
- **SEMFAZ (Secretaria Municipal da Fazenda de Aracaju):**
  - Integração do PIX municipal em tempo real para liquidação de IPTU, ISS, ITBI e certidões.
  - Quality Gates automáticos com Jenkins + JaCoCo.
  - 100% de cobertura de testes automatizados com JUnit 5 e TestNG.
  - Refatoração de bases legadas Java 8 para Java 17 e 21.
- **SOFTEAM:**
  - Arquitetura corporativa na AWS (EC2, S3, RDS, IAM, VPC, CloudWatch).
  - Mensageria distribuída com Apache Kafka e RabbitMQ.
  - Administração de servidores Linux (Debian e Red Hat) e scripts Bash.
  - Capacitação técnica de mais de 20 desenvolvedores em Java Backend.

### 📊 4. Matriz de Competências com Filtro Dinâmico
- Filtros por categoria: *Cloud (AWS)*, *DevOps & CI/CD*, *Linux & Scripting*, *Backend & Mensageria*, *Bancos & Qualidade*.
- Destaque para governança IAM (menor privilégio), Docker multi-stage builds, modelagem de banco de dados (Oracle DB, PostgreSQL, MySQL) e Clean Architecture.

### 🎓 5. Formação & Trilha de Certificações
- Mestrado em Ciência da Computação (UFS) — Sistemas Distribuídos e Alto Desempenho.
- Bacharelado em Engenharia de Computação (UFS).
- Trilha de Certificações: **AWS SAA-C03**, **AWS CLF-C02** e **LPIC-1**.
- Idiomas: Português (Nativo) e Inglês Técnico (B1-B2).

### 🔍 6. SEO & Acessibilidade
- Meta tags completas Open Graph e Twitter Cards para compartilhamento enriquecido no LinkedIn, WhatsApp e Slack.
- Dados Estruturados Schema.org (`Person`, `ProfilePage`) em formato JSON-LD.
- Semântica HTML5, atributos ARIA, foco visível e contraste WCAG AAA.

---

## 🛠️ Execução Local

### Pré-requisitos
- Node.js 18+ (recomendado Node.js 20 ou 22)
- npm, pnpm ou yarn

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone git@github.com:matheus-araujo-pereira/curriculo-online.git
   cd curriculo-online
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   Acesse a aplicação no navegador em `http://localhost:3000`.

4. **Gere a build de produção:**
   ```bash
   npm run build
   ```

5. **Pré-visualize a build localmente:**
   ```bash
   npm run preview
   ```

---

## ☁️ Guia de Deploy Contínuo na Vercel

O projeto possui integração nativa com a **Vercel** através do `vercel.json` e do bundler Vite, permitindo deploys automáticos a cada `git push` na branch `main`.

### Opção 1: Deploy pelo Dashboard Web da Vercel (Recomendado)

1. Acesse [vercel.com](https://vercel.com) e faça login com sua conta do GitHub.
2. Clique em **"Add New..."** > **"Project"**.
3. Selecione o repositório **`matheus-araujo-pereira/curriculo-online`** e clique em **Import**.
4. A Vercel detectará automaticamente as configurações:
   - **Framework Preset:** `Vite`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
5. Clique em **"Deploy"**.
6. Em menos de 30 segundos sua aplicação estará no ar com certificado SSL/HTTPS automático!

### Opção 2: Deploy via Vercel CLI

```bash
# Instale a CLI globalmente
npm i -g vercel

# Faça login
vercel login

# Faça o deploy de produção
vercel --prod
```

---

## 💡 Sugestões de Subdomínio Profissional na Vercel

Para configurar nas opções de domínio do projeto na Vercel (*Settings* > *Domains*), sugere-se uma das opções profissionais abaixo:

1. **`matheus-pereira-devops.vercel.app`** *(Recomendado — claro, focado na área e profissional)*
2. **`matheuspereira-cloud.vercel.app`** *(Foco em Cloud Engineering & AWS)*
3. **`matheus-araujo-devops.vercel.app`** *(Alinhado ao nome completo do autor)*
4. **`matheuspereira.dev`** *(Caso decida futuramente adquirir um domínio próprio)*

---

## 📞 Contato Direto

- **E-mail:** [matharaupere@gmail.com](mailto:matharaupere@gmail.com)
- **WhatsApp:** [+55 (79) 99998-4882](https://wa.me/5579999984882)
- **LinkedIn:** [linkedin.com/in/matheus-araujo-pereira](https://linkedin.com/in/matheus-araujo-pereira)
- **GitHub:** [github.com/matheus-araujo-pereira](https://github.com/matheus-araujo-pereira)

---

Desenvolvido por **Matheus Araujo Pereira** • 2026
