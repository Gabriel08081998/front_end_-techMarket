# Mobile First - TechMarket Banking System 🏦

Sistema bancário completo com interface mobile-first, incluindo login, loading screen, dashboard e extrato bancário.

**Projeto Integrado Interdisciplinar - Análise e Desenvolvimento de Sistemas**

---

## 📋 ATENDIMENTO AOS REQUISITOS DO PROJETO INTEGRADO

Este projeto atende aos seguintes passos solicitados no Projeto Integrado:

### ✅ **Passo 3: PROGRAMAÇÃO WEB**
**Requisito:** Criar extrato bancário responsivo com foco em usabilidade móvel
- ✅ **Responsivo para smartphones** - Layout Mobile First implementado
- ✅ **Destaque para transações acima de R$ 5.000** - Borda vermelha e negrito
- ✅ **Boa performance de carregamento** - JavaScript vanilla otimizado
- **Arquivo:** `extrato.html`

### ✅ **Passo 5: DESENVOLVIMENTO EM JAVASCRIPT**
**Requisito:** Validação de formulário de abertura de conta
- ✅ **Verificar se o CPF possui 11 dígitos** - Validação completa com algoritmo oficial
- ✅ **Validar data de nascimento** - Verifica idade mínima de 18 anos
- ✅ **Validar número de telefone** - Formato brasileiro (XX) XXXXX-XXXX
- **Arquivo:** `formulario-conta.html`

### 📝 **Observação sobre Passos 1, 2 e 4:**
Os Passos 1 (Computação em Nuvem), 2 (Frameworks/API REST) e 4 (Banco de Dados/Procedures) requerem implementação de backend e infraestrutura de nuvem, que estão fora do escopo desta entrega focada em **frontend web e JavaScript**.

---

## 🎯 Fluxo Completo da Aplicação

1. **Login** → 2. **Loading** → 3. **Dashboard** → 4. **Extrato/Outras Funcionalidades**

## 🎓 DETALHAMENTO DAS SOLUÇÕES IMPLEMENTADAS

### **PASSO 3: Extrato Bancário Responsivo (PROGRAMAÇÃO WEB)**

**Contexto do Problema:**
> "Usuários reclamam que não conseguem visualizar o extrato de suas compras em smartphones. Além disso, valores altos de transações acabam passando despercebidos, dificultando o controle financeiro do cliente."

**Solução Implementada:**

1. **Responsividade Mobile First**
   - Layout utilizando **Flexbox** e **CSS Grid**
   - Meta tag viewport configurada
   - Design adaptativo de 320px até desktop
   - Touch-friendly com botões e espaçamentos adequados
   - Testado em múltiplos dispositivos

