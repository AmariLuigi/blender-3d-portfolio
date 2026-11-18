/**
 * LUIGI AMARI — 3D ARTIST & MOTION DESIGNER
 * Interactive Portfolio Experience Engine
 */

const PORTFOLIO_DATA = [
  {
    id: "dodge_challenger",
    title: "1970 Dodge Challenger R/T",
    subtitle: "Studio Cinematic Showcase",
    category: "automotive",
    category_name: "Automotive & Studio",
    badge_color: "pill-gold",
    year: "2026",
    role: "Studio Lighting, Lookdev & Camera Direction",
    desc: "Photorealistic 4K studio cinematic showcase of the iconic 1970 Dodge Challenger R/T. Engineered with custom softbox cyclorama lighting, realistic automotive paint clearcoat reflections, and smooth sweeping camera choreography.",
    poster: "assets/posters/dodge_challenger_4k.jpg",
    video_1080p: "assets/videos/dodge_challenger_1080p.mp4",
    video_4k: "assets/videos/dodge_challenger_4k.mp4",
    tech: {
      artist: "Luigi Amari",
      resolution: "4K UHD (3840×2160)",
      fps: "30 FPS",
      frames: "300 Frames",
      duration: "10.0s",
      engine: "Blender Cycles (OptiX)",
      lighting: "Overhead softbox cyclorama + edge rim striplights",
      optix: "RGB + Albedo + Normal Denoised",
      color_space: "AgX High Contrast"
    },
    highlights: ["Automotive Clearcoat Shader", "Studio Cyclorama Rig", "Smooth Orbital Cam", "Zero-Grain Denoising"]
  },
  {
    id: "art_nouveau_motion1",
    title: "Art Nouveau Kinetic Sphere — Motion I",
    subtitle: "The Golden Follow Glide",
    category: "art-nouveau",
    category_name: "Kinetic Sculptures",
    badge_color: "pill-gold",
    year: "2026",
    role: "Direction, Procedural Shading & 3D Animation",
    desc: "An exploration of organic Art Nouveau filigree translated into physical kinetic motion. Gold-leaf lattice geometry gliding smoothly across an undulating procedural plane with warm multi-bounce reflections.",
    poster: "assets/posters/art_nouveau_motion1.jpg",
    video_1080p: "assets/videos/art_nouveau_motion1_1080p.mp4",
    video_4k: "assets/videos/art_nouveau_motion1_4k.mp4",
    tech: {
      artist: "Luigi Amari",
      resolution: "4K UHD (3840×2160)",
      fps: "30 FPS",
      frames: "300 Frames",
      duration: "10.0s",
      engine: "Blender Cycles (OptiX)",
      lighting: "Three-point studio softbox + warm rim accent",
      optix: "RGB + Albedo + Normal Denoised",
      color_space: "AgX High Contrast"
    },
    highlights: ["Procedural Gold Filigree", "Low-Angle Follow Tracking", "Zero-Grain Denoising", "Reflective Caustics"]
  },
  {
    id: "art_nouveau_motion2",
    title: "Art Nouveau Kinetic Sphere — Motion II",
    subtitle: "The Grand 180° Panoramic Orbit",
    category: "art-nouveau",
    category_name: "Kinetic Sculptures",
    badge_color: "pill-gold",
    year: "2026",
    role: "Camera Choreography & Lighting Direction",
    desc: "A continuous 180-degree panoramic orbit around the Art Nouveau kinetic sphere, seamlessly transitioning from a low-angle front profile to an elevated architectural vantage across the wave.",
    poster: "assets/posters/art_nouveau_motion2.jpg",
    video_1080p: "assets/videos/art_nouveau_motion2_1080p.mp4",
    video_4k: "assets/videos/art_nouveau_motion2_4k.mp4",
    tech: {
      artist: "Luigi Amari",
      resolution: "4K UHD (3840×2160)",
      fps: "30 FPS",
      frames: "300 Frames",
      duration: "10.0s",
      engine: "Blender Cycles (OptiX)",
      lighting: "Dynamic multi-angle rim highlights with soft golden fill",
      optix: "RGB + Albedo + Normal Denoised",
      color_space: "AgX High Contrast"
    },
    highlights: ["180° Panoramic Bezier Orbit", "Architectural Vantage Overview", "Floral Filigree Relief", "OptiX Raytracing"]
  },
  {
    id: "liquid_chrome_motion1",
    title: "Liquid Chrome Morphing Sphere — Motion I",
    subtitle: "The Kinetic Follow Glide",
    category: "fluid-metal",
    category_name: "Fluid & Chrome",
    badge_color: "pill-silver",
    year: "2026",
    role: "Fluid Mechanics & Material Study",
    desc: "Viscous mercury chrome sphere gliding along an undulating fluid topology. Focuses on realistic surface tension, forward motion blur, and crisp cyclorama specular reflections.",
    poster: "assets/posters/liquid_chrome_motion1.jpg",
    video_1080p: "assets/videos/liquid_chrome_motion1_1080p.mp4",
    video_4k: "assets/videos/liquid_chrome_motion1_4k.mp4",
    tech: {
      artist: "Luigi Amari",
      resolution: "4K UHD (3840×2160)",
      fps: "30 FPS",
      frames: "300 Frames",
      duration: "10.0s",
      engine: "Blender Cycles (OptiX)",
      lighting: "High-contrast studio cyclorama with sharp specular strips",
      optix: "Accurate Prefilter Denoising",
      color_space: "AgX Medium Contrast"
    },
    highlights: ["Viscous Mercury Physics", "Specular Reflection Strips", "Forward Motion Blur", "Dynamic Wave Topology"]
  },
  {
    id: "liquid_chrome_motion2",
    title: "Liquid Chrome Morphing Sphere — Motion II",
    subtitle: "The Grand 180° Orbital Sweep",
    category: "fluid-metal",
    category_name: "Fluid & Chrome",
    badge_color: "pill-silver",
    year: "2026",
    role: "Camera Choreography & Lighting",
    desc: "Elevated 180-degree orbital sweep capturing liquid chrome deformation against an obsidian studio backdrop, accentuating pure metallic reflectivity and caustic highlights.",
    poster: "assets/posters/liquid_chrome_motion2.jpg",
    video_1080p: "assets/videos/liquid_chrome_motion2_1080p.mp4",
    video_4k: "assets/videos/liquid_chrome_motion2_4k.mp4",
    tech: {
      artist: "Luigi Amari",
      resolution: "4K UHD (3840×2160)",
      fps: "30 FPS",
      frames: "300 Frames",
      duration: "10.0s",
      engine: "Blender Cycles (OptiX)",
      lighting: "Dual top-down linear striplights with gradient fill",
      optix: "Accurate Prefilter Denoising",
      color_space: "AgX Medium Contrast"
    },
    highlights: ["180° Orbit Choreography", "Metallic Fluid Deformation", "Obsidian Cyclorama Rig", "Studio Caustics"]
  },
  {
    id: "cyberpunk_neon_orbital",
    title: "Cyberpunk Kinetic Core",
    subtitle: "Orbital Energy Simulation",
    category: "cyberpunk",
    category_name: "Sci-Fi Kinetics",
    badge_color: "pill-blue",
    year: "2026",
    role: "Direction & Volumetric Lighting",
    desc: "Pulsating energy core with concentric cybernetic rings floating in an infinite void. Features volumetric atmospheric fog, cyan and magenta emission falloff, and smooth orbital camera pacing.",
    poster: "assets/posters/cyberpunk_neon_orbital.jpg",
    video_1080p: "assets/videos/cyberpunk_neon_orbital_1080p.mp4",
    video_4k: "assets/videos/cyberpunk_neon_orbital_4k.mp4",
    tech: {
      artist: "Luigi Amari",
      resolution: "4K UHD (3840×2160)",
      fps: "30 FPS",
      frames: "298 Frames",
      duration: "9.9s",
      engine: "Blender Cycles (OptiX)",
      lighting: "Dual cyan & magenta volumetric emission shaders",
      optix: "AI OptiX Denoised",
      color_space: "AgX High Contrast"
    },
    highlights: ["Pulsating Emissive Core", "Volumetric Fog & Glow", "Neon Cyan / Magenta Palette", "Orbital Camera Path"]
  },
  {
    id: "cyberpunk_neon_trailing",
    title: "Cyberpunk Core — Trailing Cam",
    subtitle: "Dynamic Chase & Zoom Out",
    category: "cyberpunk",
    category_name: "Sci-Fi Kinetics",
    badge_color: "pill-blue",
    year: "2026",
    role: "Motion Choreography & Focal Zoom",
    desc: "High-speed chase camera perspective tracking the kinetic orb from behind, progressively pulling out to reveal the full scope of neon cybernetic geometry in space.",
    poster: "assets/posters/cyberpunk_neon_trailing.jpg",
    video_1080p: "assets/videos/cyberpunk_neon_trailing_1080p.mp4",
    video_4k: "assets/videos/cyberpunk_neon_trailing_4k.mp4",
    tech: {
      artist: "Luigi Amari",
      resolution: "4K UHD (3840×2160)",
      fps: "30 FPS",
      frames: "300 Frames",
      duration: "10.0s",
      engine: "Blender Cycles (OptiX)",
      lighting: "High-intensity neon edge glows with deep black contrast",
      optix: "AI OptiX Denoised",
      color_space: "AgX High Contrast"
    },
    highlights: ["Rear Dynamic Chase Cam", "Progressive Focal Length Zoom", "Infinite Cyber Grid", "Volumetric Light Traces"]
  },
  {
    id: "cinematic_wave",
    title: "Ocean Surge Simulation",
    subtitle: "Procedural Fluid Study",
    category: "ocean-wave",
    category_name: "Ocean Dynamics",
    badge_color: "pill-gold",
    year: "2026",
    role: "Procedural Simulation & Water Physics",
    desc: "Atmospheric procedural ocean surge featuring deep subsurface water scattering, micro-foam displacement, and low-sun golden hour diffusion cutting through turbulent crests.",
    poster: "assets/posters/cinematic_wave.jpg",
    video_1080p: "assets/videos/cinematic_wave_1080p.mp4",
    video_4k: "assets/videos/cinematic_wave_4k.mp4",
    tech: {
      artist: "Luigi Amari",
      resolution: "4K UHD (3840×2160)",
      fps: "24 FPS",
      frames: "108 Frames",
      duration: "4.5s",
      engine: "Blender Cycles (OptiX)",
      lighting: "Golden hour low-sun directional light with atmospheric scatter",
      optix: "AI OptiX Denoised",
      color_space: "AgX Natural Look"
    },
    highlights: ["Subsurface Water Scattering", "Atmospheric Golden Diffusion", "Turbulent Wave Displacement", "Procedural Micro-Foam"]
  }
];

