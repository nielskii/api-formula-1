# 🏁 F1 API - Fastify Project

API simples desenvolvida com Fastify e TypeScript, simulando dados de Fórmula 1 com teams e drivers. Projeto criado para prática de criação de APIs REST, rotas dinâmicas, tipagem e estrutura backend.

## 🚀 Tecnologias
Node.js, Fastify, TypeScript e @fastify/cors.

## 📦 Instalação
git clone https://github.com/nielskii/api-formula-1

cd f1-api  
npm install  
npm run dev  

## 🌐 Base URL
http://localhost:3000

## 📡 Rotas da API

GET /  
Resposta:
{
  "message": "DESAFIO DIO - API Formula 1 bb"
}

GET /teams  
Retorna todos os times de Fórmula 1.

GET /teams/:id  
Exemplo: /teams/1  
Resposta:
{
  "team": {
    "id": 1,
    "name": "McLaren",
    "base": "Woking, United Kingdom"
  }
}

GET /drivers  
Retorna todos os pilotos.

GET /drivers/:id  
Exemplo: /drivers/3  
Resposta:
{
  "driver": {
    "id": 3,
    "name": "Lando Norris",
    "team": "McLaren"
  }
}

## ⚙️ Features
API REST simples, rotas dinâmicas com params, tipagem com TypeScript, CORS liberado e dados mockados de Fórmula 1.

## 📌 Objetivo
Projeto para treinar backend com Fastify, estrutura de API, manipulação de rotas e boas práticas iniciais.

## 🧠 Autor
Feito por Daniel Borges