2. **Destaque para Transações > R$ 5.000**
   - Classe CSS `.valor-alto` aplicada automaticamente
   - Borda esquerda vermelha (4px solid #e74c3c)
   - Peso da fonte em negrito (font-weight: bold)
   - Verificação via JavaScript: `Math.abs(trans.valor) > 5000`

3. **Performance Otimizada**
   - JavaScript vanilla (sem frameworks pesados)
   - Carregamento assíncrono de transações
   - Animações CSS3 com GPU acceleration
   - Código minificado e otimizado
   - Imagens substituídas por emojis (sem requisições extras)

**Tecnologias:** HTML5, CSS3 (Flexbox/Grid), JavaScript ES6

---

### **PASSO 5: Validação de Formulário (DESENVOLVIMENTO EM JAVASCRIPT)**

**Contexto do Problema:**
> "Muitos usuários informam CPF, data de nascimento ou telefone incorretamente. Você foi encarregado de implementar as validações básicas."

**Solução Implementada:**

1. **Validação de CPF (11 dígitos)**
   ```javascript
   - Remove caracteres não numéricos: cpf.replace(/\D/g, '')
   - Verifica exatamente 11 dígitos: cpf.length === 11
   - Valida dígitos verificadores (algoritmo oficial)
   - Rejeita CPFs com dígitos repetidos (111.111.111-11)
   - Máscara automática: 000.000.000-00
   ```

2. **Validação de Data de Nascimento**
   ```javascript
   - Verifica se data é válida: !isNaN(dataNasc.getTime())
   - Calcula idade exata considerando mês e dia
   - Valida idade mínima de 18 anos
   - Impede datas futuras
   - Ajusta para timezone local
   ```

3. **Validação de Telefone**
   ```javascript
   - Regex para formato brasileiro: /^\(\d{2}\) \d{4,5}-\d{4}$/
   - Aceita celular (9 dígitos) e fixo (8 dígitos)
   - Máscara automática: (XX) XXXXX-XXXX
   - Validação em tempo real (evento blur)
   ```

**Recursos Adicionais:**
- ✅ Feedback visual em tempo real (bordas verdes/vermelhas)
- ✅ Mensagens de erro específicas para cada campo
- ✅ Validação antes do submit do formulário
- ✅ Animação de shake nos erros
- ✅ Máscaras automáticas durante digitação

**Tecnologias:** JavaScript ES6, DOM API, Regex, Event Listeners

---

## � INTEGRAÇÃO COM BACKEND

Este projeto está preparado para se comunicar com o backend Java/Spring Boot da TechMarket.

### Arquivos de Integração:
- **`api-service.js`** - Service de comunicação com API REST
- **`transferencia.html`** - Página de transferências funcionais
- **`INTEGRACAO_BACKEND.md`** - Guia completo de integração

### Endpoints Integrados:
✅ `GET /api/contas/{id}/saldo` - Buscar saldo da conta  
✅ `GET /api/transacoes/conta/{id}` - Buscar transações  
✅ `POST /api/transacoes/transferir` - Realizar transferência  

### Para Ativar a Integração:

1. **Inicie o backend Java:**
   ```bash
   cd TechMarket
   mvn spring-boot:run
   ```

2. **Abra o frontend com Live Server:**
   - Instale a extensão "Live Server" no VS Code
   - Clique com botão direito em `index.html`
   - Selecione "Open with Live Server"

3. **Teste a transferência:**
   - Login → Dashboard → Transferir
   - Conta Destino: 2
   - Valor: 100.00

**Consulte `INTEGRACAO_BACKEND.md` para instruções completas!**

---

## �📱 Páginas Criadas

### 1. Login (`login.html`)
Tela inicial de autenticação do sistema bancário.

**Recursos:**
- ✅ Design moderno com gradiente
- ✅ Logo do banco (TB - TechMarket Bank)
- ✅ Formulário de login com CPF e senha
- ✅ Máscara automática para CPF
- ✅ Botão de "Acesso Rápido" para demonstração
- ✅ Link para abertura de conta
- ✅ Armazena dados no localStorage
- ✅ Totalmente responsivo

### 2. Loading Screen (`loading.html`)
Tela de carregamento animada exibida após o login.

**Recursos:**
- ✅ Animação de logo com efeito pulse
- ✅ Spinner de carregamento
- ✅ Barra de progresso animada
- ✅ Mensagens de status dinâmicas
- ✅ Verificação de autenticação
- ✅ Transição automática para dashboard (3 segundos)
- ✅ Design elegante com gradiente

**Mensagens de Status:**
- "Verificando credenciais"
- "Carregando seus dados"
- "Sincronizando informações"
- "Preparando dashboard"
- "Quase pronto"

### 3. Dashboard (`dashboard.html`)
Página principal do banco após login.

**Recursos:**
- ✅ Header com informações do usuário
- ✅ Avatar com iniciais do nome
- ✅ Saldo disponível (com opção de ocultar)
- ✅ 4 Ações rápidas: Pix, Pagar, Transferir, Depositar
- ✅ Lista de últimas transações
- ✅ Seção de serviços (Cartão, Empréstimos, Investimentos, Seguros)
- ✅ Navegação inferior fixa (Home, Extrato, Avisos, Perfil)
- ✅ Botão de logout
- ✅ Animações suaves
- ✅ Design com cards e ícones

### 4. Extrato Completo (`extrato.html`)
Página detalhada de todas as transações bancárias.

**Recursos:**
- ✅ Header com botão de voltar
- ✅ Filtros de transação (Todos, Receitas, Despesas, Pix)
- ✅ Card de resumo financeiro (Total receitas, despesas e saldo)
- ✅ Lista completa de transações com ícones
- ✅ Destaque para transações acima de R$ 5.000
- ✅ Formatação de datas (Hoje, Ontem, DD/MM)
- ✅ Diferenciação visual entre débitos e créditos
- ✅ Navegação inferior
- ✅ Efeito hover nos cards
- ✅ Sistema de filtros funcional

### 5. Formulário de Abertura de Conta (`formulario-conta.html`)
Formulário completo para criar nova conta no banco.

**Recursos:**
- ✅ Validação completa de CPF com algoritmo oficial
- ✅ Validação de idade mínima (18 anos)
- ✅ Validação de telefone brasileiro
- ✅ Máscaras automáticas (CPF e telefone)
- ✅ Feedback visual em tempo real
- ✅ Mensagem de sucesso
- ✅ Redirecionamento automático para login após criar conta
- ✅ Animações suaves

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Flexbox, Grid, animações, gradientes e transições
- **JavaScript (Vanilla)**: DOM manipulation, validações, localStorage, máscaras
- **LocalStorage**: Gerenciamento de sessão do usuário

## 🚀 Como Usar

### Opção 1: Acesso Rápido (Demonstração)
1. Abra `login.html`
2. Clique em "🔐 Acesso Rápido"
3. Será redirecionado para a tela de loading
4. Após 3 segundos, chegará ao dashboard

### Opção 2: Login Manual
1. Abra `login.html`
2. Digite qualquer CPF (ex: 123.456.789-00)
3. Digite qualquer senha
4. Clique em "Entrar"
5. Tela de loading → Dashboard

### Opção 3: Criar Nova Conta
1. Na tela de login, clique em "✨ Abrir Conta"
2. Preencha o formulário com dados válidos:
   - **CPF**: 11 dígitos numéricos
   - **Data de Nascimento**: Pessoa com 18+ anos
   - **Telefone**: Formato (XX) XXXXX-XXXX
3. Clique em "Abrir Conta"
4. Após sucesso, será redirecionado para o login

## 🎨 Design System

### Paleta de Cores
- **Primário**: #667eea (Azul/Roxo)
- **Secundário**: #764ba2 (Roxo escuro)
- **Sucesso**: #2ecc71 (Verde)
- **Erro**: #e74c3c (Vermelho)
- **Texto Principal**: #2c3e50 (Cinza escuro)
- **Texto Secundário**: #7f8c8d (Cinza)
- **Background**: #f5f7fa (Cinza claro)

### Tipografia
- **Fonte**: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- **Títulos**: 1.5em - 2em, peso 600-700
- **Corpo**: 0.9em - 1em, peso 400-500

### Ícones
- **Emojis**: Utilizados para melhor visualização mobile
- **Flexíveis**: Funcionam em todos os dispositivos

## 🔒 Funcionalidades de Segurança

### Validação de CPF
- Verifica 11 dígitos
- Rejeita CPFs com dígitos repetidos (111.111.111-11)
- Algoritmo completo de validação dos dígitos verificadores

### Gerenciamento de Sessão
- LocalStorage para persistência de login
- Verificação de autenticação em todas as páginas
- Logout limpa dados do localStorage
- Redirecionamento automático se não autenticado

## 📊 Dados de Exemplo

### Transações no Dashboard
- Compra Online - Loja A: -R$ 150,00
- Depósito: +R$ 2.000,00
- Compra Supermercado: -R$ 320,50
- Transferência Recebida: +R$ 5.500,00 (destacada)

### Extrato Completo
- 8 transações de exemplo
- Filtros funcionais por tipo
- Resumo financeiro calculado automaticamente

## 🎯 Funcionalidades Especiais

### Tela de Loading
- **Duração**: 3 segundos
- **Animações**: Logo pulsante, spinner, barra de progresso
- **Mensagens**: 5 status diferentes alternando a cada 600ms
- **Verificação**: Checa autenticação antes de carregar

### Dashboard Interativo
- **Saldo Oculto**: Clique no ícone 👁️ para ocultar/mostrar
- **Ações Rápidas**: 4 botões principais
- **Navegação**: Menu inferior fixo
- **Animações**: Fade in ao carregar

### Extrato com Filtros
- **4 Filtros**: Todos, Receitas, Despesas, Pix
- **Resumo Dinâmico**: Atualiza conforme filtro
- **Destaque Visual**: Transações > R$ 5.000,00

## 📱 Responsividade

### Mobile First Approach
1. Design inicial para telas pequenas (320px+)
2. Touch-friendly (botões grandes, espaçamento adequado)
3. Navegação otimizada para mobile
4. Cards empilhados verticalmente

### Desktop
- Largura máxima: 600px
- Centralizado na tela
- Mantém experiência mobile

## 🔄 Fluxo de Navegação

```
login.html
    ↓
loading.html (3s)
    ↓
dashboard.html
    ↓
├─→ extrato.html (Ver extrato completo)
├─→ formulario-conta.html (Abrir conta)
└─→ Outras funcionalidades (em desenvolvimento)
```

## 📝 Estrutura de Arquivos

```
Mobile First/
├── login.html              # Tela de login
├── loading.html            # Tela de carregamento
├── dashboard.html          # Dashboard principal
├── extrato.html            # Extrato completo
├── formulario-conta.html   # Abertura de conta
└── README.md              # Esta documentação
```

## 🚧 Funcionalidades Futuras

- [ ] Integração com API backend
- [ ] Autenticação real (JWT/OAuth)
- [ ] Notificações push
- [ ] Perfil do usuário editável
- [ ] Histórico de transações com paginação
- [ ] Gráficos de gastos
- [ ] Exportação de extrato (PDF)
- [ ] Biometria/FaceID
- [ ] Modo escuro
- [ ] Multi-idioma

## � Notas Técnicas

- **Sem dependências**: Todo código é vanilla (sem frameworks)
- **LocalStorage**: Usado para simular autenticação
- **Validações**: Frontend e backend em produção
- **Comentários**: Código documentado em português
- **Performance**: Carregamento rápido, animações otimizadas
- **Acessibilidade**: Estrutura semântica, contraste adequado

---

**Desenvolvido para o projeto Mobile First de Programação Web**  
**TechMarket Bank - Sua experiência bancária digital** 💳
