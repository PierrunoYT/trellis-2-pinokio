module.exports = {
  run: [{
    method: "shell.run",
    params: {
      path: "TRELLIS.2",
      message: "git pull"
    }
  }, {
    method: "shell.run",
    params: {
      venv: "env",
      message: "uv pip install -r requirements.txt"
    }
  }]
}
