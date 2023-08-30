## Development
FROM node:16-alpine3.18 as development

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

#######################
# Production builder stage
FROM development as builder

RUN yarn build

#######################
# Production stage
FROM node:16-slim as production

WORKDIR /app

ENV NODE_ENV=production

COPY package.json yarn.lock ./
COPY .env ./

RUN yarn cache clean

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000

CMD [ "yarn", "start" ]