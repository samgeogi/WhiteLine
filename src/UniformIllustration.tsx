// An original garment illustration: no external image requests or stock photography.
export default function UniformIllustration() {
  return (
    <div className="uniform-visual">
      <div className="uniform-visual-heading">
        <span>THE WHITELINE STANDARD</span>
        <span>EST. 2014</span>
      </div>
      <svg viewBox="0 0 480 440" role="img" aria-labelledby="uniform-title" className="uniform-art">
        <title id="uniform-title">Illustrated navy uniform shirt with tailored collar, pocket and embroidered Whiteline mark</title>
        <defs>
          <linearGradient id="shirt-fabric" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#294965" />
            <stop offset="1" stopColor="#0d263e" />
          </linearGradient>
          <pattern id="fabric-weave" width="5" height="5" patternUnits="userSpaceOnUse">
            <path d="M0 0h5M0 0v5" stroke="#fff" strokeOpacity=".055" strokeWidth=".6" />
          </pattern>
          <filter id="garment-shadow" x="-30%" y="-20%" width="160%" height="160%">
            <feDropShadow dx="0" dy="16" stdDeviation="13" floodColor="#102c45" floodOpacity=".18" />
          </filter>
        </defs>
        <circle cx="240" cy="211" r="170" fill="none" stroke="#c9b99f" strokeOpacity=".45" />
        <circle cx="240" cy="211" r="143" fill="none" stroke="#c9b99f" strokeOpacity=".25" />
        <path d="M240 42v-8c0-13 19-14 19-2 0 7-10 10-15 13l-91 42h174l-83-42" fill="none" stroke="#aa8a57" strokeWidth="3" strokeLinecap="round" />
        <g filter="url(#garment-shadow)">
          <path d="m191 77-59 23-62 88 57 39 31-41-5 196q88 17 176 0l-5-196 31 41 57-39-62-88-59-23Z" fill="url(#shirt-fabric)" />
          <path d="m191 77-59 23-62 88 57 39 31-41-5 196q88 17 176 0l-5-196 31 41 57-39-62-88-59-23Z" fill="url(#fabric-weave)" />
          <path d="m191 77 49 34 51-34-17-14h-65Z" fill="#0a2035" />
          <path d="m209 63 31 48-32 30-25-56ZM274 63l-34 48 33 30 27-56Z" fill="#36546e" stroke="#61768a" strokeWidth=".7" />
          <path d="M240 112v282" stroke="#678097" strokeOpacity=".45" />
          <path d="M247 113v280M158 189l-4 188M324 189l4 188M78 184l51 35M352 219l51-35" fill="none" stroke="#b9c8d3" strokeOpacity=".3" strokeDasharray="2 4" />
          <path d="M269 174h46v44l-23 12-23-12Z" fill="#1c3853" stroke="#6b8295" strokeWidth=".8" />
          <path d="M269 181h46" stroke="#6b8295" strokeWidth=".8" />
          <g fill="#c9a86a">
            {[153, 198, 243, 288, 333, 378].map(y => <circle key={y} cx="243.5" cy={y} r="2.2" />)}
          </g>
          <path d="m279 198-3 12m9-12-3 12m9-12 1 12 5-8 1 8 5-12" fill="none" stroke="#c9a86a" strokeWidth="2.5" />
          <path d="M155 377q87 15 172 0" fill="none" stroke="#94a7b7" strokeOpacity=".4" strokeDasharray="2 4" />
        </g>
        <path d="M307 156h73m-190 158H91" stroke="#aa8a57" strokeWidth="1" />
        <circle cx="307" cy="156" r="3" fill="#aa8a57" />
        <circle cx="190" cy="314" r="3" fill="#aa8a57" />
      </svg>
      <div className="uniform-visual-footer">
        <div><span className="visual-eyebrow">CONSIDERED IN EVERY DETAIL</span><p>Quality you can feel.<br />An identity you can wear.</p></div>
        <div className="fabric-palette" aria-label="Navy, white and khaki fabric palette"><span /><span /><span /></div>
      </div>
      <div className="uniform-caption">Custom sizing <span>·</span> In-house embroidery <span>·</span> Factory direct</div>
    </div>
  );
}
