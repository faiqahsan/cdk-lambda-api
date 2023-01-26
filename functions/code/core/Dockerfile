FROM public.ecr.aws/lambda/nodejs:18
WORKDIR ${LAMBDA_TASK_ROOT}
COPY package-lock.json package.json ./
RUN npm ci --production
COPY . .

CMD ["handler.handler"]
