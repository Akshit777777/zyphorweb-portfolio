"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function MountainScene() {
  const { scrollYProgress } = useScroll();
  const nearY = useTransform(scrollYProgress, [0, 0.35], [0, 72]);
  const farY = useTransform(scrollYProgress, [0, 0.35], [0, 30]);
  const zoom = useTransform(scrollYProgress, [0, 0.35], [1, 1.08]);

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Cinematic mountain sky and soft fog layers */}
      <motion.div
        className="absolute inset-[-5%] bg-[radial-gradient(circle_at_50%_18%,rgba(184,211,230,0.26),transparent_26%),linear-gradient(180deg,#103f6f_0%,#061a34_42%,#020a16_100%)]"
        style={{ scale: zoom }}
      />
      <motion.div
        className="mountain mountain-far"
        style={{ y: farY }}
        animate={{ scale: [1, 1.025, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="mountain mountain-mid"
        style={{ y: nearY }}
        animate={{ scale: [1.02, 1.05, 1.02] }}
        transition={{ duration: 2.7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="mountain mountain-front"
        style={{ y: nearY }}
        animate={{ scale: [1.03, 1.065, 1.03] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,10,22,0.88),rgba(3,22,46,0.42),rgba(2,10,22,0.82))]" />
      <div className="fog fog-one" />
      <div className="fog fog-two" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(125,201,239,0.16),transparent_24%),linear-gradient(180deg,transparent_0%,rgba(2,10,22,0.5)_72%,#020a16_100%)]" />
      <style jsx>{`
        .mountain {
          position: absolute;
          left: 50%;
          bottom: -10%;
          width: 150vw;
          height: 62vh;
          transform: translateX(-50%);
          transform-origin: bottom center;
          clip-path: polygon(0 78%, 9% 65%, 18% 70%, 30% 42%, 38% 56%, 48% 24%, 59% 55%, 69% 36%, 80% 64%, 90% 50%, 100% 72%, 100% 100%, 0 100%);
        }
        .mountain-far {
          bottom: 17%;
          height: 50vh;
          opacity: 0.42;
          background: linear-gradient(180deg, rgba(73, 137, 180, 0.7), rgba(6, 26, 52, 0.92));
          filter: blur(1px);
        }
        .mountain-mid {
          bottom: 4%;
          height: 58vh;
          opacity: 0.72;
          background: linear-gradient(180deg, rgba(25, 105, 159, 0.78), rgba(3, 22, 46, 0.96));
          clip-path: polygon(0 82%, 8% 72%, 19% 58%, 29% 66%, 39% 31%, 47% 52%, 56% 22%, 67% 63%, 75% 45%, 84% 64%, 93% 48%, 100% 76%, 100% 100%, 0 100%);
        }
        .mountain-front {
          bottom: -13%;
          height: 54vh;
          opacity: 0.95;
          background: linear-gradient(180deg, rgba(10, 55, 100, 0.98), rgba(2, 10, 22, 1));
          clip-path: polygon(0 64%, 8% 48%, 17% 62%, 27% 30%, 36% 58%, 44% 36%, 54% 70%, 65% 28%, 76% 62%, 84% 39%, 93% 67%, 100% 52%, 100% 100%, 0 100%);
        }
        .fog {
          position: absolute;
          left: -20%;
          right: -20%;
          height: 18vh;
          border-radius: 999px;
          background: linear-gradient(90deg, transparent, rgba(184, 211, 230, 0.12), rgba(255, 255, 255, 0.1), transparent);
          filter: blur(24px);
          animation: drift 10s ease-in-out infinite alternate;
        }
        .fog-one {
          bottom: 25%;
        }
        .fog-two {
          bottom: 11%;
          opacity: 0.72;
          animation-duration: 13s;
          animation-direction: alternate-reverse;
        }
        @keyframes drift {
          from {
            transform: translateX(-4%);
          }
          to {
            transform: translateX(6%);
          }
        }
      `}</style>
    </div>
  );
}
