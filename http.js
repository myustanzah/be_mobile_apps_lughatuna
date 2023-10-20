const http = require("./app")
const PORT = 3004 || process.env.PORT;

http.listen(PORT, () => {
    console.log("Running app in port", PORT)
})