# 🗓️ Plano de Ação – Site "Quantos dias sem falar do Domingo?"

## 📝 TODO

- [x] Inicializar o projeto com Astro
- [x] Criar a estrutura de pastas
- [x] Implementar a lógica do contador
- [x] Implementar a lógica de backend com Vercel KV
- [x] Estilizar o site
- [x] Realizar testes locais
- [x] Fazer o deploy


## 🎯 Objetivo
Criar um site leve, divertido e romântico que mostre há quantos dias e horas **Sindoca** não menciona “O Domingo”.  
Quando ela mencionar novamente, o contador é **zerado** manualmente por meio de um botão.

Hospedagem: **Vercel**  
Stack sugerida: **Astro** (ou Next.js 14 com App Router) + **JavaScript puro / minimalista**

---

## 🧩 Estrutura do Projeto

```
src/
├── components/
│   ├── Counter.astro         # Componente principal do contador
│   └── ResetButton.astro     # Botão para reiniciar o contador
├── layouts/
│   └── Layout.astro          # Estrutura base (head + estilo global)
├── pages/
│   └── index.astro           # Página principal
├── styles/
│   └── main.css              # Estilização divertida e leve
└── utils/
    └── timer.js              # Lógica para cálculo do tempo decorrido

api/
└── last-reset.js           # Serverless function para o contador
```

---

## 🧠 Lógica Principal

### 1. Armazenamento
- O contador é baseado em um valor armazenado no **Vercel KV**.
- O frontend faz chamadas a uma API para obter e definir o valor.

### 2. Atualização do Contador
- Um `setInterval` atualiza o tempo a cada segundo.
- Mostra:
  ```
  X dias, Y horas, Z minutos e W segundos sem falar sobre o Domingo.
  ```

### 3. Resetar Contador
- O botão “Ela falou do Domingo 😅” redefine o contador:
  - Envia uma requisição para a API, que atualiza o valor no Vercel KV.
  - Reinicia a contagem do zero.

---

## 🧠 Lógica de Backend (Sincronização)

- Uma **Serverless Function** na Vercel (em `api/last-reset.js`) será responsável por:
  - **GET**: Retornar o timestamp do último reset, armazenado no Vercel KV.
  - **POST**: Atualizar o timestamp no Vercel KV para o valor atual.

---

## 🎨 Estilo e Identidade Visual

### Tema
- Cores base: branco (#fff) e rosa claro (#ff9eb5)  
- Tipografia divertida e romântica (ex: **Poppins**, **Quicksand** ou **Comic Neue**)
- Ícones leves (coração, sol, nuvem) opcionais para dar um toque carinhoso.

### Layout
- Fundo com gradiente suave (ex: rosa → branco).
- Texto centralizado.
- Animações suaves (transições, fade-in no contador).

### Exemplo visual:
```
💖 Já se passaram 3 dias, 4 horas e 12 minutos
desde que a Sindoca falou sobre o Domingo.

[ Ela falou de novo 😅 ]
```

---

## ⚙️ Funcionalidades Extras (opcionais)
- ✅ Mostrar a data do último “reset”.
- 💌 Exibir uma mensagem aleatória de humor (“Resistiu bem dessa vez!”, “Quase uma recordista!”).
- 📱 Design 100% responsivo (mobile first).
- 🌙 Tema escuro alternativo.

---

## 🚀 Etapas para o Gemini CLI

### 1. Inicialização
```bash
npx create-astro@latest sindoca-domingo
cd sindoca-domingo
npm install
```

### 2. Criar Estrutura de Pastas (ver acima)

### 3. Implementar Lógica
- Adicionar `timer.js` com funções para calcular o tempo decorrido.
- Criar `Counter.astro` e `ResetButton.astro` conectando à lógica.
- Configurar `localStorage` para persistir o estado.

### 4. Estilização
- Criar `main.css` com animações leves e gradiente de fundo.
- Aplicar estilos via `Layout.astro`.

### 5. Testes Locais
```bash
npm run dev
```

### 6. Deploy
```bash
git init
git add .
git commit -m "Site Sindoca Domingo ❤️"
vercel deploy --prod
```

---

## 💬 Mensagens de Interface (exemplos)
| Contexto | Mensagem |
|-----------|-----------|
| Padrão | “Já faz **X dias e Y horas** desde que a Sindoca mencionou o Domingo.” |
| Ao clicar no botão | “Ela falou de novo 😅 Começando do zero!” |
| Longo tempo | “Uau! Já faz muito tempo que o Domingo não é mencionado 👏” |

---

## 🧾 Conclusão
O site deve transmitir leveza e humor, com um toque romântico.  
A experiência ideal é abrir o site, ver o contador crescendo e se divertir com a brincadeira.
