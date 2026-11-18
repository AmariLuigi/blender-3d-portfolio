"""
Dodge Challenger 1970 R/T - 4K Ultra-Clean Cinematic Showcase Renderer
======================================================================
Renders 10 seconds (300 frames @ 30 fps) in pristine 4K UHD (3840x2160)
with zero grain:
- 64 samples with adaptive threshold 0.02 (min 24)
- Indirect clamping at 3.0 to eliminate fireflies
- Blur glossy (1.0) and caustics disabled
- OptiX AI denoising with accurate albedo and normal passes
- Perceptually Lossless H.264 encode with 'BEST' preset
"""

import bpy
import time

start_time = time.time()
print("\n" + "#"*70)
print(">>> LAUNCHING 4K ULTRA-CLEAN DODGE CHALLENGER SHOWCASE RENDER <<<")
print("#"*70)

scene = bpy.context.scene

# Verify OptiX GPU
try:
    prefs = bpy.context.preferences.addons['cycles'].preferences
    prefs.compute_device_type = 'OPTIX'
    prefs.get_devices()
    for d in prefs.devices:
        if d.type == 'OPTIX':
            d.use = True
            print(f"[GPU ACTIVE] {d.name}")
except Exception as e:
    print(f"Device note: {e}")

c = scene.cycles
c.device = 'GPU'
c.samples = 64
c.adaptive_threshold = 0.02
c.adaptive_min_samples = 24
c.sample_clamp_indirect = 3.0
c.sample_clamp_direct = 0.0
c.blur_glossy = 1.0
c.caustics_reflective = False
c.caustics_refractive = False

c.use_denoising = True
c.denoiser = 'OPTIX'
c.denoising_input_passes = 'RGB_ALBEDO_NORMAL'
c.denoising_prefilter = 'ACCURATE'

scene.render.resolution_x = 3840
scene.render.resolution_y = 2160
scene.render.resolution_percentage = 100
scene.render.fps = 30
scene.frame_start = 1
scene.frame_end = 300
scene.render.use_motion_blur = True
scene.render.motion_blur_shutter = 0.5

# Video Encoding
if hasattr(scene.render.image_settings, 'media_type'):
    scene.render.image_settings.media_type = 'VIDEO'
scene.render.image_settings.file_format = 'FFMPEG'
scene.render.ffmpeg.format = 'MPEG4'
scene.render.ffmpeg.codec = 'H264'
scene.render.ffmpeg.constant_rate_factor = 'PERC_LOSSLESS'
scene.render.ffmpeg.ffmpeg_preset = 'BEST'
scene.render.ffmpeg.gopsize = 15

out_file = r"Z:\Blender Videos\Dodge_Challenger_Showcase_4K.mp4"
scene.render.filepath = out_file

print(f"Target Output: {out_file}")
print(f"Resolution: {scene.render.resolution_x} x {scene.render.resolution_y} (4K UHD)")
print(f"Sampling: {c.samples} samples, Adaptive Threshold: {c.adaptive_threshold}")
print(f"Frames: {scene.frame_start} to {scene.frame_end} (300 frames, 10.0s @ 30fps)")
print("Starting render...")

bpy.ops.render.render(animation=True)

elapsed = time.time() - start_time
print(f"\n[+] Ultra-clean 4K render successfully finished in {elapsed/60:.1f} minutes!")
print(f"[+] Output file: {out_file}")
print("#"*70 + "\n")
