module.exports = {
  run: [
    // Install PyTorch first
    {
      method: "script.start",
      params: {
        uri: "torch.js",
        params: {
          venv: "env",                // Edit this to customize the venv folder path
          // xformers: true   // uncomment this line if your project requires xformers
          // triton: true   // uncomment this line if your project requires triton
          // sageattention: true   // uncomment this line if your project requires sageattention
        }
      }
    },
    // Install TRELLIS.2 dependencies
    {
      method: "shell.run",
      params: {
        venv: "env",                // Edit this to customize the venv folder path
        message: [
          "uv pip install -r requirements.txt"
        ],
      }
    },
    // Clone TRELLIS.2
    {
      method: "shell.run",
      params: {
        message: [
          "git clone --recursive https://github.com/microsoft/TRELLIS.2.git"
        ]
      }
    }
  ]
}
