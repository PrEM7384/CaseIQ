"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowLeft, Users, Star, MapPin, Calendar, Filter, Award, Clock, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function LawyersPage() {
  const [selectedLawyer, setSelectedLawyer] = useState<string | null>(null)

  const lawyers = [
    {
      id: "1",
      name: "Adv. Priya Sharma",
      specialization: "Consumer Protection Law",
      experience: "12 years",
      rating: 4.8,
      reviews: 156,
      location: "Delhi High Court",
      languages: ["Hindi", "English"],
      successRate: 89,
      consultationFee: "₹2,500",
      image: "/placeholder.svg?height=100&width=100",
      about:
        "Specialized in consumer protection cases with extensive experience in product liability and service deficiency matters.",
      achievements: [
        "Won 89% of consumer protection cases",
        "Featured in Legal India Magazine",
        "Member of Delhi Bar Association",
      ],
      availability: "Available this week",
    },
    {
      id: "2",
      name: "Adv. Rajesh Kumar",
      specialization: "Civil & Property Law",
      experience: "15 years",
      rating: 4.9,
      reviews: 203,
      location: "Mumbai District Court",
      languages: ["Hindi", "English", "Marathi"],
      successRate: 92,
      consultationFee: "₹3,000",
      image: "/placeholder.svg?height=100&width=100",
      about: "Expert in property disputes, civil litigation, and contract law with a proven track record.",
      achievements: [
        "92% success rate in property cases",
        "Senior Advocate designation",
        "Published author on property law",
      ],
      availability: "Available tomorrow",
    },
    {
      id: "3",
      name: "Adv. Meera Patel",
      specialization: "Employment & Labor Law",
      experience: "8 years",
      rating: 4.7,
      reviews: 89,
      location: "Bangalore Labor Court",
      languages: ["English", "Hindi", "Kannada"],
      successRate: 85,
      consultationFee: "₹2,000",
      image: "/placeholder.svg?height=100&width=100",
      about: "Focused on employment disputes, wrongful termination, and workplace harassment cases.",
      achievements: [
        "Specialized in IT sector employment law",
        "Women Lawyer of the Year 2023",
        "Regular speaker at HR conferences",
      ],
      availability: "Available next week",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/analyze">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Analysis
              </Link>
            </Button>
            <div className="flex items-center space-x-2">
              <Users className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Find Lawyers</span>

              <span className="text-xl font-bold text-gray-900">Find Lawyers</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">AI-Matched Lawyers</h1>
          <p className="text-gray-600">Connect with pre-screened lawyers who specialize in your case type</p>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Filter className="h-5 w-5 text-blue-600 mr-2" />
              Filter Lawyers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4">
              <div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Specialization" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="consumer">Consumer Protection</SelectItem>
                    <SelectItem value="property">Property Law</SelectItem>
                    <SelectItem value="employment">Employment Law</SelectItem>
                    <SelectItem value="criminal">Criminal Law</SelectItem>
                    <SelectItem value="family">Family Law</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="delhi">Delhi</SelectItem>
                    <SelectItem value="mumbai">Mumbai</SelectItem>
                    <SelectItem value="bangalore">Bangalore</SelectItem>
                    <SelectItem value="chennai">Chennai</SelectItem>
                    <SelectItem value="kolkata">Kolkata</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Experience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-5">0-5 years</SelectItem>
                    <SelectItem value="5-10">5-10 years</SelectItem>
                    <SelectItem value="10-15">10-15 years</SelectItem>
                    <SelectItem value="15+">15+ years</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Input placeholder="Search by name" className="w-full" />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Lawyers List */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Recommended for Your Case</h2>
              <Badge className="bg-green-100 text-green-800">AI Matched - 95% Compatibility</Badge>
            </div>

            {lawyers.map((lawyer) => (
              <Card key={lawyer.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={lawyer.image || "/placeholder.svg"} alt={lawyer.name} />
                      <AvatarFallback>
                        {lawyer.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{lawyer.name}</h3>
                          <p className="text-blue-600 font-medium">{lawyer.specialization}</p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center mb-1">
                            <Star className="h-4 w-4 text-yellow-500 mr-1" />
                            <span className="font-semibold">{lawyer.rating}</span>
                            <span className="text-gray-500 text-sm ml-1">({lawyer.reviews})</span>
                          </div>
                          <div className="text-lg font-bold text-green-600">{lawyer.consultationFee}</div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-gray-600">
                            <Award className="h-4 w-4 mr-2" />
                            {lawyer.experience} experience
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <MapPin className="h-4 w-4 mr-2" />
                            {lawyer.location}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Clock className="h-4 w-4 mr-2" />
                            {lawyer.availability}
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                            {lawyer.successRate}% success rate
                          </div>
                          <div className="text-sm text-gray-600">Languages: {lawyer.languages.join(", ")}</div>
                        </div>
                      </div>

                      <p className="text-gray-700 text-sm mb-4">{lawyer.about}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex space-x-2">
                          <Badge variant="outline">Consumer Law Expert</Badge>
                          <Badge variant="outline">AI Verified</Badge>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            View Profile
                          </Button>
                          <Button size="sm" onClick={() => setSelectedLawyer(lawyer.id)}>
                            Book Consultation
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Why AI Matching?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                  <span>Lawyers receive your pre-analyzed case brief</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                  <span>Matched based on specialization and success rate</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                  <span>Quality scored using past judgment analysis</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                  <span>Higher success rate for prepared consultations</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Consultation Process</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-semibold mr-3 mt-0.5">
                    1
                  </div>
                  <span>Book consultation with matched lawyer</span>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-semibold mr-3 mt-0.5">
                    2
                  </div>
                  <span>Lawyer receives your AI case analysis</span>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-semibold mr-3 mt-0.5">
                    3
                  </div>
                  <span>Focused discussion on legal strategy</span>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-semibold mr-3 mt-0.5">
                    4
                  </div>
                  <span>Get clear action plan and next steps</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-800">Quality Guarantee</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-green-700">
                All lawyers are verified and quality-scored. If you're not satisfied with your consultation, we'll
                connect you with another lawyer at no extra cost.
              </CardContent>
            </Card>

            {selectedLawyer && (
              <Card className="border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle>Book Consultation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-sm text-gray-600">
                    Selected: {lawyers.find((l) => l.id === selectedLawyer)?.name}
                  </div>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select date & time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="today">Today 3:00 PM</SelectItem>
                      <SelectItem value="tomorrow">Tomorrow 10:00 AM</SelectItem>
                      <SelectItem value="day-after">Day After 2:00 PM</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Consultation type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="video">Video Call</SelectItem>
                      <SelectItem value="phone">Phone Call</SelectItem>
                      <SelectItem value="office">Office Visit</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button className="w-full">
                    <Calendar className="h-4 w-4 mr-2" />
                    Confirm Booking - ₹199
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
