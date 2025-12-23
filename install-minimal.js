module.exports = {
  run: [
    // Minimal installation without CUDA extensions (fallback)
    // Use this if the main install.js fails due to compilation issues
    
    // Install PyTorch first
    {
      method: "script.start",
      params: {
        uri: "torch.js",
        params: {
          venv: "env",
          xformers: true  // Use xformers instead of flash-attn for compatibility
        }
      }
    },
    // Install basic dependencies
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
    // Clone TRELLIS.2
    {
      method: "shell.run",
      params: {
        message: [
          "git clone --recursive https://github.com/microsoft/TRELLIS.2.git"
        ]
      }
    },
    // Install xformers for attention (fallback for flash-attn)
    {
      method: "shell.run",
      params: {
        venv: "env",
        message: [
          "echo Installing xformers as flash-attn alternative...",
          "uv pip install xformers"
        ],
      }
    },
    // Try to install O-Voxel (essential)
    {
      method: "shell.run",
      params: {
        venv: "env",
        path: "TRELLIS.2",
        message: [
          "echo Installing O-Voxel core library...",
          "uv pip install ./o-voxel --no-build-isolation || echo 'O-Voxel installation failed - some features may not work'"
        ],
      }
    },
    // Set environment variable for xformers
    {
      method: "shell.run",
      params: {
        message: [
          "echo ATTN_BACKEND=xformers > .env",
          "echo Created .env file with ATTN_BACKEND=xformers"
        ],
      }
    },
    // Verification
    {
      method: "shell.run",
      params: {
        venv: "env",
        message: [
          "echo Minimal installation complete! Verifying basic imports...",
          "python -c \"import torch; print(f'PyTorch: {torch.__version__}'); print(f'CUDA available: {torch.cuda.is_available()}')\"",
          "python -c \"import xformers; print('xformers: OK')\" || echo 'xformers: FAILED'",
          "echo NOTE: Using xformers backend. Set ATTN_BACKEND=xformers in your environment."
        ],
      }
    }
  ]
}