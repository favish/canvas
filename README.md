# Canvas

![canvas](https://github.com/favish/canvas/workflows/canvas/badge.svg?branch=master)

```
yarn add @favish/canvas styled-components
yarn add --dev @types/styled-system @types/styled-components
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