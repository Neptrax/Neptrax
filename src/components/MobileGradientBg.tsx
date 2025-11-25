export default function MobileGradientBg() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <style>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes blobFloat1 {
          0%, 100% {
            transform: translate(0, 0);
          }
          33% {
            transform: translate(30px, -50px);
          }
          66% {
            transform: translate(-20px, 30px);
          }
        }

        @keyframes blobFloat2 {
          0%, 100% {
            transform: translate(0, 0);
          }
          33% {
            transform: translate(-40px, 50px);
          }
          66% {
            transform: translate(20px, -40px);
          }
        }

        @keyframes blobFloat3 {
          0%, 100% {
            transform: translate(0, 0);
          }
          33% {
            transform: translate(50px, 30px);
          }
          66% {
            transform: translate(-30px, -50px);
          }
        }

.mobile-gradient-container {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    #0a0f1a 0%,      /* very dark navy */
    #121a3a 25%,     /* dark navy blue */
    #0d223e 50%,     /* deep blue */
    #0a0f1a 75%,     /* very dark navy */
    #141c2e 100%     /* dark slate blue */
  );
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;
}
        }

        .mobile-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.6;
          mix-blend-mode: screen;
        }

        .mobile-blob-1 {
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(37, 99, 235, 0.4) 0%, rgba(37, 99, 235, 0) 70%);
          top: -100px;
          left: -50px;
          animation: blobFloat1 20s ease-in-out infinite;
        }

        .mobile-blob-2 {
          width: 250px;
          height: 250px;
          background: radial-gradient(circle, rgba(11, 60, 77, 0.5) 0%, rgba(11, 60, 77, 0) 70%);
          bottom: -80px;
          right: -50px;
          animation: blobFloat2 25s ease-in-out infinite;
          animation-delay: -5s;
        }

        .mobile-blob-3 {
          width: 280px;
          height: 280px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.35) 0%, rgba(59, 130, 246, 0) 70%);
          top: 50%;
          left: 10%;
          animation: blobFloat3 22s ease-in-out infinite;
          animation-delay: -10s;
        }

        .mobile-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg,
            rgba(15, 23, 42, 0.3) 0%,
            rgba(30, 58, 138, 0.4) 50%,
            rgba(15, 23, 42, 0.3) 100%);
          mix-blend-mode: multiply;
        }

        .mobile-accent-line {
          position: absolute;
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(37, 99, 235, 0.3), transparent);
          top: 30%;
          animation: blobFloat1 30s ease-in-out infinite;
        }
      `}</style>

      <div className="mobile-gradient-container"></div>
      <div className="mobile-blob mobile-blob-1"></div>
      <div className="mobile-blob mobile-blob-2"></div>
      <div className="mobile-blob mobile-blob-3"></div>
      <div className="mobile-overlay"></div>
      <div className="mobile-accent-line"></div>
    </div>
  );
}
