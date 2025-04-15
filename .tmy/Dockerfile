FROM node:20
WORKDIR /app/main/

RUN bash -c ' \
    apt-get update && \
    apt-get install -y \
        curl \
        golang-go && \
    npm install -g bun && \
        bun install \
            onchange \
            prettier \
            eslint \
            eslint-config-prettier \
            eslint-plugin-prettier && \
    curl -sL https://webinstall.dev/shfmt | bash && \
    onchange "/app/main/**/*.{js,jsx,ts,tsx,css,json,yaml,yml,sql,vue,astro,md,mdx}" \
        -- prettier \
        --ignore-path /app/config/.gitignore \
        --config /app/config/.prettierrc.json \
        --write {{changed}} & \
    onchange "/app/main/**/*.sh" \
        -- shfmt -i 2 \
        -w {{changed}} & \
    export PATH=$HOME/.local/bin:$PATH \
    mkdir -p /app/config/; \
    '
COPY ./ /app/config/
VOLUME /app/main/

