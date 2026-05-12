import { useEffect, useRef } from "react";
import createGlobe from "cobe";

const ARCS = [
  { from: [13.4, -16.6] as [number,number], to: [51.5,  -0.1]  as [number,number], color: [0.61, 0.71, 0.2] as [number,number,number] },
  { from: [13.4, -16.6] as [number,number], to: [40.7,  -74.0] as [number,number], color: [0.61, 0.71, 0.2] as [number,number,number] },
  { from: [13.4, -16.6] as [number,number], to: [1.3,   103.8] as [number,number], color: [0.61, 0.71, 0.2] as [number,number,number] },
  { from: [13.4, -16.6] as [number,number], to: [6.5,   3.4]   as [number,number], color: [0.85, 0.85, 0.3] as [number,number,number] },
  { from: [13.4, -16.6] as [number,number], to: [-1.3,  36.8]  as [number,number], color: [0.61, 0.71, 0.2] as [number,number,number] },
  { from: [13.4, -16.6] as [number,number], to: [48.9,  2.3]   as [number,number], color: [0.85, 0.85, 0.3] as [number,number,number] },
  { from: [13.4, -16.6] as [number,number], to: [24.7,  46.7]  as [number,number], color: [0.61, 0.71, 0.2] as [number,number,number] },
  { from: [6.5,  3.4]   as [number,number], to: [51.5,  -0.1]  as [number,number], color: [0.85, 0.85, 0.3] as [number,number,number] },
  { from: [-1.3, 36.8]  as [number,number], to: [40.7,  -74.0] as [number,number], color: [0.61, 0.71, 0.2] as [number,number,number] },
];

export default function GlobeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const phiRef = useRef(0.6);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let width = canvas.offsetWidth;
    const onResize = () => { width = canvas.offsetWidth; };
    window.addEventListener("resize", onResize);

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0.6,
      theta: -0.3,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 18000,
      mapBrightness: 6,
      baseColor: [0.12, 0.06, 0.18],
      markerColor: [0.61, 0.71, 0.2],
      glowColor: [0.35, 0.17, 0.45],
      markers: [
        { location: [13.4,  -16.6] as [number,number], size: 0.08 },
        { location: [6.5,    3.4]  as [number,number], size: 0.05 },
        { location: [-1.3,  36.8]  as [number,number], size: 0.05 },
        { location: [5.6,   -0.2]  as [number,number], size: 0.04 },
        { location: [14.7, -17.5]  as [number,number], size: 0.04 },
      ],
      arcs: ARCS,
      onRender(state) {
        state.phi = phiRef.current;
        phiRef.current += 0.003;
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-end pointer-events-none overflow-hidden">
      <div
        className="relative"
        style={{ width: "min(90vh, 800px)", height: "min(90vh, 800px)", right: "-15%" }}
      >
        <canvas
          ref={canvasRef}
          className="w-full h-full opacity-50"
          style={{ contain: "layout paint size" }}
        />
        <div
          className="absolute inset-0 rounded-full"
          style={{ background: "radial-gradient(circle at 30% 50%, transparent 40%, #06060f 75%)" }}
        />
      </div>
    </div>
  );
}