class PortfolioApp {
  constructor() {
    this.items = PORTFOLIO_DATA;
    this.currentFilter = "all";
    this.currentModalIndex = 0;
    this.currentQuality = "1080p";
    
    // Elements
    this.galleryGrid = document.getElementById("galleryGrid");
    this.filterBtns = document.querySelectorAll(".filter-btn");
    this.theaterModal = document.getElementById("theaterModal");
    this.theaterVideo = document.getElementById("theaterVideo");
    this.modalCloseBtn = document.getElementById("modalCloseBtn");
    this.theaterNavPrev = document.getElementById("theaterNavPrev");
    this.theaterNavNext = document.getElementById("theaterNavNext");
    this.qualityToggleBtn = document.getElementById("qualityToggleBtn");
    this.timelineBar = document.getElementById("timelineBar");
    this.timelineProgress = document.getElementById("timelineProgress");
    this.timelineBuffer = document.getElementById("timelineBuffer");
    this.timeDisplay = document.getElementById("timeDisplay");
    this.theaterPlayBtn = document.getElementById("theaterPlayBtn");
    this.theaterMuteBtn = document.getElementById("theaterMuteBtn");
    this.theaterFullscreenBtn = document.getElementById("theaterFullscreenBtn");
    this.theaterLoopBtn = document.getElementById("theaterLoopBtn");
    
    // Hero Elements
    this.heroVideo = document.getElementById("heroVideo");
    this.heroSoundToggle = document.getElementById("heroSoundToggle");
    this.heroTheaterBtn = document.getElementById("heroTheaterBtn");

    this.init();
  }

