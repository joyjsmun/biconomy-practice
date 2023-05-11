/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack:(config,{isServer}) =>{
    if (!isServer){
      config.resolve.fallback ={
        "fs":false,
        "net":false,
        "tls":flase
      }
    }
    return config
  }
}

module.exports = nextConfig
