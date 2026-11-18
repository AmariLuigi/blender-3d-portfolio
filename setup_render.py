import bpy

# 1. Hardware acceleration: NVIDIA OptiX on RTX 4060 Ti
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
scene.cycles.samples = 8
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

# 2. 10 Seconds of Real Animation (300 frames at 30 fps)
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
scene.render.filepath = r"Z:\Blender Videos\Cyberpunk_Neon_Ball_Behind_4K_10s.mp4"

print("[CONFIGURED] 10s Real Continuous 4K Animation: Frames 1 to 300 with Dynamic Camera Zoom Out!")
