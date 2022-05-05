## GoIT Node.js Course Template Homework

Выполните форк этого репозитория для выполнения домашних заданий (2-6) Форк
создаст репозиторий на вашем http://github.com

Добавьте ментора в коллаборацию

Для каждой домашней работы создавайте свою ветку.

- hw02
- hw03
- hw04
- hw05
- hw06

Каждая новая ветка для дз должна делаться с master

После того как вы закончили выполнять домашнее задание в своей ветке, необходимо
сделать пулл-реквест (PR). Потом добавить ментора для ревью кода. Только после
того как ментор заапрувит PR, вы можете выполнить мердж ветки с домашним
заданием в мастер.

Внимательно читайте комментарии ментора. Исправьте замечания и сделайте коммит в
ветке с домашним заданием. Изменения подтянуться в PR автоматически после того
как вы отправите коммит с исправлениями на github После исправления снова
добавьте ментора на ревью кода.

- При сдаче домашней работы есть ссылка на PR
- JS-код чистый и понятный, для форматирования используется Prettier

### Команды:

- `npm start` &mdash; старт сервера в режиме production
- `npm run start:dev` &mdash; старт сервера в режиме разработки (development)
- `npm run lint` &mdash; запустить выполнение проверки кода с eslint, необходимо
  выполнять перед каждым PR и исправлять все ошибки линтера
- `npm lint:fix` &mdash; та же проверка линтера, но с автоматическими
  исправлениями простых ошибок

## Routes:

### Contacts:

#### GET --- Get All contacts.

- http://localhost:3001/api/contacts/

#### GET --- Get contact by id ID.

- http://localhost:3001/api/contacts/:contactId

#### POST --- Add new contact.

- http://localhost:3001/api/contacts/

#### DELETE --- Remove contact by ID.

- http://localhost:3001/api/contacts/:contactId

#### PUT --- Update contact by ID.

- http://localhost:3001/api/contacts/:contactId

#### PATCH --- Update status "favorite" of contact by ID.

- http://localhost:3001/api/contacts/:contactId/favorite

### Auth:

#### POST --- User registration.

- http://localhost:3001/api/auth/signup

#### POST --- Login user.

- http://localhost:3001/api/auth/login

#### GET --- User logging out.

- http://localhost:3001/api/auth/logout

### Users:

#### GET --- Information about current user.

- http://localhost:3001/api/users/current

#### PATCH --- Update current avatar.

- http://localhost:3001/api/users/avatars

#### PATCH - http://localhost:3001/api/users/:userId/subscription --- Update the user's "subscription".

- http://localhost:3001/api/users/subscription

#### POST --- Send the verification letter to the specified mail.

- http://localhost:3001/api/users/verify

#### GET --- Resend the verification letter to the specified mail.

- http://localhost:3001/api/users/verify/:verificationToken

### Query:

#### GET --- Get All contacts by query.

- http://localhost:3001/api/contacts?query

#### page = number.

- Choose from which page to show users: "page=1"

#### limit = number.

- Select the number of users to display: "limit=10"

#### sortByAsc = tag.

- Sort by "tag" in ascending order: "sortByAsc=phone"

#### sortByDesc = tag.

- Sort by "tag" in descending order: "sortByDesc=phone"

#### filter = tag1|tag2|tag3.

- Sort by "tags": "filter=name|age|date".

#### favorite = bool.

- Filter users by tag "favorite": "favorite=true" || "favorite=false" .

Random query string:
http://localhost:3001/api/contacts?page=2&limit=5&filter=phone|favorite|name|email&favorite=true&sortByDesc=phone
