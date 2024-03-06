/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
   // domains:["upcdn.io"]    
   
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upcdn.io',
        pathname: '**',
      },
    ],
  
  }  
};

export default nextConfig;
