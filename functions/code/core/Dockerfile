FROM public.ecr.aws/lambda/nodejs:18 as build
WORKDIR /build
COPY package-lock.json package.json ./
RUN npm ci
COPY . .
RUN npx esbuild handler.ts --bundle --outdir=dist --platform=node --external:aws-sdk

FROM public.ecr.aws/lambda/nodejs:18
WORKDIR ${LAMBDA_TASK_ROOT}
COPY package-lock.json package.json ./
RUN npm ci --production
COPY --from=build /build/dist .
COPY . .

CMD ["handler.handler"]