  init() {
    this.renderGallery();
    this.bindEvents();
    this.initHero();
  }

  renderGallery() {
    this.galleryGrid.innerHTML = "";
    
    const filtered = this.currentFilter === "all"
      ? this.items
      : this.items.filter(item => item.category === this.currentFilter);

    filtered.forEach((item) => {
      const card = document.createElement("div");
      card.className = "video-card";
      card.dataset.id = item.id;
      
      const globalIndex = this.items.findIndex(it => it.id === item.id);

      card.innerHTML = `
        <div class="card-media" data-index="${globalIndex}">
          <img src="${item.poster}" alt="${item.title}" class="card-poster" loading="lazy" />
          <video class="card-video" loop muted playsinline preload="none">
            <source src="${item.video_1080p}" type="video/mp4" />
          </video>
          
          <div class="card-badge-top-left">
            <span class="pill-badge">${item.category_name}</span>
          </div>
          <div class="card-badge-top-right">
            <span class="pill-badge">${item.tech.resolution}</span>
          </div>
          <div class="card-badge-bottom-right">
            <span class="pill-badge">${item.tech.duration}</span>
          </div>

          <div class="play-overlay">
            <div class="play-circle" title="View in Cinema Theater">
              <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            </div>
          </div>
        </div>

        <div class="card-body">
          <div class="card-header-row">
            <span class="card-category-tag">${item.category_name}</span>
            <span class="card-year">${item.year}</span>
          </div>
          <h3 class="card-title">${item.title}</h3>
          <div class="card-subtitle">${item.subtitle} • ${item.role}</div>
          <p class="card-description">${item.desc}</p>

          <div class="card-tech-tags">
            ${item.highlights.map(h => `<span class="tech-pill">${h}</span>`).join("")}
          </div>

          <div class="card-actions">
            <button class="btn-cinema-open" data-index="${globalIndex}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
              View Artwork
            </button>
            <button class="btn-preview-toggle" data-index="${globalIndex}">
              Hover to preview
            </button>
          </div>
        </div>
      `;

      this.galleryGrid.appendChild(card);
    });

    this.bindCardHoverPreviews();
  }

