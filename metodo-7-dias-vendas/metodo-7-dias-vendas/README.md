# Método dos 7 Dias — Página de Vendas

Landing page em Next.js criada do zero para o produto **Método dos 7 Dias — Destravando Novos Caminhos**.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Hotmart

Crie `.env.local` a partir de `.env.example` e substitua:

```env
NEXT_PUBLIC_HOTMART_URL=https://pay.hotmart.com/SEU-LINK
```

Todos os CTAs da página usam essa variável.

## Vídeo

Você pode usar uma URL de vídeo:

```env
NEXT_PUBLIC_VIDEO_URL=https://seu-host/video.mp4
```

Ou alterar o componente em `app/page.tsx` para apontar para um arquivo local em `/public`.

## Vercel

1. Suba o projeto para um repositório no GitHub.
2. Importe o repositório na Vercel.
3. Em **Environment Variables**, adicione `NEXT_PUBLIC_HOTMART_URL`.
4. Opcionalmente adicione `NEXT_PUBLIC_VIDEO_URL`.
5. Faça o deploy.

## Observação

A página não usa bibliotecas de animação prontas. As animações de entrada, hover, brilho, elementos flutuantes e interação do FAQ foram construídas com React + CSS para manter o projeto leve e fácil de editar.
