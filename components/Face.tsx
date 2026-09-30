// Original line-art portrait in the site's sketch style (same strokes as the card illustrations).
// Round glasses, hair parted on the left and swept right, mandarin-collar shirt, small smile.
// Colours come from CSS: strokes use --line, solid areas use --ink-fill (charcoal in light, soft grey in dark).
export function Face({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" aria-hidden="true">
      {/* shirt, mandarin collar */}
      <path className="ink-fill" d="M26 200c2-32 16-50 46-60l12-4c8 6 24 6 32 0l12 4c30 10 44 28 46 60z" />
      <path className="paper" d="M84 140c4 9 28 9 32 0l-3 14c-6 4-20 4-26 0z" />
      <path d="M82 136l-7 11M118 136l7 11" />
      {/* neck */}
      <path className="paper" d="M80 112v26c8 7 32 7 40 0v-26z" />
      <path d="M80 122c8 7 32 7 40 0" opacity=".35" />
      {/* head */}
      <path className="paper" d="M52 82c0-36 20-58 48-58s48 22 48 58c0 30-18 52-48 52S52 112 52 82z" />
      {/* ears */}
      <path className="paper" d="M53 86c-7-3-12 4-10 11s7 9 11 6M147 86c7-3 12 4 10 11s-7 9-11 6" />
      {/* hair: parted left, swept over to the right */}
      <path className="ink-fill" d="M53 84C48 50 66 24 100 24c30 0 48 20 48 50 0 6-1 10-2 12-2-18-10-28-24-30-8 10-24 16-42 14-8 2-15 6-18 12-4 2-7 4-9 2z" />
      <path className="paper-stroke" d="M78 40c14 4 30 4 44-2M66 60c14 1 26-4 36-12" opacity=".55" />
      {/* brows */}
      <path d="M70 74c7-4 16-4 23-1M107 73c7-3 16-3 23 1" strokeWidth="2.3" />
      {/* glasses */}
      <circle className="lens" cx="82" cy="92" r="15" />
      <circle className="lens" cx="118" cy="92" r="15" />
      <path d="M97 91h6M67 89l-11-3M133 89l11-3" />
      {/* eyes, open */}
      <path d="M76 93c3-3 9-3 12 0M112 93c3-3 9-3 12 0" strokeWidth="2.3" />
      <circle className="ink-fill" cx="82" cy="94" r="2.2" />
      <circle className="ink-fill" cx="118" cy="94" r="2.2" />
      {/* nose */}
      <path d="M100 100c-3 7-5 11 0 14" />
      {/* smile */}
      <path d="M86 122c7 6 21 6 28 0" strokeWidth="2.1" />
      {/* necklace */}
      <path d="M90 146c3 9 17 9 20 0" strokeWidth="1.2" opacity=".6" />
    </svg>
  );
}
