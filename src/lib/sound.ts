/**
 * Authentic 80s / 90s Vintage Desktop Computer Audio Synthesis.
 *
 * Faithfully recreates the acoustic mechanical properties of iconic 80s/90s computing hardware:
 * - 80s/90s Beige Mechanical Mouse (Heavy microswitch snap + bucking spring ping + ABS hollow chassis thump)
 * - 80s/90s IBM Model M Bucking Spring / Relay Strike (Tactile mechanical keypress / solenoid switch)
 * - Vintage PC Speaker Beep (Classic 1980s IBM 5150 / DOS prompt 890Hz square-wave tone)
 *
 * Uses 100% native Web Audio API synthesis with zero external assets, 0ms latency,
 * and robust auto-unlock for modern browser autoplay policies.
 */

class VintageComputerSoundManager {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private isUnlocked: boolean = false;

  constructor() {
    if (typeof window !== 'undefined') {
      // Check stored preference if available
      try {
        const stored = localStorage.getItem('dsk_sound_muted');
        if (stored !== null) {
          this.isMuted = stored === 'true';
        }
      } catch {
        // LocalStorage unavailable
      }

      // Auto-unlock on first user interaction so audio context is warm and running
      const handleUserGesture = () => {
        this.unlockAudio();
      };

      window.addEventListener('pointerdown', handleUserGesture, { passive: true });
      window.addEventListener('mousedown', handleUserGesture, { passive: true });
      window.addEventListener('keydown', handleUserGesture, { passive: true });
      window.addEventListener('touchstart', handleUserGesture, { passive: true });
    }
  }

  private getContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;

