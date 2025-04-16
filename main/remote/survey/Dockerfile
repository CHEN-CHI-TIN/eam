ARG IMG_VER_BUILD_NODE
ARG IMG_VER_RUNTIME_NODE
FROM ${IMG_VER_BUILD_NODE} AS build

WORKDIR /app/

COPY ./package.json /app/package.json

RUN npm i -g pnpm && pnpm install


FROM ${IMG_VER_RUNTIME_NODE} AS runtime

WORKDIR /app/

COPY --from=build /app/node_modules/ /app/node_modules/

COPY ./ /app/

RUN npm install -g pnpm

EXPOSE 3001

VOLUME [ "/app/node_modules/" ]

CMD if [ "$ENV" = "prod" ]; then \
      pnpm run build && pnpm run start; \
    else \
      pnpm run storybook; \
    fi