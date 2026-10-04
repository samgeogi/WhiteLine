import { useEffect, useRef, useState } from 'react';
import ShirtArt from './ShirtArt';

// An original garment illustration with layered depth: no external image requests or stock photography.
// The shirt sits on a perspective stage that tilts with the pointer; numbered hotspots explain the stitching.

export type StitchFeature = {
  id: string;
  n: string;
  x: number; // viewBox coordinates (0-480)
  y: number; // viewBox coordinates (0-440)
  title: string;
  spec: string;
  desc: string;
};

export const stitchFeatures: StitchFeature[] = [
  { id: 'yoke', n: '01', x: 196, y: 92, title: 'Reinforced shoulder yoke', spec: 'Double-needle · 10–12 stitches per inch',
    desc: 'Shoulders carry bag straps and daily tugging, so every yoke is double-stitched with a second parallel row. Seam allowances are overlocked inside, so nothing frays in the wash.' },
  { id: 'collar', n: '02', x: 262, y: 84, title: 'Fused, top-stitched collar', spec: 'Interlined collar · Edge-stitched',
    desc: 'The collar is fused with a woven interlining before stitching, so it keeps its shape after hundreds of washes. Edge-stitching stops the points from curling in Kerala humidity.' },
  { id: 'pocket', n: '03', x: 292, y: 190, title: 'In-house embroidered crest', spec: 'Computerised embroidery · Bar-tacked corners',
    desc: 'Your institution’s logo, house badge or name is embroidered on our own machines, not printed, so it never peels. Pocket corners are bar-tacked where fingers pull every day.' },
  { id: 'seam', n: '04', x: 158, y: 196, title: 'Bar-tacked stress points', spec: 'Underarm & side seams · Twin-stitched',
    desc: 'Underarms and side seams take the most strain when a student raises a hand or a nurse lifts a patient. We twin-stitch these seams and add bar-tacks at every junction.' },
  { id: 'placket', n: '05', x: 243, y: 290, title: 'Front placket & buttons', spec: 'Cross-stitched buttons · Thread shank',
    desc: 'Buttons are machine-attached with a cross stitch and a thread shank, so they do not pop off on the first morning. Buttonholes are cut after stitching for a clean, fray-free edge.' },
  { id: 'hem', n: '06', x: 240, y: 376, title: 'Pre-shrunk, folded hem', spec: 'Colour-fast · Low-shrink mills-direct fabric',
    desc: 'Fabric is sourced mills-direct and tested for shrinkage and colour-fastness before cutting. A clean folded hem keeps the length true, and every piece passes a 3-stage quality check before pressing and packing.' },
];

export default function UniformIllustration() {
  const [active, setActive] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const stageRef = useRef<HTMLDivElement>(null);
  const canTilt = useRef(false);

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => {
      canTilt.current = fine.matches && !reduced.matches;
      if (!canTilt.current) setTilt({ x: 0, y: 0 });
    };
    update();
    fine.addEventListener('change', update);
    reduced.addEventListener('change', update);
    return () => { fine.removeEventListener('change', update); reduced.removeEventListener('change', update); };
  }, []);

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!canTilt.current || !stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: -py * 14, y: px * 18 });
  };

  const feature = stitchFeatures[active];

  return (
    <div className="uniform-visual">
      <div className="uniform-visual-heading">
        <span>THE WHITELINE STANDARD</span>
        <span>EST. 2014</span>
      </div>

      <div ref={stageRef} className="uniform-stage" onPointerMove={onPointerMove} onPointerLeave={() => setTilt({ x: 0, y: 0 })}>
        <div className="uniform-stage-3d" style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}>
          <ShirtArt />
          <div className="uniform-layer uniform-layer-hotspots">
            {stitchFeatures.map((f, i) => (
              <button
                key={f.id}
                type="button"
                className={`stitch-hotspot${i === active ? ' is-active' : ''}`}
                style={{ left: `${(f.x / 480) * 100}%`, top: `${(f.y / 440) * 100}%` }}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                aria-pressed={i === active}
                aria-label={`${f.n}: ${f.title}`}
                aria-describedby="stitch-detail"
              >
                <span aria-hidden="true">{f.n}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="stitch-detail" id="stitch-detail" role="region" aria-live="polite" aria-label="Stitching feature detail">
        <div className="stitch-detail-head">
          <span className="stitch-detail-n">{feature.n}</span>
          <div>
            <h3>{feature.title}</h3>
            <div className="stitch-detail-spec">{feature.spec}</div>
          </div>
        </div>
        <p>{feature.desc}</p>
        <div className="stitch-detail-nav" aria-hidden="true">
          {stitchFeatures.map((f, i) => <span key={f.id} className={i === active ? 'is-active' : ''} />)}
        </div>
      </div>

      <div className="uniform-visual-footer">
        <div><span className="visual-eyebrow">CONSIDERED IN EVERY DETAIL</span><p>Quality you can feel.<br />An identity you can wear.</p></div>
        <div className="fabric-palette" aria-label="Navy, white and khaki fabric palette"><span /><span /><span /></div>
      </div>
      <div className="uniform-caption">Custom sizing <span>·</span> In-house embroidery <span>·</span> Factory direct</div>
    </div>
  );
}
