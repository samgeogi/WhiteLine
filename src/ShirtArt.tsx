// Layered SVG garment with volumetric shading: backdrop + floor shadow behind, shaded shirt in front.
const SHIRT_PATH = 'm191 77-59 23-62 88 57 39 31-41-5 196q88 17 176 0l-5-196 31 41 57-39-62-88-59-23Z';
const HANGER_PATH = 'M240 42v-8c0-13 19-14 19-2 0 7-10 10-15 13l-91 42h174l-83-42';

export default function ShirtArt() {
  return (
    <>
      <svg viewBox="0 0 480 440" className="uniform-art uniform-layer uniform-layer-back" aria-hidden="true">
        <defs>
          <radialGradient id="stage-glow" cx="50%" cy="45%" r="55%">
            <stop stopColor="#fffdf7" />
            <stop offset="1" stopColor="#eeeae1" stopOpacity="0" />
          </radialGradient>
          <filter id="floor-blur" x="-20%" y="-80%" width="140%" height="260%">
            <feGaussianBlur stdDeviation="9" />
          </filter>
        </defs>
        <circle cx="240" cy="211" r="190" fill="url(#stage-glow)" />
        <circle cx="240" cy="211" r="170" fill="none" stroke="#c9b99f" strokeOpacity=".45" />
        <circle cx="240" cy="211" r="143" fill="none" stroke="#c9b99f" strokeOpacity=".25" />
        <ellipse cx="240" cy="404" rx="120" ry="13" fill="#102c45" fillOpacity=".3" filter="url(#floor-blur)" />
      </svg>

      <svg viewBox="0 0 480 440" role="img" aria-labelledby="uniform-title" className="uniform-art uniform-layer uniform-layer-shirt">
        <title id="uniform-title">Illustrated navy uniform shirt with tailored collar, pocket and embroidered Whiteline mark</title>
        <defs>
          <linearGradient id="shirt-body" x1="0" y1="0" x2="1" y2="0">
            <stop stopColor="#122e4a" />
            <stop offset=".22" stopColor="#1f3f5e" />
            <stop offset=".48" stopColor="#2d4e6c" />
            <stop offset=".74" stopColor="#1c3b59" />
            <stop offset="1" stopColor="#0d2640" />
          </linearGradient>
          <linearGradient id="shirt-vertical" x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#fff" stopOpacity=".10" />
            <stop offset=".45" stopColor="#fff" stopOpacity="0" />
            <stop offset="1" stopColor="#000" stopOpacity=".3" />
          </linearGradient>
          <radialGradient id="chest-light" cx="42%" cy="30%" r="45%">
            <stop stopColor="#fff" stopOpacity=".16" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="sleeve-left" x1="1" y1="0" x2="0" y2="1">
            <stop stopColor="#000" stopOpacity=".05" />
            <stop offset="1" stopColor="#000" stopOpacity=".42" />
          </linearGradient>
          <linearGradient id="sleeve-right" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#fff" stopOpacity=".06" />
            <stop offset="1" stopColor="#000" stopOpacity=".38" />
          </linearGradient>
          <linearGradient id="collar-face" x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#4b6b87" />
            <stop offset="1" stopColor="#294765" />
          </linearGradient>
          <linearGradient id="pocket-face" x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#2b4b69" />
            <stop offset="1" stopColor="#163351" />
          </linearGradient>
          <radialGradient id="button-face" cx="35%" cy="30%" r="70%">
            <stop stopColor="#f3e2b8" />
            <stop offset=".6" stopColor="#c9a86a" />
            <stop offset="1" stopColor="#8a6a32" />
          </radialGradient>
          <linearGradient id="hanger-metal" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#e2c58c" />
            <stop offset=".5" stopColor="#aa8a57" />
            <stop offset="1" stopColor="#7a5c2e" />
          </linearGradient>
          <pattern id="fabric-weave" width="5" height="5" patternUnits="userSpaceOnUse">
            <path d="M0 0h5M0 0v5" stroke="#fff" strokeOpacity=".055" strokeWidth=".6" />
          </pattern>
          <filter id="garment-shadow" x="-30%" y="-20%" width="160%" height="160%">
            <feDropShadow dx="0" dy="18" stdDeviation="14" floodColor="#102c45" floodOpacity=".22" />
          </filter>
          <filter id="soft-fold" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="5" />
          </filter>
          <filter id="pocket-shadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="3" stdDeviation="2.5" floodColor="#061627" floodOpacity=".55" />
          </filter>
          <clipPath id="shirt-clip"><path d={SHIRT_PATH} /></clipPath>
        </defs>
        {/* Hanger */}
        <path d={HANGER_PATH} fill="none" stroke="url(#hanger-metal)" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d={HANGER_PATH} fill="none" stroke="#fff" strokeOpacity=".35" strokeWidth="1" strokeLinecap="round" strokeDasharray="30 400" />

        <g filter="url(#garment-shadow)">
          {/* Body: base colour, weave, vertical falloff, chest highlight */}
          <path d={SHIRT_PATH} fill="url(#shirt-body)" />
          <path d={SHIRT_PATH} fill="url(#fabric-weave)" />
          <path d={SHIRT_PATH} fill="url(#shirt-vertical)" />
          <path d={SHIRT_PATH} fill="url(#chest-light)" />

          <g clipPath="url(#shirt-clip)">
            {/* Sleeve volume */}
            <path d="m132 100-62 88 57 39 31-41V100Z" fill="url(#sleeve-left)" />
            <path d="m348 100 62 88-57 39-31-41V100Z" fill="url(#sleeve-right)" />
            {/* Soft drape folds */}
            <path d="M158 190q-8 90-6 180" stroke="#06182a" strokeOpacity=".45" strokeWidth="14" fill="none" filter="url(#soft-fold)" />
            <path d="M322 190q8 90 6 180" stroke="#06182a" strokeOpacity=".4" strokeWidth="12" fill="none" filter="url(#soft-fold)" />
            <path d="M205 130q-6 120 2 250" stroke="#000" strokeOpacity=".16" strokeWidth="22" fill="none" filter="url(#soft-fold)" />
            <path d="M287 140q10 110 0 240" stroke="#fff" strokeOpacity=".06" strokeWidth="18" fill="none" filter="url(#soft-fold)" />
            {/* Underarm shadow */}
            <path d="m127 190 31-4-8 24Z" fill="#061627" fillOpacity=".5" filter="url(#soft-fold)" />
            <path d="m353 190-31-4 8 24Z" fill="#061627" fillOpacity=".5" filter="url(#soft-fold)" />
            {/* Shoulder yoke seams (double row) */}
            <path d="M132 100 191 77M348 100 289 77" stroke="#8aa0b4" strokeOpacity=".4" strokeWidth="1" />
            <path d="M136 105 193 83M344 105 287 83" stroke="#b9c8d3" strokeOpacity=".3" strokeDasharray="2 3" strokeWidth=".8" />
          </g>

          {/* Back-neck and collar */}
          <path d="m191 77 49 34 51-34-17-14h-65Z" fill="#071a2d" />
          <path d="m209 63 31 48-32 30-25-56Z" fill="url(#collar-face)" stroke="#6b8296" strokeWidth=".7" />
          <path d="m274 63-34 48 33 30 27-56Z" fill="url(#collar-face)" stroke="#6b8296" strokeWidth=".7" />
          <path d="m213 69 25 40-27 25-21-47ZM270 69l-28 40 28 25 22-47Z" fill="none" stroke="#c3d1dc" strokeOpacity=".3" strokeWidth=".8" strokeDasharray="2 3" />

          {/* Placket */}
          <path d="M233 112h14v282h-14Z" fill="#000" fillOpacity=".12" />
          <path d="M240 112v282" stroke="#678097" strokeOpacity=".5" />
          <path d="M233 113v280M247 113v280" fill="none" stroke="#b9c8d3" strokeOpacity=".32" strokeDasharray="2 4" />
          {/* Side seams and armhole seams (twin-stitched) */}
          <path d="m158 189-4 188M324 189l4 188M78 184l51 35M352 219l51-35" fill="none" stroke="#b9c8d3" strokeOpacity=".3" strokeDasharray="2 4" />
          <path d="m154 189-4 188M328 189l4 188" fill="none" stroke="#b9c8d3" strokeOpacity=".18" strokeDasharray="2 4" />
          {/* Bar-tacks */}
          <path d="M156 187h5M321 187h5" stroke="#c9a86a" strokeWidth="2.4" strokeLinecap="round" />

          {/* Pocket */}
          <g filter="url(#pocket-shadow)">
            <path d="M269 174h46v44l-23 12-23-12Z" fill="url(#pocket-face)" stroke="#6b8295" strokeWidth=".8" />
          </g>
          <path d="M269 181h46" stroke="#6b8295" strokeWidth=".8" />
          <path d="M271 176h42v3h-42Z" fill="#fff" fillOpacity=".08" />
          <path d="m269 174 2 4M315 174l-2 4" stroke="#c9a86a" strokeWidth="1.6" strokeLinecap="round" />
          <path d="m279 198-3 12m9-12-3 12m9-12 1 12 5-8 1 8 5-12" fill="none" stroke="#c9a86a" strokeWidth="2.5" strokeLinejoin="round" />

          {/* Buttons with shadow and cross stitch */}
          {[153, 198, 243, 288, 333, 378].map(y => (
            <g key={y}>
              <circle cx="243.5" cy={y + 1.2} r="3.2" fill="#000" fillOpacity=".35" />
              <circle cx="243.5" cy={y} r="3.1" fill="url(#button-face)" />
              <path d={`M242.3 ${y - 1.2}l2.4 2.4m0-2.4-2.4 2.4`} stroke="#5a4218" strokeWidth=".5" />
            </g>
          ))}

          {/* Hem */}
          <path d="M155 377q87 15 172 0" fill="none" stroke="#94a7b7" strokeOpacity=".4" strokeDasharray="2 4" />
          <path d="M152 382q88 17 176 0" fill="none" stroke="#000" strokeOpacity=".25" />
        </g>
      </svg>
    </>
  );
}