    if (!this.ctx) {
      const AudioContextClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioContextClass) {
        this.ctx = new AudioContextClass();
      }
    }

    return this.ctx;
  }

  /**
   * Resumes and unlocks the AudioContext in compliance with modern browser autoplay policies.
   */
  public async unlockAudio(): Promise<void> {
    const ctx = this.getContext();
    if (!ctx) return;

    if (ctx.state === 'suspended') {
      try {
        await ctx.resume();
        this.isUnlocked = true;
      } catch {
        // Browser gesture policy blocked resume
      }
    } else {
      this.isUnlocked = true;
    }
  }

  /**
   * 80s/90s Vintage Mechanical Mouse Switch ("Plastic Clack + Spring Ping + Chassis Thump")
   * Modeled on classic 1980s/1990s heavy tactile beige microswitches (Logitech, Microsoft Serial, IBM PS/2).
   */
  public playVintageClick() {
    if (this.isMuted) return;

    const ctx = this.getContext();
    if (!ctx) return;

    if (ctx.state === 'suspended') {
      ctx.resume().then(() => this.synthesizeVintageClick(ctx)).catch(() => {});
      return;
    }

    this.synthesizeVintageClick(ctx);
  }

  private synthesizeVintageClick(ctx: AudioContext) {
    try {
      const now = ctx.currentTime;

      // 1. Sharp Plastic Microswitch Transient (Bandpassed noise impulse)
      const bufferSize = Math.floor(ctx.sampleRate * 0.016); // 16ms burst
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.22));
      }

      const noiseSource = ctx.createBufferSource();
      noiseSource.buffer = noiseBuffer;

      const noiseFilter = ctx.createBiquadFilter();
      noiseFilter.type = 'bandpass';
      noiseFilter.frequency.setValueAtTime(3200, now);
      noiseFilter.Q.setValueAtTime(3.2, now);

      const noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(0.40, now);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.016);

      noiseSource.connect(noiseFilter);
      noiseFilter.connect(noiseGain);
      noiseGain.connect(ctx.destination);
      noiseSource.start(now);

      // 2. Metallic Bucking Spring Ping (Tactile leaf switch resonance)
      const springOsc = ctx.createOscillator();
      const springGain = ctx.createGain();
      const springFilter = ctx.createBiquadFilter();

      springOsc.type = 'triangle';
      springOsc.frequency.setValueAtTime(1620, now);
      springOsc.frequency.exponentialRampToValueAtTime(260, now + 0.045);

      springFilter.type = 'bandpass';
      springFilter.frequency.setValueAtTime(1800, now);
      springFilter.Q.setValueAtTime(4.0, now);

      springGain.gain.setValueAtTime(0.35, now);
      springGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.045);

      springOsc.connect(springFilter);
      springFilter.connect(springGain);
      springGain.connect(ctx.destination);

      springOsc.start(now);
      springOsc.stop(now + 0.05);

      // 3. Hollow ABS Chassis Resonance (Authentic deep vintage mouse body thump)
      const chassisOsc = ctx.createOscillator();
      const chassisGain = ctx.createGain();

      chassisOsc.type = 'sine';
      chassisOsc.frequency.setValueAtTime(240, now);
      chassisOsc.frequency.exponentialRampToValueAtTime(75, now + 0.038);

      chassisGain.gain.setValueAtTime(0.30, now);
      chassisGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.038);

      chassisOsc.connect(chassisGain);
      chassisGain.connect(ctx.destination);

      chassisOsc.start(now);
      chassisOsc.stop(now + 0.045);
    } catch {
      // Audio playback dropped safely
    }
  }

  /**
   * 80s/90s Mechanical Relay / Bucking Spring Strike (For buttons, interactive cards, and links)
   * Chunky, tactile mechanical keypress/solenoid latch sound (IBM Model M key strike).
   */
  public playVintageRelay() {
    if (this.isMuted) return;

    const ctx = this.getContext();
    if (!ctx) return;

    if (ctx.state === 'suspended') {
      ctx.resume().then(() => this.synthesizeVintageRelay(ctx)).catch(() => {});
      return;
    }

    this.synthesizeVintageRelay(ctx);
  }

  private synthesizeVintageRelay(ctx: AudioContext) {
    try {
      const now = ctx.currentTime;

      // 1. Initial Solenoid Strike (Sharp mechanical click transient)
      const strikeOsc = ctx.createOscillator();
      const strikeGain = ctx.createGain();

      strikeOsc.type = 'square';
      strikeOsc.frequency.setValueAtTime(2400, now);
      strikeOsc.frequency.exponentialRampToValueAtTime(320, now + 0.024);

      strikeGain.gain.setValueAtTime(0.35, now);
      strikeGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.024);

      strikeOsc.connect(strikeGain);
      strikeGain.connect(ctx.destination);

      strikeOsc.start(now);
      strikeOsc.stop(now + 0.028);

      // 2. Heavy Spring Return Ring (Iconic Model M metallic ping)
      const springOsc = ctx.createOscillator();
      const springGain = ctx.createGain();
      const springFilter = ctx.createBiquadFilter();

      springOsc.type = 'triangle';
      springOsc.frequency.setValueAtTime(1920, now + 0.004);
      springOsc.frequency.exponentialRampToValueAtTime(380, now + 0.06);

      springFilter.type = 'bandpass';
      springFilter.frequency.setValueAtTime(1750, now);
      springFilter.Q.setValueAtTime(4.2, now);

      springGain.gain.setValueAtTime(0.38, now + 0.004);
      springGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.065);

      springOsc.connect(springFilter);
      springFilter.connect(springGain);
      springGain.connect(ctx.destination);

      springOsc.start(now + 0.004);
      springOsc.stop(now + 0.07);

      // 3. Thick Beige Computer Workstation Chassis Bottom-Out
      const thudOsc = ctx.createOscillator();
      const thudGain = ctx.createGain();

      thudOsc.type = 'sine';
      thudOsc.frequency.setValueAtTime(180, now);
      thudOsc.frequency.exponentialRampToValueAtTime(55, now + 0.045);

      thudGain.gain.setValueAtTime(0.32, now);
      thudGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.045);

      thudOsc.connect(thudGain);
      thudGain.connect(ctx.destination);

      thudOsc.start(now);
      thudOsc.stop(now + 0.05);
    } catch {
      // Audio playback dropped safely
    }
  }

  /**
   * Vintage 80s/90s PC Motherboard Speaker Beep (e.g. IBM 5150 / DOS POST chirp)
   */
  public playVintageBeep(freq = 890, duration = 0.07) {
    if (this.isMuted) return;

    const ctx = this.getContext();
    if (!ctx) return;

    const run = () => {
      try {
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'square';
        osc.frequency.setValueAtTime(freq, now);

        gain.gain.setValueAtTime(0.18, now);
        gain.gain.setValueAtTime(0.18, now + duration - 0.01);
        gain.gain.linearRampToValueAtTime(0.0001, now + duration);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + duration);
      } catch {
        // Dropped safely
      }
    };

    if (ctx.state === 'suspended') {
      ctx.resume().then(run).catch(() => {});
    } else {
      run();
    }
  }

  /**
   * Compatibility Aliases for seamless invocation across components
   */
  public playClick() {
    this.playVintageClick();
  }

  public playPop() {
    this.playVintageRelay();
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    try {
      localStorage.setItem('dsk_sound_muted', String(this.isMuted));
    } catch {
      // LocalStorage unavailable
    }
    return this.isMuted;
  }

  public setMute(muted: boolean) {
    this.isMuted = muted;
    try {
      localStorage.setItem('dsk_sound_muted', String(this.isMuted));
    } catch {
      // LocalStorage unavailable
    }
  }

  public getMuted(): boolean {
    return this.isMuted;
  }
}

export const soundManager = new VintageComputerSoundManager();
