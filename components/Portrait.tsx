import Image from "next/image";
import { Face } from "./Face";

// Line-art portrait (components/Face.tsx) that crossfades to the colour photo on hover.
export function Portrait() {
  return (
    <div className="portrait ld" style={{ transitionDelay: ".3s" }} role="img" aria-label="Portrait of Ee Yern Ng">
      <Image className="photo" src="/work/ee.png" alt="" width={800} height={800} aria-hidden="true" priority />
      <Face className="face" />
    </div>
  );
}
