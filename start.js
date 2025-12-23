module.exports = {
  daemon: true,
  run: [
    // Set environment variables for TRELLIS.2
    {
      method: "shell.run",
      params: {
        path: "TRELLIS.2",
        venv: "../env",
        env: {
          "OPENCV_IO_ENABLE_OPENEXR": "1",
          "PYTORCH_CUDA_ALLOC_CONF": "expandable_segments:True",
          // Use xformers if flash-attn is not available
          "ATTN_BACKEND": "{{gpu === 'nvidia' ? 'flash_attn' : 'xformers'}}"
        },
        message: [
          "python app.py --host 0.0.0.0 --port 7860",
        ],
        on: [{
          // Monitor for the server URL
          "event": "/http:\/\/\\S+/",   
          "done": true
        }]
      }
    },
    // Set the local URL variable for Pinokio UI
    {
      method: "local.set",
      params: {
        url: "{{input.event[0]}}"
      }
    },
  ]
}

