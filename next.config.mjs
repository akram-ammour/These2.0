/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{

        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'plus.unsplash.com',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'media.post.rvohealth.io',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'answers.childrenshospital.org',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'media.istockphoto.com',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'img.freepik.com',
                pathname: '**',
            },
        ],
    }
};

export default nextConfig;
