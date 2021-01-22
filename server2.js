//Import express.js module and create its variable.
const express = require("express");
const app = express();

//Import PythonShell module.
const { PythonShell } = require("python-shell");

//Router to handle the incoming request.
app.get("/", (req, res) => {
  let options = {
    mode: "text",
    pythonOptions: ["-u"], // get print results in real-time
    scriptPath: "", //If you are having python_test.py script in same folder, then it's optional.
    args: ["rohan"], //An argument which can be accessed in the script using sys.argv[1]
  };

  PythonShell.run("main.py", options, (err, result) => {
    if (err) throw err;
    console.log("result: ", result.toString());
    res.send(result.toString());
  });
});

const port = 8000 || process.env.PORT;
app.listen(port, () =>
  console.log(`Server connected to ${port}\n Link : http://localhost:8000/`)
);
