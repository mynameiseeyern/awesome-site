import Image from "next/image";

// Hand-drawn portrait that turns into the colour photo on hover.
// Both images are pre-rendered (public/work/ee-sketch.png is the pencil drawing, ee.png the colour cutout),
// so there are no live filters. The frame is always light paper, so the drawing reads in dark mode too.
export function Portrait() {
  return (
    <div className="portrait ld" style={{ transitionDelay: ".3s" }}>
      <Image className="photo" src="/work/ee.png" alt="" width={800} height={800} aria-hidden="true" priority />
      <Image className="sketch" src="/work/ee-sketch.png" alt="Portrait of Ee Yern Ng" width={800} height={800} priority />
    </div>
  );
}
