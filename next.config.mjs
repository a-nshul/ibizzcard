/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['buffer.com', 'encrypted-tbn0.gstatic.com'],
      remotePatterns: [
        {
          protocol: "https",
          hostname: "images.pexels.com"
        }
      ]
    },
    // env: {
    //   DOMAIN_URL: "https://user-api.treegreens.in",
    //   API_BASE_URL: "https://user-api.treegreens.in/api/v1",
    //   AUTH_SECRET: "<@TISAUTHSECRET@>"
    // }
  };
  
  export default nextConfig;
  