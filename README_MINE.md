Устранение ошибок после npm i:

1. $ npm i @babel/core (последняя версия babel)
2. $ npm i typescript (последняя версия typescript)
3. $ npm i fsevents@latest -f --save-optional (нужно установить fsevents в
   качестве необязательной зависимости)

---

Это же решение но чуть по другому: package.json считается с ключом
optionalDependencies Вы можете добавить fsevents к этому объекту, и если вы
обнаружите, что устанавливаете пакеты на другой платформе, чем MacOS, fsevents
будет пропущен либо yarn , либо npm . Просто прописываем в package.json:
"optionalDependencies": { "fsevents": "2.1.2" },

---

В package.json для поднятия локального сервера надо установить
"devDependencies": { "json-server": "^0.16.3"}

---

В package.json для того, чтобы писать свои комманды надо установить
"devDependencies": { "concurrently": "^6.2.1"}

И тогда в "scripts" можем написать свою команду. Например: "scripts" { "dev":
"concurrently \ "npm run server\" \"npm run start\"" "server": "json-server -w
server/db.json -p 3001"} флаг -w говорит, чтобы отслеживал изменения. И не
забыть сделать папку server и положить в нее свой файл с данными db.json

Теперь при наборе в терминале npm run dev - будет выполняться сразу две
комманды - поднятие сервера и запуск старницы на localhost.
