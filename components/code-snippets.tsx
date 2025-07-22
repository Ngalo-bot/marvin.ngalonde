"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Copy, Heart, Star } from "lucide-react"
import FadeIn from "./FadeIn"

export default function CodeSnippets() {
  const [activeSnippet, setActiveSnippet] = useState(0)

  const snippets = [
    {
      title: "Custom React Hook for API Calls",
      description: "A reusable hook that handles loading states, error handling, and caching",
      language: "TypeScript",
      category: "React",
      likes: 42,
      code: `const useApi = <T>(url: string, options?: RequestInit) => {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const controller = new AbortController()
    
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await fetch(url, {
          ...options,
          signal: controller.signal
        })
        
        if (!response.ok) throw new Error('Failed to fetch')
        
        const result = await response.json()
        setData(result)
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message)
        }
      } finally {
        setLoading(false)
      }
    }

    fetchData()
    return () => controller.abort()
  }, [url])

  return { data, loading, error }
}`,
    },
    {
      title: "Debounced Search Implementation",
      description: "Optimized search with debouncing to reduce API calls",
      language: "JavaScript",
      category: "Performance",
      likes: 38,
      code: `const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => clearTimeout(handler)
  }, [value, delay])

  return debouncedValue
}

// Usage in search component
const SearchComponent = () => {
  const [query, setQuery] = useState('')
  const debouncedQuery = useDebounce(query, 300)
  
  useEffect(() => {
    if (debouncedQuery) {
      // Perform search
      searchAPI(debouncedQuery)
    }
  }, [debouncedQuery])

  return (
    <input
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search..."
    />
  )
}`,
    },
    {
      title: "Node.js Rate Limiter Middleware",
      description: "Express middleware for API rate limiting with Redis",
      language: "JavaScript",
      category: "Backend",
      likes: 56,
      code: `const rateLimit = (windowMs, maxRequests) => {
  return async (req, res, next) => {
    const key = \`rate_limit:\${req.ip}\`
    const current = await redis.get(key)
    
    if (current === null) {
      await redis.setex(key, windowMs / 1000, 1)
      return next()
    }
    
    if (parseInt(current) >= maxRequests) {
      return res.status(429).json({
        error: 'Too many requests',
        retryAfter: await redis.ttl(key)
      })
    }
    
    await redis.incr(key)
    next()
  }
}

// Usage
app.use('/api', rateLimit(60000, 100)) // 100 requests per minute`,
    },
    {
      title: "CSS Grid Auto-Fit Layout",
      description: "Responsive grid that adapts to content without media queries",
      language: "CSS",
      category: "Styling",
      likes: 29,
      code: `.responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
}

.card {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

/* Works perfectly on all screen sizes! */`,
    },
  ]

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code)
    // You could add a toast notification here
  }

  return (
    <section className="py-20 relative bg-navy-950">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-navy-400 to-cyan-400 bg-clip-text text-transparent">
                Code I'm Proud Of
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                Snippets that solve real problems and showcase clean, efficient coding practices
              </p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-4 gap-6">
            {/* Snippet Navigation */}
            <FadeIn delay={100}>
              <div className="space-y-3">
                {snippets.map((snippet, index) => (
                  <Card
                    key={index}
                    className={`cursor-pointer transition-all duration-300 ${
                      activeSnippet === index
                        ? "bg-slate-800 border-navy-500"
                        : "bg-navy-900/50 border-navy-700 hover:border-navy-600"
                    }`}
                    onClick={() => setActiveSnippet(index)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="text-xs bg-slate-700 text-slate-300">
                          {snippet.category}
                        </Badge>
                        <div className="flex items-center gap-1 text-slate-400">
                          <Heart className="w-3 h-3" />
                          <span className="text-xs">{snippet.likes}</span>
                        </div>
                      </div>
                      <h3 className="font-medium text-slate-100 text-sm mb-1 line-clamp-2">{snippet.title}</h3>
                      <p className="text-xs text-slate-400 line-clamp-2">{snippet.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </FadeIn>

            {/* Code Display */}
            <div className="lg:col-span-3">
              <FadeIn delay={200}>
                <Card className="bg-navy-900/50 border-navy-700 h-full">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle className="text-slate-100 mb-2">{snippets[activeSnippet].title}</CardTitle>
                      <p className="text-slate-400 text-sm">{snippets[activeSnippet].description}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="border-slate-600 text-slate-300">
                        {snippets[activeSnippet].language}
                      </Badge>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => copyToClipboard(snippets[activeSnippet].code)}
                        className="text-slate-400 hover:text-slate-200"
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-navy-950/80 rounded-lg p-4 border border-navy-800">
                      <pre className="text-sm text-slate-300 overflow-x-auto">
                        <code>{snippets[activeSnippet].code}</code>
                      </pre>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-slate-400 hover:text-red-400 transition-colors">
                          <Heart className="w-4 h-4" />
                          <span className="text-sm">{snippets[activeSnippet].likes} likes</span>
                        </button>
                        <button className="flex items-center gap-2 text-slate-400 hover:text-yellow-400 transition-colors">
                          <Star className="w-4 h-4" />
                          <span className="text-sm">Star</span>
                        </button>
                      </div>
                      <Badge variant="secondary" className="bg-slate-700 text-slate-300">
                        {snippets[activeSnippet].category}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
