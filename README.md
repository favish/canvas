# Canvas

![canvas](https://github.com/favish/canvas/actions/workflows/publish.yml/badge.svg)

## Usage

Make sure to add `NPM_TOKEN` to your local `~/.npmrc` file.
Visit Github to generate a Personal Access Token and use it to login to the registry.

```
npm login --registry=https://npm.pkg.github.com
```

Then install.

```
yarn add @favish/canvas styled-components
yarn add --dev @types/styled-system @types/styled-components
```

### For CI build

Make sure to add the `NPM_TOKEN` to your CI environment variables.

Then, update the Docker to provide the `NPM_TOKEN` to the build process.

```
FROM node:17.3.0
WORKDIR /usr/src/app
ARG NPM_TOKEN

RUN echo "@favish:registry=https://npm.pkg.github.com" >> /root/.npmrc \
  && echo "//npm.pkg.github.com/:_authToken=${NPM_TOKEN}" >> /root/.npmrc

COPY package.json .
COPY yarn.lock .
RUN yarn && rm -f /root/.npmrc

COPY . .

RUN yarn run build

CMD ["yarn", "run", "start"]
```

On CircleCI, provide the `NPM_TOKEN` retrieved CI environment variables, something like this if you use `gcp-gcr` orb:

```
      - gcp-gcr/build-image:
          image: << pipeline.parameters.project >>-next
          path: "next"
          docker-context: "next"
          tag: << pipeline.git.revision >>-<< pipeline.git.branch >>
          registry-url: "us.gcr.io"
          extra_build_args: |
            --build-arg NPM_TOKEN=${NPM_TOKEN}
```

## Contributing

Make sure commit message in this pattern to trigger semantic release automatically:

```
feat: Add new feature → Minor bump
fix: Fix bug → Patch bump
BREAKING CHANGE: something major → Major bump
```

Examples:

```
feat: add new button component
fix: correct button padding
BREAKING CHANGE: drop support for IE11
```

## Release version

It triggers upon tagging a commit. To release a new version, run:

```
git tag v1.2.0
git push origin v1.2.0
```

It will automatically bump the version based on the commit messages.