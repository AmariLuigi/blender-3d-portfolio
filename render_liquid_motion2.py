import bpy, mathutils

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
scene.render.filepath = r"Z:\Blender Videos\Liquid_Chrome_Ball_Motion2_4K_10s.mp4"

# Set up Motion 2: The Grand 180° Orbit Glide
cam = scene.camera
cam.animation_data_clear()

cam_frames_m2 = [
    # Frame 1: Front 3/4 low-angle profile
    (1, mathutils.Vector((-1.25, -2.50, 1.55)), mathutils.Vector((-1.2455, 0.0, 0.95)), 52.0),
    # Frame 100: Side-to-rear sweeping transition
    (100, mathutils.Vector((-2.40, -2.00, 1.80)), mathutils.Vector((-1.20, 0.0, 0.95)), 50.0),
    # Frame 200: Rear quarter elevated vantage point
    (200, mathutils.Vector((-3.40, -0.90, 2.15)), mathutils.Vector((-0.90, 0.1, 0.95)), 48.0),
    # Frame 300: High-angle architectural overview across the entire wave
    (300, mathutils.Vector((-3.10, 1.50, 2.60)), mathutils.Vector((-0.80, 0.2, 0.90)), 45.0)
]

for frame, pos, target, lens in cam_frames_m2:
    scene.frame_set(frame)
    cam.location = pos
    dir_vec = (target - pos).normalized()
    cam.rotation_euler = dir_vec.to_track_quat('-Z', 'Y').to_euler()
    cam.data.lens = lens
    
    cam.keyframe_insert(data_path="location", frame=frame)
    cam.keyframe_insert(data_path="rotation_euler", frame=frame)
    cam.data.keyframe_insert(data_path="lens", frame=frame)

# Make camera curves smooth Bezier
if cam.animation_data and cam.animation_data.action:
    act = cam.animation_data.action
    if hasattr(act, 'layers'):
        for lyr in act.layers:
            for strip in lyr.strips:
                for cb in strip.channelbags:
                    for fc in cb.fcurves:
                        for kp in fc.keyframe_points:
                            kp.interpolation = 'BEZIER'
    elif hasattr(act, 'fcurves'):
        for fc in act.fcurves:
            for kp in fc.keyframe_points:
                kp.interpolation = 'BEZIER'

print("[READY] Rendering Liquid Chrome Motion 2 (The Grand 180° Orbit): 300 frames in 4K UHD!")