  bindCardHoverPreviews() {
    const cards = this.galleryGrid.querySelectorAll(".video-card");
    
    cards.forEach(card => {
      const media = card.querySelector(".card-media");
      const video = media.querySelector(".card-video");
      let hoverTimeout = null;

      media.addEventListener("mouseenter", () => {
        hoverTimeout = setTimeout(() => {
          media.classList.add("is-playing");
          video.play().catch(() => {});
        }, 120);
      });

      media.addEventListener("mouseleave", () => {
        clearTimeout(hoverTimeout);
        media.classList.remove("is-playing");
        video.pause();
      });

      // Click on media opens modal
      media.addEventListener("click", () => {
        const index = parseInt(media.dataset.index, 10);
        this.openTheaterModal(index);
      });

      // Cinema button inside card
      const cinemaBtn = card.querySelector(".btn-cinema-open");
      if (cinemaBtn) {
        cinemaBtn.addEventListener("click", () => {
          const index = parseInt(cinemaBtn.dataset.index, 10);
          this.openTheaterModal(index);
        });
      }

      // Preview toggle button
      const previewBtn = card.querySelector(".btn-preview-toggle");
      if (previewBtn) {
        previewBtn.addEventListener("click", () => {
          if (media.classList.contains("is-playing")) {
            media.classList.remove("is-playing");
            video.pause();
            previewBtn.textContent = "Hover to preview";
          } else {
            media.classList.add("is-playing");
            video.play().catch(() => {});
            previewBtn.textContent = "Pause preview";
          }
        });
      }
    });
  }

