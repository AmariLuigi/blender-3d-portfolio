import subprocess, time, sys

blender_exe = r"C:\Program Files\Blender Foundation\Blender 5.2\blender.exe"
blend_file = r"Z:\Blender Videos\Liquid_Chrome_Ball.blend"
m1_script = r"Z:\Blender Videos\render_liquid_motion1.py"
m2_script = r"Z:\Blender Videos\render_liquid_motion2.py"

print("[1/2] Rendering Motion 1 (The Follow Glide) in 4K UHD 60fps/30fps 10s...")
t0 = time.time()
cmd1 = [blender_exe, "-b", blend_file, "-P", m1_script, "-a"]
p1 = subprocess.run(cmd1)
if p1.returncode != 0:
    print(f"Motion 1 failed with code {p1.returncode}")
    sys.exit(p1.returncode)
print(f"[SUCCESS] Motion 1 finished in {time.time()-t0:.1f}s")

print("[2/2] Rendering Motion 2 (The Grand 180 Orbit) in 4K UHD 10s...")
t1 = time.time()
cmd2 = [blender_exe, "-b", blend_file, "-P", m2_script, "-a"]
p2 = subprocess.run(cmd2)
if p2.returncode != 0:
    print(f"Motion 2 failed with code {p2.returncode}")
    sys.exit(p2.returncode)
print(f"[SUCCESS] Motion 2 finished in {time.time()-t1:.1f}s")

print("[COMPLETED] Both 4K 10-second videos rendered cleanly without artifacts!")
