import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
});

export default withPWA({
  // Your Next.js config
  output: 'export',
  distDir: "dist",
  images: {
    unoptimized: true,
  }
});
