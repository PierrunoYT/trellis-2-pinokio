module.exports = {
  run: [
    // Check for Windows build tools (Windows only)
    {
      "when": "{{platform === 'win32'}}",
      "method": "shell.run",
      "params": {
        "message": [
          "echo Checking for Visual Studio Build Tools...",
          "where cl >nul 2>&1 || echo WARNING: Visual Studio Build Tools not found. Please install 'Desktop development with C++' from Visual Studio Installer."
        ]
      }
    },
    // Install PyTorch first
    {
      method: "script.start",
      params: {
        uri: "torch.js",
        params: {
          venv: "env",
          // Uncomment if you need xformers for older GPUs
          // xformers: true
        }
      }
    },
    // Install basic Python dependencies
    {
      method: "shell.run",
      params: {
        venv: "env",
        message: [
          "uv pip install -r requirements.txt"
        ],
      }
    },
    // Install utils3d dependency
    {
      method: "shell.run",
      params: {
        venv: "env",
        message: [
          "uv pip install git+https://github.com/EasternJournalist/utils3d.git@9a4eb15e4021b67b12c460c7057d642626897ec8"
        ],
      }
    },
    // Clone TRELLIS.2 repository
    {
      method: "shell.run",
      params: {
        message: [
          "git clone --recursive https://github.com/microsoft/TRELLIS.2.git"
        ]
      }
    },
    // Install flash-attn (critical for performance)
    {
      method: "shell.run",
      params: {
        venv: "env",
        message: [
          "echo Installing flash-attn (this may take several minutes)...",
          "uv pip install flash-attn==2.7.3 --no-build-isolation"
        ],
      }
    },
    // Clone and install nvdiffrast
    {
      method: "shell.run",
      params: {
        message: [
          "echo Installing nvdiffrast...",
          "git clone -b v0.4.0 https://github.com/NVlabs/nvdiffrast.git"
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        venv: "env",
        message: [
          "uv pip install ./nvdiffrast --no-build-isolation"
        ],
      }
    },
    // Clone and install nvdiffrec
    {
      method: "shell.run",
      params: {
        message: [
          "echo Installing nvdiffrec...",
          "git clone https://github.com/JeffreyXiang/nvdiffrec.git"
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        venv: "env",
        message: [
          "uv pip install ./nvdiffrec --no-build-isolation"
        ],
      }
    },
    // Clone and install CuMesh
    {
      method: "shell.run",
      params: {
        message: [
          "echo Installing CuMesh...",
          "git clone https://github.com/JeffreyXiang/CuMesh.git --recursive"
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        venv: "env",
        message: [
          "uv pip install ./CuMesh --no-build-isolation"
        ],
      }
    },
    // Clone and install FlexGEMM
    {
      method: "shell.run",
      params: {
        message: [
          "echo Installing FlexGEMM...",
          "git clone https://github.com/JeffreyXiang/FlexGEMM.git --recursive"
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        venv: "env",
        message: [
          "uv pip install ./FlexGEMM --no-build-isolation"
        ],
      }
    },
    // Install O-Voxel (core library)
    {
      method: "shell.run",
      params: {
        venv: "env",
        path: "TRELLIS.2",
        message: [
          "echo Installing O-Voxel core library...",
          "uv pip install ./o-voxel --no-build-isolation"
        ],
      }
    },
    // Final verification
    {
      method: "shell.run",
      params: {
        venv: "env",
        message: [
          "echo Installation complete! Verifying imports...",
          "python -c \"import torch; print(f'PyTorch: {torch.__version__}'); print(f'CUDA available: {torch.cuda.is_available()}')\"",
          "python -c \"import flash_attn; print('flash-attn: OK')\" || echo 'flash-attn: FAILED'",
          "python -c \"import nvdiffrast; print('nvdiffrast: OK')\" || echo 'nvdiffrast: FAILED'",
          "python -c \"import o_voxel; print('o-voxel: OK')\" || echo 'o-voxel: FAILED'"
        ],
      }
    }
  ]
}
