# TODO: 自動格式化
FROM docker.io/library/node:20

WORKDIR /app/main/

ENV PATH=$HOME/.local/bin:$PATH

RUN apt-get update && \
    apt-get install -y \
        curl \
        golang-go && \
    npm install -g bun onchange prettier eslint && \
    bun install \
        eslint-config-prettier \
        eslint-plugin-prettier && \
    curl -sL https://webinstall.dev/shfmt | bash && \
    mkdir -p /app/config/ && \
    chmod 777 /app/config/ && \
    which shfmt || echo "shfmt not found"

COPY ./config/ /app/config/

VOLUME ["/app/main/"]

CMD ["bash", "-c", "\
onchange \"/app/main/**/*.{js,jsx,ts,tsx,css,json,yaml,yml,sql,vue,astro,md,mdx}\" \
  -- prettier --ignore-path /app/config/.gitignore \
  --config /app/config/.prettierrc.json --write {{changed}} & \
  \
onchange \"/app/main/**/*.sh\" -- $HOME/.local/bin/shfmt -i 2 -w {{changed}} & \
  \
onchange \"/app/main/**/*.{js,jsx,ts,tsx}\" \
  -- eslint --config /app/config/.eslintrc.js \
  --fix-type problem,suggestion {{changed}} & \
wait"]
