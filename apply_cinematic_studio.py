"""
Automated Cinematic Car Studio Integrator & Showcase Builder
============================================================
Author: Antigravity
Usage:
  1. Inside an open Blender project with a car:
     Run this script from the Scripting workspace.
     It automatically imports the studio environment, lighting rig, 
     cinematic camera with 10s animation, and configures ultra-clean 4K Cycles rendering.

  2. From Command Line (Batch / Headless):
     "Z:\\Program Files\\Blender Foundation\\Blender 5.3\\blender.exe" "path_to_any_car.blend" -b -P "Z:\\Blender Videos\\apply_cinematic_studio.py" -- --render
"""

import bpy
import os
import sys
import mathutils

STUDIO_STAGE_FILE = r"Z:\Blender Videos\Cinematic_Car_Studio_Stage.blend"

def apply_studio(target_car_blend=None, auto_render=False):
    scene = bpy.context.scene
    print("\n" + "="*60)
    print(">>> APPLYING CINEMATIC CAR STUDIO SHOWCASE <<<")
    print("="*60)
    
    # Check if stage file exists
    if not os.path.exists(STUDIO_STAGE_FILE):
        raise FileNotFoundError(f"Studio stage template not found at: {STUDIO_STAGE_FILE}")

    # 1. Append [STUDIO_SHOWCASE] collection from the template
    print(f"[*] Appending studio rig from: {STUDIO_STAGE_FILE}")
    with bpy.data.libraries.load(STUDIO_STAGE_FILE, link=False) as (data_from, data_to):
        if "[STUDIO_SHOWCASE]" in data_from.collections:
            data_to.collections = ["[STUDIO_SHOWCASE]"]
        else:
            print("Available collections in stage file:", data_from.collections)
            raise ValueError("[STUDIO_SHOWCASE] collection not found in template!")

    appended_col = data_to.collections[0]
    if appended_col.name not in scene.collection.children:
        scene.collection.children.link(appended_col)
        
    # 2. Identify car objects and organize into [CAR_SLOT]
    car_col = bpy.data.collections.get("[CAR_SLOT]")
    if not car_col:
        car_col = bpy.data.collections.new("[CAR_SLOT]")
        appended_col.children.link(car_col)

    # Gather all existing mesh objects that are not part of the studio
    studio_cols = ['[STUDIO_ENVIRONMENT]', '[STUDIO_LIGHTING]', '[STUDIO_CAMERA]']
    studio_objs = set()
    for cname in studio_cols:
        c = bpy.data.collections.get(cname)
        if c:
            for o in c.all_objects:
                studio_objs.add(o)

    car_meshes = [o for o in bpy.data.objects if o.type == 'MESH' and o not in studio_objs]
    
    if car_meshes:
        print(f"[*] Found {len(car_meshes)} car mesh objects.")
        min_z = min((o.matrix_world @ mathutils.Vector(c)).z for o in car_meshes for c in o.bound_box)
        print(f"[*] Car lowest contact point: {min_z:.4f}m (Target ground level: -0.1200m)")
        
        # Link non-studio objects to [CAR_SLOT]
        for obj in bpy.data.objects:
            if obj not in studio_objs and obj.name != "Camera_Focus_Target":
                if obj.name not in car_col.objects:
                    car_col.objects.link(obj)
                if obj.name in scene.collection.objects:
                    scene.collection.objects.unlink(obj)

    # 3. Set Active Camera to Cinematic Camera
    cam_obj = bpy.data.objects.get("Cinematic_Camera")
    if cam_obj:
        scene.camera = cam_obj
        print(f"[*] Active camera set to: {cam_obj.name}")

    # 4. Ultra-Clean Anti-Grain 4K Render Settings
    scene.render.resolution_x = 3840
    scene.render.resolution_y = 2160
    scene.render.resolution_percentage = 100
    scene.render.fps = 30
    scene.frame_start = 1
    scene.frame_end = 300

    scene.render.engine = 'CYCLES'
    c = scene.cycles
    c.device = 'GPU'
    
    try:
        prefs = bpy.context.preferences.addons['cycles'].preferences
        prefs.compute_device_type = 'OPTIX'
        prefs.get_devices()
        for d in prefs.devices:
            if d.type == 'OPTIX':
                d.use = True
    except Exception as e:
        print(f"[*] GPU device note: {e}")

    # Anti-grain parameters
    c.samples = 128
    c.adaptive_threshold = 0.01
    c.adaptive_min_samples = 32
    c.sample_clamp_indirect = 3.0
    c.sample_clamp_direct = 0.0
    c.blur_glossy = 1.0
    c.caustics_reflective = False
    c.caustics_refractive = False

    c.use_denoising = True
    c.denoiser = 'OPTIX'
    c.denoising_input_passes = 'RGB_ALBEDO_NORMAL'
    c.denoising_prefilter = 'ACCURATE'

    scene.render.use_motion_blur = True
    scene.render.motion_blur_shutter = 0.5

    # AgX Color Management
    scene.view_settings.view_transform = 'AgX'
    try:
        scene.view_settings.look = 'AgX - Medium High Contrast'
    except:
        pass

    # Video Output (Studio Master Quality)
    if hasattr(scene.render.image_settings, 'media_type'):
        scene.render.image_settings.media_type = 'VIDEO'
    scene.render.image_settings.file_format = 'FFMPEG'
    scene.render.ffmpeg.format = 'MPEG4'
    scene.render.ffmpeg.codec = 'H264'
    scene.render.ffmpeg.constant_rate_factor = 'PERC_LOSSLESS'
    scene.render.ffmpeg.ffmpeg_preset = 'BEST'
    scene.render.ffmpeg.gopsize = 15

    # Derive output filename
    base_name = "Car_Cinematic_Showcase_4K"
    if bpy.data.filepath:
        base_name = os.path.splitext(os.path.basename(bpy.data.filepath))[0] + "_Cinematic_4K"
    out_dir = r"Z:\Blender Videos"
    out_path = os.path.join(out_dir, f"{base_name}.mp4")
    scene.render.filepath = out_path
    print(f"[*] Render output target: {out_path}")
    print("[*] Cinematic Studio Stage successfully applied!")
    print("="*60 + "\n")

    if auto_render:
        print(f"[*] Launching 4K animation render ({scene.frame_start} to {scene.frame_end})...")
        bpy.ops.render.render(animation=True)
        print(f"[+] Render complete: {out_path}")

if __name__ == "__main__":
    auto_render = "--render" in sys.argv
    apply_studio(auto_render=auto_render)
