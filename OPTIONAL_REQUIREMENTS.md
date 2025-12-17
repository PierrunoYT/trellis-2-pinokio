# TRELLIS.2 Optional Requirements

These are optional dependencies from the official TRELLIS.2 `setup.sh` that can be installed for extended functionality.

## Optional Extensions

### Flash Attention (--flash-attn)
**Purpose**: Fast attention mechanism for faster generation

- **Package**: `flash-attn==2.7.3`
- **Platform Support**: CUDA only
- **Installation**: 
  ```bash
  pip install flash-attn==2.7.3
  ```
- **Note**: Required for fastest inference. For GPUs that don't support it (e.g., V100), use xformers instead.

### NVDiffRast (--nvdiffrast)
**Purpose**: Differentiable rasterization for rendering

- **Source**: https://github.com/NVlabs/nvdiffrast
- **Version**: v0.4.0
- **Platform Support**: CUDA only
- **Installation**:
  ```bash
  git clone -b v0.4.0 https://github.com/NVlabs/nvdiffrast.git
  pip install ./nvdiffrast --no-build-isolation
  ```
- **License**: Custom (see repository)

### NVDiffRec (--nvdiffrec)
**Purpose**: Split-sum renderer for PBR (Physically Based Rendering) materials

- **Source**: https://github.com/JeffreyXiang/nvdiffrec
- **Platform Support**: CUDA only
- **Installation**:
  ```bash
  git clone https://github.com/JeffreyXiang/nvdiffrec.git
  pip install ./nvdiffrec --no-build-isolation
  ```
- **License**: Custom (see repository)

### CuMesh (--cumesh)
**Purpose**: CUDA-accelerated mesh utilities for post-processing, remeshing, decimation, and UV-unwrapping

- **Source**: https://github.com/JeffreyXiang/CuMesh
- **Installation**:
  ```bash
  git clone https://github.com/JeffreyXiang/CuMesh.git --recursive
  pip install ./CuMesh --no-build-isolation
  ```

### FlexGEMM (--flexgemm)
**Purpose**: Efficient sparse convolution implementation based on Triton

- **Source**: https://github.com/JeffreyXiang/FlexGEMM
- **Installation**:
  ```bash
  git clone https://github.com/JeffreyXiang/FlexGEMM.git --recursive
  pip install ./FlexGEMM --no-build-isolation
  ```

### O-Voxel (--o-voxel)
**Purpose**: Core library for converting between textured meshes and O-Voxel representation

- **Location**: Included in main TRELLIS.2 repository
- **Installation**:
  ```bash
  # Located in the cloned TRELLIS.2/o-voxel directory
  pip install ./o-voxel --no-build-isolation
  ```

## Installation in Pinokio

In Pinokio, these optional extensions are cloned and installed automatically when you run the installation script. You can customize which extensions to install by modifying the `install.js` file.

## Alternative: Xformers

If you have a GPU that doesn't support flash-attn (e.g., NVIDIA V100):

```bash
pip install xformers
export ATTN_BACKEND=xformers
```

## System Requirements for Extensions

- **CUDA Toolkit**: 12.4 (recommended)
- **Build Tools**: For compiling CUDA kernels
  - Linux: `gcc`, `g++`, `nvcc`
  - macOS: Not supported (extensions are CUDA-only)
  - Windows: Visual Studio Build Tools + CUDA Toolkit

## Platform Support Summary

| Extension | Linux | Windows | macOS | Notes |
|-----------|-------|---------|-------|-------|
| flash-attn | ✓ | ✓ | ✗ | CUDA only |
| nvdiffrast | ✓ | ✓ | ✗ | CUDA only |
| nvdiffrec | ✓ | ✓ | ✗ | CUDA only |
| cumesh | ✓ | ✓ | ✗ | CUDA only |
| flexgemm | ✓ | ✓ | ✗ | CUDA only |
| o-voxel | ✓ | ✓ | ✓ | Pure Python |
