import React, { useEffect, useRef } from 'react';

/* ── types ─────────────────────────────────────────── */
interface Neuron {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;              // soma radius
  opacity: number;
  pulseSpeed: number;
  pulseOffset: number;
  // fixed dendrite branches (angle + length)
  dendrites: { angle: number; len: number }[];
}

interface Signal {
  a: number;   // index of source neuron
  b: number;   // index of target neuron
  t: number;   // 0→1 progress along the axon
  speed: number;
}

/* ── component ─────────────────────────────────────── */
export const BackgroundParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let raf: number;
    let W = (canvas.width  = window.innerWidth);
    let H = (canvas.height = window.innerHeight);

    /* ── parameters ── */
    const COUNT    = W < 768 ? 38 : 65;
    const MAX_DIST = 170;       // max synapse distance (px)
    const MAX_SIG  = 12;        // max simultaneous travelling signals

    /* ── neuron factory ── */
    const makeNeuron = (): Neuron => {
      const branchCount = Math.floor(Math.random() * 4) + 3; // 3–6 dendrites
      return {
        x:           Math.random() * W,
        y:           Math.random() * H,
        vx:          (Math.random() - 0.5) * 0.28,
        vy:          (Math.random() - 0.5) * 0.28,
        r:           Math.random() * 2.0 + 1.5,   // 1.5–3.5 px soma
        opacity:     Math.random() * 0.45 + 0.25,
        pulseSpeed:  Math.random() * 0.025 + 0.008,
        pulseOffset: Math.random() * Math.PI * 2,
        dendrites:   Array.from({ length: branchCount }, () => ({
          angle: Math.random() * Math.PI * 2,
          len:   Math.random() * 22 + 10,          // 10–32 px
        })),
      };
    };

    const neurons: Neuron[] = Array.from({ length: COUNT }, makeNeuron);
    const signals: Signal[]  = [];

    /* spawn an initial burst of signals */
    const spawnSignal = () => {
      if (signals.length >= MAX_SIG) return;
      const a = Math.floor(Math.random() * neurons.length);
      const b = Math.floor(Math.random() * neurons.length);
      if (a === b) return;
      const na = neurons[a], nb = neurons[b];
      const dx = nb.x - na.x, dy = nb.y - na.y;
      if (Math.sqrt(dx * dx + dy * dy) > MAX_DIST) return;
      signals.push({ a, b, t: 0, speed: Math.random() * 0.008 + 0.004 });
    };

    /* ── resize ── */
    const onResize = () => {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);

    /* ── draw helpers ── */

    /* soma (cell body) */
    const drawSoma = (n: Neuron, alpha: number) => {
      const glow = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 3.5);
      glow.addColorStop(0,    `rgba(255,255,255,${alpha * 0.70})`);
      glow.addColorStop(0.35, `rgba(220,230,255,${alpha * 0.25})`);
      glow.addColorStop(1,    'rgba(0,0,0,0)');
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r * 3.5, 0, Math.PI * 2);
      ctx.fill();

      /* solid core */
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${alpha * 0.90})`;
      ctx.fill();
    };

    /* dendrites — tapered lines radiating from soma */
    const drawDendrites = (n: Neuron, alpha: number) => {
      for (const d of n.dendrites) {
        const ex = n.x + Math.cos(d.angle) * d.len;
        const ey = n.y + Math.sin(d.angle) * d.len;

        const grad = ctx.createLinearGradient(n.x, n.y, ex, ey);
        grad.addColorStop(0,   `rgba(255,255,255,${alpha * 0.45})`);
        grad.addColorStop(0.6, `rgba(255,255,255,${alpha * 0.12})`);
        grad.addColorStop(1,   'rgba(255,255,255,0)');

        ctx.beginPath();
        ctx.moveTo(n.x, n.y);
        ctx.lineTo(ex, ey);
        ctx.strokeStyle = grad;
        ctx.lineWidth   = 0.7;
        ctx.stroke();

        /* tiny terminal bulb at dendrite tip */
        ctx.beginPath();
        ctx.arc(ex, ey, 0.7, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${alpha * 0.30})`;
        ctx.fill();
      }
    };

    /* axon connection between two nearby neurons */
    const drawAxon = (na: Neuron, nb: Neuron, dist: number) => {
      const proximity = 1 - dist / MAX_DIST;
      const alpha     = proximity * proximity * 0.55; // quadratic fade

      const grad = ctx.createLinearGradient(na.x, na.y, nb.x, nb.y);
      grad.addColorStop(0,   `rgba(255,255,255,${alpha})`);
      grad.addColorStop(0.5, `rgba(220,230,255,${alpha * 0.70})`);
      grad.addColorStop(1,   `rgba(255,255,255,${alpha})`);

      ctx.beginPath();
      ctx.moveTo(na.x, na.y);
      ctx.lineTo(nb.x, nb.y);
      ctx.strokeStyle = grad;
      ctx.lineWidth   = 0.55 * proximity;
      ctx.stroke();
    };

    /* travelling signal pulse along a connection */
    const drawSignal = (sig: Signal) => {
      const na = neurons[sig.a], nb = neurons[sig.b];
      const dx = nb.x - na.x, dy = nb.y - na.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist > MAX_DIST) return;

      const px = na.x + dx * sig.t;
      const py = na.y + dy * sig.t;

      /* glow dot */
      const g = ctx.createRadialGradient(px, py, 0, px, py, 5);
      g.addColorStop(0,   'rgba(255,255,255,0.95)');
      g.addColorStop(0.4, 'rgba(200,220,255,0.40)');
      g.addColorStop(1,   'rgba(0,0,0,0)');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(px, py, 5, 0, Math.PI * 2);
      ctx.fill();

      /* trail behind the pulse */
      const tx = px - dx * 0.12;
      const ty = py - dy * 0.12;
      const trail = ctx.createLinearGradient(tx, ty, px, py);
      trail.addColorStop(0, 'rgba(255,255,255,0)');
      trail.addColorStop(1, 'rgba(255,255,255,0.55)');
      ctx.beginPath();
      ctx.moveTo(tx, ty);
      ctx.lineTo(px, py);
      ctx.strokeStyle = trail;
      ctx.lineWidth   = 1.2;
      ctx.stroke();
    };

    /* ── main render loop ── */
    let t = 0;
    const render = () => {
      t++;
      ctx.clearRect(0, 0, W, H);

      if (!reduced) {
        /* move neurons */
        for (const n of neurons) {
          n.x += n.vx;
          n.y += n.vy;

          /* wrap */
          if (n.x < -40)    n.x = W + 40;
          if (n.x > W + 40) n.x = -40;
          if (n.y < -40)    n.y = H + 40;
          if (n.y > H + 40) n.y = -40;

          /* very gentle random wander */
          n.vx += (Math.random() - 0.5) * 0.005;
          n.vy += (Math.random() - 0.5) * 0.005;
          /* clamp speed */
          const spd = Math.sqrt(n.vx * n.vx + n.vy * n.vy);
          if (spd > 0.35) { n.vx /= spd / 0.35; n.vy /= spd / 0.35; }
        }

        /* advance signals, cull finished ones */
        for (let i = signals.length - 1; i >= 0; i--) {
          signals[i].t += signals[i].speed;
          if (signals[i].t >= 1) signals.splice(i, 1);
        }

        /* randomly fire new signals */
        if (t % 40 === 0) spawnSignal();
      }

      /* ── draw axons (connections) first — behind everything ── */
      for (let i = 0; i < neurons.length; i++) {
        for (let j = i + 1; j < neurons.length; j++) {
          const dx = neurons[j].x - neurons[i].x;
          const dy = neurons[j].y - neurons[i].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) drawAxon(neurons[i], neurons[j], dist);
        }
      }

      /* ── draw dendrites ── */
      for (const n of neurons) {
        const pulse = 0.80 + 0.20 * Math.sin(t * n.pulseSpeed + n.pulseOffset);
        drawDendrites(n, n.opacity * pulse);
      }

      /* ── draw signals ── */
      for (const sig of signals) drawSignal(sig);

      /* ── draw somas on top ── */
      for (const n of neurons) {
        const pulse = 0.78 + 0.22 * Math.sin(t * n.pulseSpeed + n.pulseOffset);
        drawSoma(n, n.opacity * pulse);
      }

      if (!reduced) raf = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', onResize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {/* pure black base */}
      <div className="absolute inset-0 bg-[#080a0f]" />

      {/* very faint frosted depth layers */}
      <div className="absolute -top-40 -left-40 w-[560px] h-[560px] rounded-full
                      bg-white/[0.012] blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      w-[800px] h-[500px] rounded-full
                      bg-white/[0.009] blur-[170px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[520px] h-[520px] rounded-full
                      bg-white/[0.014] blur-[140px] pointer-events-none" />

      {/* edge vignette */}
      <div className="absolute inset-0
                      bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,transparent_30%,rgba(0,0,0,0.65)_100%)]
                      pointer-events-none" />

      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />
    </div>
  );
};
