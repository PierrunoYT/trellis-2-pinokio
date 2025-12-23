# TRELLIS.2 Windows Setup Guide

## Prerequisites (CRITICAL for Windows)

### 1. Visual Studio Build Tools
**Required for compiling CUDA extensions**

Download and install: [Build Tools for Visual Studio 2022](https://visualstudio.microsoft.com/downloads/#build-tools-for-visual-studio-2022)

**Important**: During installation, select:
- ✅ **Desktop development with C++**
- ✅ **MSVC v143 - VS 2022 C++ x64/x86 build tools**
- ✅ **Windows 10/11 SDK**

### 2. CUDA Toolkit 12.4
Download from: [NVIDIA CUDA Toolkit 12.4](https://developer.nvidia.com/cuda-12-4-0-download-archive)

**Important**: 
- Install CUDA 12.4 specifically (not 12.1 or 12.8)
- Add CUDA to your PATH during installation
- Verify with: `nvcc --version`

### 3. Hardware Requirements
- **GPU**: NVIDIA RTX 3090/4090/5090 or A100/H100 (24GB+ VRAM)
- **RAM**: 32GB+ recommended
- **Storage**: 50GB+ free space

## Installation Options

### Option 1: Full Installation (Recommended)
Installs all CUDA extensions for maximum performance:
1. Click **"Install (Full)"** in Pinokio
2. Wait 30-60 minutes for compilation
3. If it fails, try Option 2

### Option 2: Minimal Installation (Fallback)
Installs basic functionality without CUDA extensions:
1. Click **"Install (Minimal)"** in Pinokio
2. Uses xformers instead of flash-attn
3. Some features may be slower or unavailable

## Troubleshooting

### Build Errors
If you get compilation errors:
```
error: Microsoft Visual Studio 14.0 is required
```
**Solution**: Install Visual Studio Build Tools with C++ support

### CUDA Errors
```
RuntimeError: CUDA error: no kernel image is available for execution
```
**Solution**: 
1. Check GPU compatibility (RTX 20xx series may not work)
2. Verify CUDA 12.4 installation
3. Try minimal installation

### Memory Errors
```
RuntimeError: CUDA out of memory
```
**Solution**:
1. Close other applications
2. Use lower resolution (512³ instead of 1024³)
3. Enable memory optimization in settings

### Import Errors
```
ModuleNotFoundError: No module named 'flash_attn'
```
**Solution**: Use minimal installation with xformers backend

## Performance Expectations

| GPU | Resolution | Generation Time |
|-----|------------|----------------|
| RTX 4090 | 512³ | ~5-8s |
| RTX 4090 | 1024³ | ~25-35s |
| RTX 3090 | 512³ | ~8-12s |

## Environment Variables

The installation automatically sets:
- `OPENCV_IO_ENABLE_OPENEXR=1`
- `PYTORCH_CUDA_ALLOC_CONF=expandable_segments:True`
- `ATTN_BACKEND=xformers` (minimal install only)

## Getting Help

1. Check Windows compatibility: Most issues are build tool related
2. Try minimal installation first if full installation fails
3. Verify CUDA installation: `nvidia-smi` and `nvcc --version`
4. Check GPU memory: Task Manager > Performance > GPU

## Known Limitations on Windows

- Some CUDA extensions may not compile on older GPUs
- Build process is slower than Linux
- Requires specific Visual Studio version
- May need manual CUDA path configuration