const express = require('express')
const app = express()
app.use(express.json());
app.use(express.urlencoded({extended: true}));


const port = process.env.PORT || 3001

const admin = require('firebase-admin');

var serviceAccount = require("../react-user-auth-app-955cb-firebase-adminsdk-d0ckt-8f42b4bdef.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/api", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.get("/api/auth", async (req, res) => {
  const idToken = req.header("Authorization");
  if (idToken) {
    const uid = await admin.auth().verifyIdToken(idToken);
    // uid を使って紐付けられたユーザー情報を取得する処理を行ったりする。
    // const someUseInfo = userService.getInfo(uid);
    console.log(uid)
    res.json(idToken);
  }
  // Authorizationヘッダーが無ければ403
  res.status(403).send();
});

app.listen(port, () => {
  console.log(`listening on *:${port}`);
})
