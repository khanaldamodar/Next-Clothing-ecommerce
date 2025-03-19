import BlogCard from '@/components/Components/BlogCard';
import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
    title: "Ecommerce Blogs ",
    description: "Get Latest Information About our Ecommerce Website.",
  };
  

const Blogs = () => {
    const blogPosts = [
        {
          slug: "summer-fashion-trends-2023",
          image: "/blogImage/1.jpg",
          category: "Fashion",
          title: "Summer Fashion Trends to Watch in 2023",
          excerpt:
            "Discover the hottest fashion trends for summer 2023. From vibrant colors to sustainable materials, we cover everything you need to know to stay stylish this season.",
          author: {
            name: "Deepak Khanal",
            avatar: "/blogImage/new.jpg",
          },
          publishDate: "June 15, 2023",
          readTime: "5 min read",
          featured: true,
        },
        {
          slug: "best-tech-gadgets-2023",
          image: "/blogImage/1.jpg",
          category: "Electronics",
          title: "10 Must-Have Tech Gadgets for 2023",
          excerpt:
            "Looking for the latest tech? We've rounded up the most innovative gadgets that are worth your money this year, from smart home devices to wearable tech.",
          author: {
            name: "Deepak Khanal",
            avatar: "/blogImage/1.jpg",
          },
          publishDate: "June 15, 2023",
          readTime: "7 min read",
        },
        {
          slug: "sustainable-shopping-guide",
          image: "/blogImage/1.jpg",
          category: "Sustainability",
          title: "The Ultimate Guide to Sustainable Shopping",
          excerpt:
            "Learn how to make environmentally conscious shopping decisions without compromising on quality or style. Our comprehensive guide to sustainable brands and practices.",
          author: {
            name: "Deepak Khanal",
            avatar: "/blogImage/1.jpg",
          },
          publishDate: "June 5, 2023",
          readTime: "8 min read",
        },
        {
          slug: "home-decor-minimalist",
          image: "/blogImage/1.jpg",
          category: "Home Decor",
          title: "Minimalist Home Decor Ideas for Small Spaces",
          excerpt:
            "Transform your small living space with these minimalist decor ideas. Practical tips to maximize space while creating a stylish and comfortable home.",
          author: {
            name: "Deepak Khanal",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          publishDate: "June 10, 2023",
          readTime: "6 min read",
        },
        {
          slug: "skincare-routine-summer",
          image: "/blogImage/1.jpg",
          category: "Beauty",
          title: "Perfect Your Summer Skincare Routine",
          excerpt:
            "Adjust your skincare routine for the summer months with these expert tips. Learn about sun protection, hydration, and the best products for glowing skin.",
          author: {
            name: "Deepak Khanal",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          publishDate: "June 12, 2023",
          readTime: "4 min read",
        },
      ]
    
      return (
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Our Blog</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the latest trends, tips, and insights about our products and the industry.
            </p>
          </div>
    
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard
                key={post.slug}
                slug={post.slug}
                image={post.image}
                category={post.category}
                title={post.title}
                excerpt={post.excerpt}
                author={post.author}
                publishDate={post.publishDate}
                readTime={post.readTime}
                featured={index === 0 ? post.featured : false}
              />
            ))}
          </div>
        </div>
      )
}

export default Blogs