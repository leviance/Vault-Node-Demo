# backend

## How to run

add data in env/example.env.sh

open git bash in backend folder

source env/example.env.sh

npm install.

npm start.


## Api

### Auth `/auth`

-   `[GET] /check-login`: check login status.
    -   result: String.
-   `[GET] /check-logout`: check logout status.
    -   result: String.
-   `[POST] /token`: check vault token is valid, polices of token.
    -   body: {token: String}.
    -   result: String

### Home `/`

-   `[GET] /logout`: destroy session
-   `[POST] /enable-approle`: enable approle with path
    -   body: {path: String}
    -   result: String
-   `[GET] /auth-methods`: return list auth methods
    -   result: Object


