/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "twljrwazytukbcdbndsd.supabase.co",
        pathname: "/storage/v1/object/public/itineraries/**",
      },
    ],
  },
};

export default nextConfig;
