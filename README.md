
# nlw eSports Backend

Projeto desenvolvido juntamente com a nlw da Rocketseat.

Onde desenvolvemos uma aplicação para que os gamers possam divulgar e procurar Duo's.

## Documentação da API

#### Rota Games

| GET /games | GET /games/:id/ads | POST games/:id/ads
| :---------------------------------- | :---------------------------------- | :---------------------------------- |
| Retorna todos os games | Retorna os anúncios de um game | Cria um anúncio em um game |

#### Rota Ads

| GET ads/:id/discord |
| :---------------------------------- |
| Retorna um anúncio |

## Demonstração

Tela de Games

![alt text](https://cdn.discordapp.com/attachments/851591758211055627/1085577055493685422/image.png)

Tela de ads

![alt text](https://cdn.discordapp.com/attachments/851591758211055627/1085577121990197298/image.png)

## Instalação

Passo a passo para instalação e configuração do projeto.

## Pré-requisitos

- Node.js e NPM/Yarn instalados
- (opcional) Prisma CLI instalado globalmente

### 1. Faça o clone do repositório

SSH:
```bash
  git clone git@github.com:onoue9/nlw-eSports-backend.git
```
HTTPS:
```bash
  git clone https://github.com/onoue9/nlw-eSports-backend.git
```

### 2. Instale as dependências

```bash
  cd backend
  npm install
```

### 3. Crie um arquivo .env

Esse .env deverá ser criado no diretório do backend.

`DATABASE_URL`

DATABASE_URL é usada pelo prisma para fazer a integração com o bando de dados

DATABASE_URL="file:../src/database/db.sqlite"

### 4. Execute as migrações do Prisma

```bash
npx prisma migrate dev
```

### 5. Inicie o servidor

Após ter feito a instalação das dependências e adicionados as variáveis de ambiente, agora você deverá rodar o servidor do backend para fornecer os dados pela API.

```bash
  npm run dev
```

## Stacks utilizadas

**Back-end:** NodeJs, Typescript, Express e Prisma.

