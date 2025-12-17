# TRELLIS.2 for Pinokio

[TRELLIS.2](https://github.com/microsoft/TRELLIS.2) is a state-of-the-art large 3D generative model (4B parameters) designed for high-fidelity image-to-3D generation. It leverages a novel "field-free" sparse voxel structure termed O-Voxel to reconstruct and generate arbitrary 3D assets with complex topologies, sharp features, and full PBR materials.

This repository provides a [Pinokio](https://pinokio.computer/) script for easy installation and one-click execution.

![TRELLIS.2](https://img.shields.io/badge/TRELLIS.2-4B-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## Features

- **High Quality, Resolution & Efficiency**: Generates high-resolution fully textured assets with exceptional fidelity.
- **Arbitrary Topology Handling**: Robustly handles complex structures like open surfaces, non-manifold geometry, and internal enclosed structures.
- **Rich Texture Modeling**: Models Base Color, Roughness, Metallic, and Opacity.
- **Minimalist Processing**: Instant conversions between textured meshes and O-Voxel representation.

## Installation

1. Install [Pinokio](https://pinokio.computer/)
2. Open Pinokio and click "Download"
3. Paste this repository URL: `https://github.com/cocktailpeanut/Trellis-2-Pinokio` (or your fork)
4. Click "Install" and wait for the process to complete.

## Requirements

- **Hardware**: NVIDIA GPU with at least 24GB of memory is recommended (A100, H100, or RTX 3090/4090).
- **Software**: Pinokio will handle the installation of Python, CUDA-compatible PyTorch, and all necessary extensions.

## Usage

1. Open the TRELLIS.2 app in Pinokio.
2. Click "Start" to launch the Gradio Web UI.
3. Upload an image and click "Generate".
4. Export the result as a `.glb` file.

## Credits

- **TRELLIS.2**: [Microsoft Research](https://github.com/microsoft/TRELLIS.2)
- **Model**: [microsoft/TRELLIS.2-4B](https://huggingface.co/microsoft/TRELLIS.2-4B) on Hugging Face.

## License

The code in this repository is MIT licensed. TRELLIS.2 and its dependencies are subject to their own licenses (MIT, NVIDIA, etc.). See the [official repository](https://github.com/microsoft/TRELLIS.2) for details.
