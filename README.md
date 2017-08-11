# jest-projects-config-issue

#### Install dependencies
`$ yarn`

#### Run client tests
`$ yarn test:client` => `jest --coverage --projects ./client`

```
--------------|----------|----------|----------|----------|----------------|
File          |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
--------------|----------|----------|----------|----------|----------------|
All files     |      100 |      100 |      100 |      100 |                |
 container.js |      100 |      100 |      100 |      100 |                |
--------------|----------|----------|----------|----------|----------------|
```

#### Run server tests
`$ yarn test:server` => `jest --coverage --projects ./server`

```
-----------|----------|----------|----------|----------|----------------|
File       |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
-----------|----------|----------|----------|----------|----------------|
All files  |    66.67 |       50 |      100 |       50 |                |
 server.js |    66.67 |       50 |      100 |       50 |              4 |
-----------|----------|----------|----------|----------|----------------|
```

#### Run both
`$ yarn test` => `jest --coverage --projects ./client ./server`

```
-------------------|----------|----------|----------|----------|----------------|
File               |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
-------------------|----------|----------|----------|----------|----------------|
All files          |       20 |       50 |    16.67 |    18.75 |                |
 container.js      |      100 |      100 |      100 |      100 |                |
 container.test.js |        0 |        0 |        0 |        0 |... 23,26,27,31 |
-------------------|----------|----------|----------|----------|----------------|
```
