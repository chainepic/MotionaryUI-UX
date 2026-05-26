import React from 'react';

export const Footer = () => {
  return (
    <footer className="w-full py-12 border-t border-white/10 bg-black text-center z-10 relative mt-12">
      <p className="text-white/40 text-sm font-mono">
        &copy; {new Date().getFullYear()}{' '}
        <a
          href="https://github.com/chainepic/MotionaryUI-UX"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors hover:underline decoration-primary/30 underline-offset-4"
        >
          Motionary UI/UX
        </a>
      </p>
    </footer>
  );
};

