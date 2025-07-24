/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable strict build checking for production
  eslint: {
    dirs: ['app', 'components', 'hooks', 'lib'],
  },
  typescript: {
    // Enable strict TypeScript checking
  },
  images: {
    // Enable Vercel image optimization for better performance
    formats: ['image/webp', 'image/avif'],
  },
  // Security headers for production deployment
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // CVE-2025-29927 mitigation - strip x-middleware-subrequest
          {
            key: 'x-middleware-subrequest',
            value: '',
          },
          // Content Security Policy
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://formspree.io; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://formspree.io https://vitals.vercel-insights.com; frame-ancestors 'none';",
          },
          // HTTP Strict Transport Security
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          // Prevent clickjacking
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          // Prevent MIME type sniffing
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          // Referrer policy
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          // Permissions policy
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), payment=()',
          },
        ],
      },
    ];
  },
}

export default nextConfig
