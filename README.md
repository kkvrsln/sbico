# SBICO landing

В репозитории находятся файлы лендинга строительной компании:

- `index.html`
- `styles.css`
- `script.js`

## Самое важное: ГДЕ именно вводить команды

Эти команды нужно вводить **в терминале** (чёрное окно с командной строкой), **в папке проекта** `sbico`.

### Если вы работаете в VS Code
1. Откройте папку проекта `sbico`.
2. В верхнем меню нажмите **Terminal** → **New Terminal**.
3. Внизу откроется терминал. Там должна быть строка примерно вида:
   - `.../sbico$`
4. Вот **туда** и вставляйте команды по одной (или блоком).

### Если вы работаете на GitHub сайте в браузере
На сайте GitHub в поле репозитория команды **не вводятся**.
Команды вводятся только в терминале на вашем компьютере/сервере/в этой среде.

### Быстрый сценарий (копируете в терминал)
Сначала вставьте это (замените логин и имя репо):

```bash
git remote remove origin 2>/dev/null || true
git remote add origin https://github.com/<ВАШ_ЛОГИН>/<ИМЯ_РЕПО>.git
git remote -v
```

Потом отправьте файлы:

```bash
git push -u origin work
```

Если спросит логин/пароль — пароль это **не пароль от GitHub**, а токен (PAT), либо заранее сделайте `gh auth login`.

---

## Зачем это нужно

Сейчас проект хранится локально в контейнере. Чтобы я мог загружать изменения в ваш GitHub, нужно **один раз** связать локальный git с удалённым репозиторием и настроить авторизацию.

---

## Вариант A (рекомендуется): через GitHub CLI (`gh auth login`)

### Шаг 1. Создать пустой репозиторий на GitHub

1. Откройте сайт: `https://github.com`.
2. В правом верхнем углу нажмите **`+`**.
3. Нажмите **`New repository`**.
4. В поле **Repository name** введите, например: `sbico`.
5. Выберите **Private** или **Public**.
6. Важно: не ставьте галочки `Add a README`, `.gitignore`, `license` (чтобы не было лишних конфликтов).
7. Нажмите **Create repository**.

### Шаг 2. Подключить репозиторий локально

Скопируйте URL репозитория из GitHub (кнопка **Code** → HTTPS), затем выполните:

```bash
git remote remove origin 2>/dev/null || true
git remote add origin https://github.com/<ВАШ_ЛОГИН>/<ИМЯ_РЕПО>.git
```

Проверьте:

```bash
git remote -v
```

### Шаг 3. Авторизация GitHub CLI

Запустите:

```bash
gh auth login
```

Что выбирать в диалоге:
1. **What account do you want to log into?** → `GitHub.com`
2. **What is your preferred protocol for Git operations?** → `HTTPS`
3. **Authenticate Git with your GitHub credentials?** → `Yes`
4. **How would you like to authenticate GitHub CLI?** → `Login with a web browser`
5. Скопируйте одноразовый код, откройте ссылку из терминала, вставьте код, подтвердите вход.

Проверка:

```bash
gh auth status
```

### Шаг 4. Первая загрузка

```bash
git push -u origin work
```

После этого ветка `work` появится на GitHub.

---

## Вариант B: через Personal Access Token (если без `gh`)

### Шаг 1. Создать токен

1. На GitHub нажмите аватар (правый верхний угол).
2. Откройте **Settings**.
3. Слева: **Developer settings**.
4. Выберите **Personal access tokens** → **Tokens (classic)**.
5. Нажмите **Generate new token (classic)**.
6. В поле Note введите: `sbico-push`.
7. Срок: например 30 дней.
8. Права: поставьте `repo`.
9. Нажмите **Generate token**.
10. Скопируйте токен сразу (потом его не покажут ещё раз).

### Шаг 2. Пуш по HTTPS

```bash
git remote remove origin 2>/dev/null || true
git remote add origin https://github.com/<ВАШ_ЛОГИН>/<ИМЯ_РЕПО>.git
git push -u origin work
```

Когда git спросит:
- **Username** → ваш логин GitHub
- **Password** → вставьте токен (не пароль от аккаунта)

---

## Что делать потом (обычный цикл)

Каждый раз после изменений:

```bash
git add .
git commit -m "Короткое описание изменений"
git push
```

---

## Если хотите, чтобы я пушил без ваших ручных действий в будущем

Нужно, чтобы в этой среде были уже настроены:
1. `origin` указывал на ваш GitHub-репозиторий.
2. Рабочая авторизация (`gh auth login` или сохранённые git credentials/token).

Тогда я смогу выполнять `git push` автоматически после коммитов.
