import { useEffect, useRef, useState } from "react";
import C from "./afzalImdadSVGs/C";
import U from "./afzalImdadSVGs/U";
import R from "./afzalImdadSVGs/R";
import S from "./afzalImdadSVGs/S";
import E1 from "./afzalImdadSVGs/E1";
import D from "./afzalImdadSVGs/D";
import E2 from "./afzalImdadSVGs/E2";
import V from "./afzalImdadSVGs/V";
import L from "./afzalImdadSVGs/L";
import O from "./afzalImdadSVGs/O";
import P from "./afzalImdadSVGs/P";
import E3 from "./afzalImdadSVGs/E3";
import R2 from "./afzalImdadSVGs/R";

const SvgWrapper = ({ SVG, className, ...rest }) => (
  <div
    {...rest}
    className={`ai-afzal-imdad-parallax ${className}`}
  >
    <SVG />
  </div>
)

export default function AfzalImdad({ }) {
  const ref = useRef()

  const [mount, handleMount] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll()
  }, []);

  const isInViewport = () => {
    const rect = ref?.current?.getBoundingClientRect();
    return (rect?.top < window.innerHeight / 2)
  }

  const handleScroll = () => {
    handleMount(isInViewport())
  }

  return (
    <div ref={ref} className={`ai-afzal-imdad ${mount ? 'ai-afzal-imdad-visible' : ''}`}>
      <SvgWrapper
        className="ai_svg_C"
        SVG={C}
      />
      <SvgWrapper
        className="ai_svg_U"
        SVG={U}
      />
      <SvgWrapper
        className="ai_svg_R"
        SVG={R}
      />
      <SvgWrapper
        className="ai_svg_S"
        SVG={S}
      />
      <SvgWrapper
        className="ai_svg_E1"
        SVG={E1}
      />
      <SvgWrapper
        className="ai_svg_D"
        SVG={D}
      />
      <SvgWrapper
        className="ai_svg_E2"
        SVG={E2}
      />
      <SvgWrapper
        className="ai_svg_V"
        SVG={V}
      />
      <SvgWrapper
        className="ai_svg_L"
        SVG={L}
      />
      <SvgWrapper
        className="ai_svg_O"
        SVG={O}
      />
      <SvgWrapper
        className="ai_svg_P"
        SVG={P}
      />
      <SvgWrapper
        className="ai_svg_E3"
        SVG={E3}
      />
      <SvgWrapper
        className="ai_svg_R2"
        SVG={R2}
      />
    </div>
  )
}
