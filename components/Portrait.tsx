import Image from "next/image";

// Pencil-sketch portrait that turns into the colour photo on hover.
// The sketch is pure CSS: a grayscale copy under an inverted, blurred, colour-dodged copy.
// Photo is the cutout from the Framer site; `npm run assets` copies it to public/work/ee.png.
const PHOTO = "https://framerusercontent.com/images/q6TCm4lSgm6ShO7kLs7VCvHY4o.png";
export function Portrait() {
  return (
    <div className="portrait ld" style={{ transitionDelay: ".3s" }} aria-label="Photo of Ee">
      <Image className="base" src={PHOTO} alt="Ee Yern Ng" width={805} height={941} priority />
      <Image className="dodge" src={PHOTO} alt="" width={400} height={400} aria-hidden="true" priority />
    </div>
  );
}
