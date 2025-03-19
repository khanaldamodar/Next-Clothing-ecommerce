"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface BlogCardProps {
  slug: string
  image: string
  category: string
  title: string
  excerpt: string
  author: {
    name: string
    avatar: string
  }
  publishDate: string
  readTime: string
  featured?: boolean
}

export default function BlogCard({
  slug,
  image,
  category,
  title,
  excerpt,
  author,
  publishDate,
  readTime,
  featured = false,
}: BlogCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link
      href={`/blog/${slug}`}
      className={cn(
        "group block overflow-hidden rounded-lg transition-all duration-300",
        "bg-background border border-border hover:border-primary/20",
        "hover:shadow-[0_0_25px_rgba(0,0,0,0.1)]",
        isHovered ? "scale-[1.02]" : "scale-100",
        featured ? "md:col-span-2" : "",
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
        {/* Image Container */}
        <div className={cn("relative overflow-hidden h-60 md:h-full w-full", featured ? "md:h-80" : "")}>
          <div
            className={cn(
              "absolute inset-0 transition-transform duration-500 ease-in-out",
              isHovered ? "scale-110" : "scale-100",
            )}
          >
            <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
          </div>
          <Badge
            className={cn(
              "absolute top-4 left-4 z-10 transition-colors",
              isHovered ? "bg-primary text-primary-foreground" : "",
            )}
          >
            {category}
          </Badge>
        </div>

        {/* Content Container */}
        <div className="p-6 flex flex-col h-full">
          <div className="flex-1">
            <h3
              className={cn(
                "text-xl font-bold mb-2 line-clamp-2 transition-colors duration-300",
                isHovered ? "text-primary" : "",
              )}
            >
              {title}
            </h3>
            <p className="text-muted-foreground mb-4 line-clamp-3">{excerpt}</p>
          </div>

          <div className="mt-auto">
            <div className="flex items-center gap-3 mb-4">
              <Avatar className="h-8 w-8">
                <AvatarImage src={author.avatar} alt={author.name} />
                <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">{author.name}</p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{publishDate}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  <span>{readTime}</span>
                </div>
              </div>

              <div
                className={cn(
                  "flex items-center gap-1 text-sm font-medium transition-all duration-300",
                  isHovered ? "text-primary translate-x-1" : "text-muted-foreground",
                )}
              >
                <span>Read more</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

