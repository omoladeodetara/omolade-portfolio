"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { MessageSquare, Send, ThumbsUp } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { toast } from "@/hooks/use-toast"
import { trackEvent } from "@/lib/analytics"

// Map of user initials to profile images for demonstration
const userAvatars = {
  MC: "/images/speaker-quan.jpg",
  SJ: "/images/speaker-aarti.jpg",
  DK: "/images/speaker-fred.jpg",
  YO: "/images/speaker-hiroshi.jpg",
}

export default function EngagementPage() {
  const [question, setQuestion] = useState("")
  const [questions, setQuestions] = useState([
    {
      id: 1,
      user: "Michael Chen",
      avatar: "MC",
      text: "What standards are currently being developed for lunar data exchange?",
      likes: 12,
      responses: 2,
      time: "2 hours ago",
    },
    {
      id: 2,
      user: "Sarah Johnson",
      avatar: "SJ",
      text: "How can smaller organizations contribute to the lunar activities database?",
      likes: 8,
      responses: 1,
      time: "3 hours ago",
    },
    {
      id: 3,
      user: "David Kim",
      avatar: "DK",
      text: "What are the biggest challenges in achieving interoperability between different lunar mission systems?",
      likes: 15,
      responses: 3,
      time: "5 hours ago",
    },
  ])

  // Track page view
  useEffect(() => {
    trackEvent("engagement_interaction", {
      page: "engagement",
      action: "page_view",
      source: document.referrer || "direct",
    })
  }, [])

  const handleSubmitQuestion = (e: React.FormEvent) => {
    e.preventDefault()
    if (question.trim()) {
      const newQuestion = {
        id: questions.length + 1,
        user: "You",
        avatar: "YO",
        text: question,
        likes: 0,
        responses: 0,
        time: "Just now",
      }

      // Track question submission
      trackEvent("engagement_interaction", {
        action: "question_submitted",
        question_length: question.length,
        question_topic: detectQuestionTopic(question),
      })

      setQuestions([newQuestion, ...questions])
      setQuestion("")
      toast({
        title: "Question Submitted",
        description: "Your question has been submitted successfully.",
      })
    }
  }

  const handleLike = (id: number) => {
    // Track like action
    const likedQuestion = questions.find((q) => q.id === id)
    trackEvent("engagement_interaction", {
      action: "question_liked",
      question_id: id,
      question_user: likedQuestion?.user || "unknown",
    })

    setQuestions(questions.map((q) => (q.id === id ? { ...q, likes: q.likes + 1 } : q)))
  }

  // Simple function to detect question topic based on keywords
  const detectQuestionTopic = (questionText: string) => {
    const text = questionText.toLowerCase()
    if (text.includes("database") || text.includes("data")) return "database"
    if (text.includes("interoperability") || text.includes("systems")) return "interoperability"
    if (text.includes("cooperation") || text.includes("international")) return "cooperation"
    if (text.includes("standard") || text.includes("protocol")) return "standards"
    return "other"
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter mb-4">Engagement Hub</h1>
        <p className="text-muted-foreground text-lg">
          Connect with speakers and other participants through our interactive engagement tools.
        </p>
      </div>

      <Tabs
        defaultValue="qa"
        className="w-full max-w-4xl mx-auto"
        onValueChange={(value) => {
          trackEvent("engagement_interaction", {
            action: "tab_changed",
            tab: value,
          })
        }}
      >
        <TabsList className="grid grid-cols-1 mb-8">
          <TabsTrigger value="qa">
            <MessageSquare className="h-4 w-4 mr-2" />
            Q&A
          </TabsTrigger>
        </TabsList>

        <TabsContent value="qa" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Ask a Question</CardTitle>
              <CardDescription>
                Submit your questions for speakers and panelists. Popular questions will be addressed during the
                sessions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmitQuestion} className="space-y-4">
                <Textarea
                  placeholder="Type your question here..."
                  value={question}
                  onChange={(e) => {
                    setQuestion(e.target.value)
                    // Track when user types a substantial question (more than 50 chars)
                    if (e.target.value.length === 50) {
                      trackEvent("engagement_interaction", {
                        action: "question_drafting",
                        length_milestone: "50_chars",
                      })
                    }
                  }}
                  className="min-h-[100px]"
                />
                <Button type="submit" className="w-full">
                  <Send className="h-4 w-4 mr-2" />
                  Submit Question
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Recent Questions</h3>

            {questions.map((q) => (
              <Card key={q.id}>
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <Avatar>
                      <AvatarImage
                        src={userAvatars[q.avatar as keyof typeof userAvatars] || "/placeholder.png"}
                        alt={q.user}
                      />
                      <AvatarFallback>{q.avatar}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="font-medium">{q.user}</p>
                          <p className="text-xs text-muted-foreground">{q.time}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4">{q.text}</p>
                      <div className="flex gap-4">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleLike(q.id)}
                          className="text-muted-foreground hover:text-foreground"
                        >
                          <ThumbsUp className="h-4 w-4 mr-1" />
                          {q.likes}
                        </Button>
                        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                          <MessageSquare className="h-4 w-4 mr-1" />
                          {q.responses} {q.responses === 1 ? "response" : "responses"}
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
