import bpy

# Explicit OptiX GPU Configuration for headless CLI
prefs = bpy.context.preferences.addons['cycles'].preferences
prefs.compute_device_type = 'OPTIX'
prefs.get_devices()
for d in prefs.devices:
    if d.type == 'OPTIX':
        d.use = True
        print(f"[OPTIX GPU ACTIVE] {d.name}")
    else:
        d.use = False

scene = bpy.context.scene
scene.cycles.device = 'GPU'
scene.cycles.samples = 6
scene.cycles.adaptive_threshold = 0.08
scene.cycles.tile_size = 4096
scene.cycles.use_denoising = True
scene.cycles.denoiser = 'OPTIX'
scene.cycles.max_bounces = 3
scene.cycles.diffuse_bounces = 2
scene.cycles.glossy_bounces = 2
scene.cycles.transmission_bounces = 2
scene.cycles.volume_bounces = 0
scene.cycles.transparent_max_bounces = 4
scene.render.use_persistent_data = True

# 4K UHD 10-Second Output Settings
scene.render.resolution_x = 3840
scene.render.resolution_y = 2160
scene.render.resolution_percentage = 100
scene.render.fps = 30
scene.frame_start = 1
scene.frame_end = 300

scene.render.image_settings.media_type = 'VIDEO'
scene.render.image_settings.file_format = 'FFMPEG'
scene.render.ffmpeg.format = 'MPEG4'
scene.render.ffmpeg.codec = 'H264'
scene.render.ffmpeg.constant_rate_factor = 'HIGH'
scene.render.ffmpeg.ffmpeg_preset = 'GOOD'
scene.render.ffmpeg.gopsize = 15
scene.render.filepath = r"Z:\Blender Videos\Liquid_Chrome_Ball_Motion1_4K_10s.mp4"

print("[READY] Rendering Liquid Chrome Motion 1 (The Follow Glide): 300 frames in 4K UHD!")
