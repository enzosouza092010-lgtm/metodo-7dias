import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Método dos 7 Dias — Destravando Novos Caminhos',
  description: 'Uma jornada de fé, reflexão, gratidão e ação para renovar sua mente e abrir espaço para novos caminhos.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