  bindEvents() {
    // Filter Buttons
    this.filterBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        this.filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        this.currentFilter = btn.dataset.filter;
        this.renderGallery();
      });
    });

    // Theater Modal Close
    this.modalCloseBtn.addEventListener("click", () => this.closeTheaterModal());
    this.theaterModal.addEventListener("click", (e) => {
      if (e.target === this.theaterModal) {
        this.closeTheaterModal();
      }
    });

    // Prev / Next Navigation in Modal
    this.theaterNavPrev.addEventListener("click", () => this.navigateModal(-1));
    this.theaterNavNext.addEventListener("click", () => this.navigateModal(1));

    // Keyboard navigation
    window.addEventListener("keydown", (e) => {
      if (!this.theaterModal.classList.contains("is-open")) return;

      if (e.key === "Escape") {
        this.closeTheaterModal();
      } else if (e.key === " " || e.code === "Space") {
        e.preventDefault();
        this.toggleTheaterPlay();
      } else if (e.key === "ArrowLeft") {
        if (e.shiftKey) {
          this.navigateModal(-1);
        } else {
          this.theaterVideo.currentTime = Math.max(0, this.theaterVideo.currentTime - 2);
        }
      } else if (e.key === "ArrowRight") {
        if (e.shiftKey) {
          this.navigateModal(1);
        } else {
          this.theaterVideo.currentTime = Math.min(this.theaterVideo.duration, this.theaterVideo.currentTime + 2);
        }
      } else if (e.key === "f" || e.key === "F") {
        this.toggleTheaterFullscreen();
      } else if (e.key === "m" || e.key === "M") {
        this.toggleTheaterMute();
      }
    });

    // Custom Player Controls
    this.theaterPlayBtn.addEventListener("click", () => this.toggleTheaterPlay());
    this.theaterMuteBtn.addEventListener("click", () => this.toggleTheaterMute());
    this.theaterFullscreenBtn.addEventListener("click", () => this.toggleTheaterFullscreen());
    this.theaterLoopBtn.addEventListener("click", () => {
      this.theaterVideo.loop = !this.theaterVideo.loop;
      this.theaterLoopBtn.style.color = this.theaterVideo.loop ? "#ffffff" : "var(--text-muted)";
    });

    // Video Events for Timeline
    this.theaterVideo.addEventListener("timeupdate", () => this.updateTheaterProgress());
    this.theaterVideo.addEventListener("progress", () => this.updateTheaterBuffer());
    this.theaterVideo.addEventListener("play", () => this.updatePlayIcon(true));
    this.theaterVideo.addEventListener("pause", () => this.updatePlayIcon(false));
    this.theaterVideo.addEventListener("ended", () => {
      if (!this.theaterVideo.loop) {
        this.updatePlayIcon(false);
      }
    });

    // Timeline Scrubber Click & Drag
    let isDragging = false;
    const seek = (e) => {
      const rect = this.timelineBar.getBoundingClientRect();
      const pos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      if (this.theaterVideo.duration) {
        this.theaterVideo.currentTime = pos * this.theaterVideo.duration;
      }
    };

    this.timelineBar.addEventListener("mousedown", (e) => {
      isDragging = true;
      seek(e);
    });
    window.addEventListener("mousemove", (e) => {
      if (isDragging) seek(e);
    });
    window.addEventListener("mouseup", () => {
      isDragging = false;
    });

    // Quality Toggle Button (1080p Web vs 4K UHD Master)
    this.qualityToggleBtn.addEventListener("click", () => this.toggleStreamQuality());
  }

  initHero() {
    if (this.heroVideo) {
      this.heroVideo.play().catch(() => {});
    }

    if (this.heroSoundToggle) {
      this.heroSoundToggle.addEventListener("click", () => {
        if (this.heroVideo) {
          this.heroVideo.muted = !this.heroVideo.muted;
          this.heroSoundToggle.innerHTML = this.heroVideo.muted
            ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 5L6 9H2v6h4l5 4V5z"></path><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>`
            : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>`;
        }
      });
    }

    if (this.heroTheaterBtn) {
      this.heroTheaterBtn.addEventListener("click", () => {
        this.openTheaterModal(0);
      });
    }
  }

  openTheaterModal(index) {
    this.currentModalIndex = index;
    const item = this.items[index];
    if (!item) return;

    // Load video according to current quality setting
    const src = this.currentQuality === "4k" ? item.video_4k : item.video_1080p;
    this.theaterVideo.src = src;
    this.theaterVideo.poster = item.poster;
    this.theaterVideo.loop = true;
    this.theaterLoopBtn.style.color = "#ffffff";
    
    // Update Quality badge
    this.updateQualityBadge();

    // Populate metadata drawer
    document.getElementById("modalTitle").textContent = item.title;
    document.getElementById("modalSubtitle").textContent = `${item.subtitle} • ${item.role}`;
    document.getElementById("modalDescription").textContent = item.desc;
    document.getElementById("specResolution").textContent = item.tech.resolution;
    document.getElementById("specFps").textContent = item.tech.fps;
    document.getElementById("specDuration").textContent = item.tech.duration;
    document.getElementById("specEngine").textContent = item.tech.engine;
    document.getElementById("specLighting").textContent = item.tech.lighting;
    document.getElementById("specOptix").textContent = item.tech.optix;

    // Show modal
    this.theaterModal.classList.add("is-open");
    document.body.style.overflow = "hidden";

    // Play video
    this.theaterVideo.play().catch(() => {});
  }

  closeTheaterModal() {
    this.theaterModal.classList.remove("is-open");
    document.body.style.overflow = "";
    this.theaterVideo.pause();
    this.theaterVideo.src = "";
  }

  navigateModal(direction) {
    let nextIndex = this.currentModalIndex + direction;
    if (nextIndex < 0) nextIndex = this.items.length - 1;
    if (nextIndex >= this.items.length) nextIndex = 0;
    this.openTheaterModal(nextIndex);
  }

  toggleTheaterPlay() {
    if (this.theaterVideo.paused) {
      this.theaterVideo.play();
    } else {
      this.theaterVideo.pause();
    }
  }

  updatePlayIcon(isPlaying) {
    this.theaterPlayBtn.innerHTML = isPlaying
      ? `<svg viewBox="0 0 24 24"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>`
      : `<svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`;
  }

  toggleTheaterMute() {
    this.theaterVideo.muted = !this.theaterVideo.muted;
    this.theaterMuteBtn.innerHTML = this.theaterVideo.muted
      ? `<svg viewBox="0 0 24 24"><path d="M11 5L6 9H2v6h4l5 4V5z"></path><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>`
      : `<svg viewBox="0 0 24 24"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>`;
  }

  toggleTheaterFullscreen() {
    const el = document.querySelector(".theater-viewport");
    if (!document.fullscreenElement) {
      if (el.requestFullscreen) el.requestFullscreen();
      else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
    } else {
      if (document.exitFullscreen) document.exitFullscreen();
    }
  }

  toggleStreamQuality() {
    const currentTime = this.theaterVideo.currentTime;
    const wasPlaying = !this.theaterVideo.paused;
    const item = this.items[this.currentModalIndex];
    if (!item) return;

    this.currentQuality = this.currentQuality === "1080p" ? "4k" : "1080p";
    this.updateQualityBadge();

    const newSrc = this.currentQuality === "4k" ? item.video_4k : item.video_1080p;
    this.theaterVideo.src = newSrc;
    this.theaterVideo.currentTime = currentTime;

    if (wasPlaying) {
      this.theaterVideo.play().catch(() => {});
    }
  }

  updateQualityBadge() {
    if (this.currentQuality === "4k") {
      this.qualityToggleBtn.innerHTML = `4K Master`;
    } else {
      this.qualityToggleBtn.innerHTML = `1080p Stream`;
    }
  }

  updateTheaterProgress() {
    if (!this.theaterVideo.duration) return;
    const pct = (this.theaterVideo.currentTime / this.theaterVideo.duration) * 100;
    this.timelineProgress.style.width = `${pct}%`;

    const cur = this.formatTime(this.theaterVideo.currentTime);
    const dur = this.formatTime(this.theaterVideo.duration);
    this.timeDisplay.textContent = `${cur} / ${dur}`;
  }

  updateTheaterBuffer() {
    if (!this.theaterVideo.duration) return;
    try {
      const buffered = this.theaterVideo.buffered;
      if (buffered.length > 0) {
        const bufferedEnd = buffered.end(buffered.length - 1);
        const pct = (bufferedEnd / this.theaterVideo.duration) * 100;
        this.timelineBuffer.style.width = `${pct}%`;
      }
    } catch (e) {}
  }

  formatTime(secs) {
    if (isNaN(secs)) return "00:00";
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  window.portfolioApp = new PortfolioApp();
});
