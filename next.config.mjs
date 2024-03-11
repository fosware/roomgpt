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
      {
        protocol: 'https',
        hostname: 'replicate.delivery',
        pathname: '**',
      }
    ],
  
  }  
};

export default nextConfig;
