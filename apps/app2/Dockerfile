# application builder
FROM tnem:builder-base as builder
WORKDIR /usr/src/app

COPY . .

RUN yarn build app2

FROM node:18 as runner

ENV NODE_ENV=production
WORKDIR /usr/src/app

RUN rm -rf ./*

COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/package.json ./
COPY --from=builder /usr/src/app/.yarn ./.yarn
# COPY --from=builder /usr/src/app/tsconfig.json ./
# nestia/typia not supporting pnp yet
COPY --from=builder /usr/src/app/node_modules ./node_modules
# COPY --from=builder /usr/src/app/.pnp.cjs ./
# COPY --from=builder /usr/src/app/.pnp.loader.mjs ./
COPY --from=builder /usr/src/app/.yarnrc.yml ./
COPY --from=builder /usr/src/app/yarn.lock ./

# RUN npx typia setup --manager yarn --project tsconfig.json

EXPOSE 80

# 'yarn node' will allow pnp modules to be loaded from .pnp.cjs
CMD ["yarn","node","dist/apps/app2/main.js"]