FROM node:18-alpine AS base

FROM base AS builder
WORKDIR /app
COPY . .

RUN yarn install --frozen-lockfile
RUN yarn build

FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /app/apps/user/.next/standalone ./
COPY --from=builder /app/apps/user/public ./apps/user/public
COPY --from=builder --chown=nextjs:nodejs /app/apps/user/.next/static ./apps/user/.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "./apps/user/server.js"]