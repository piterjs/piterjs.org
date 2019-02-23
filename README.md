# PiterJS Apps

# Production build

```
git clone https://github.com/eigenmethod/mam.git ./mam && cd mam
npm install
npm start piterjs/app
```

Application will be bundled to `piterjs/app/-`

# Developer environment

```
git clone https://github.com/eigenmethod/mam.git ./mam && cd mam
npm install
npm start
```

Application will be accessible at `http://localhost:8080/piterjs/app/-/index.html`

You can change source files (`./piterjs/**`) and reload page to view result.

# Update data

1. Store API key from https://airtable.com/account to AIRTABLE_KEY env variable.
2. Call 'update.sh` to download and commit new data.
2. Push to origin repo.

# BrowserStack

We use it for crossbrowser testing.

[![](https://p14.zdusercontent.com/attachment/1015988/mfyOFKgRwkD1eZtad4ssyr2lH?token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2In0..1p0MOCVJ8yuuJjpalEeW_g.pnLJSEABWtJrPhudmT0et0R-OlyYeYgaL5MVQbb4Am2pgwy088zmEuuhXZtidJnb9ZVmF-y4ozuXcEQo1_ers9Qdy1CkbQ_SxSH1rFUO3YAtl-WnJ6BIgZkYyFL-3dI09QYc8V4iVZ6OYoqVl9sL3ETQRssGIUh01yOctsxKCX8BYpmtDD7OFcMouOHphczDR9QP5DaTj9cvGLq07JSfFTqW2xzPEC7BkqxvZ2D30fhIsNkziauaWhxNXda-ezQmIg0vyRJ6rp6YVUSWoxzdBfqBrDmUi6v07s1AGsl07GA.5DNalAqUarVI6r2U8iey-Q)](http://browserstack.com/)
