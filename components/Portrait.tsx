import Image from "next/image";

// Ee's Notion Faces portrait (exported PNG, white keyed out, ink recoloured to charcoal) on a paper frame.
// Hover crossfades to the colour photo. In dark mode the ink is inverted to soft grey via CSS.
export function Portrait() {
  return (
    <div className="portrait ld" style={{ transitionDelay: ".3s" }}>
      <Image className="photo" src="/work/ee.png" alt="" width={800} height={800} aria-hidden="true" priority />
      <Image className="face" src="/work/ee-face.png" alt="Illustrated portrait of Ee Yern Ng" width={900} height={900} priority />
    </div>
  );
}
