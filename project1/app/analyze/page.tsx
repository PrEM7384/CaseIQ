"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  ArrowLeft,
  Upload,
  Mic,
  FileText,
  Brain,
  Clock,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Scale,
  Users,
} from "lucide-react"
import Link from "next/link"

export default function AnalyzePage() {
  const [step, setStep] = useState(1)
  const [caseDescription, setCaseDescription] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisComplete, setAnalysisComplete] = useState(false)

  const handleAnalyze = async () => {
    setIsAnalyzing(true)
    // Simulate AI analysis
    setTimeout(() => {
      setIsAnalyzing(false)
      setAnalysisComplete(true)
      setStep(2)
    }, 3000)
  }

  const mockAnalysisResult = {
    legalCategory: "Consumer Protection Act, 2019",
    caseType: "Defective Product & Service Deficiency",
    successProbability: 78,
    estimatedTime: "6-8 months",
    estimatedCost: "₹15,000 - ₹25,000",
    recommendedForum: "District Consumer Forum",
    keyFindings: [
      "Strong case based on documented evidence",
      "Service deficiency clearly established",
      "Compensation claim justified",
      "No major procedural hurdles identified",
    ],
    redFlags: ["Purchase receipt date is 2+ years old", "No written complaint to company on record"],
    nextSteps: [
      "File complaint in District Consumer Forum",
      "Gather additional evidence of financial loss",
      "Send legal notice to company first",
      "Consider mediation before formal proceedings",
    ],
  }

  if (step === 1) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Header */}
        <header className="border-b bg-white/80 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Link>
              </Button>
              <div className="flex items-center space-x-2">
                <Scale className="h-6 w-6 text-blue-600" />
                <span className="text-xl font-bold text-gray-900">CaseIQ</span>
              </div>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Analyze Your Legal Case</h1>
            <p className="text-xl text-gray-600">Describe your legal issue and get AI-powered insights in minutes</p>
          </div>

          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Brain className="h-6 w-6 text-blue-600 mr-2" />
                Tell Us About Your Legal Issue
              </CardTitle>
              <CardDescription>
                You can type, speak, or upload documents. Our AI understands multiple Indian languages.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="text" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="text">Type Description</TabsTrigger>
                  <TabsTrigger value="voice">Voice Input</TabsTrigger>
                  <TabsTrigger value="document">Upload Documents</TabsTrigger>
                </TabsList>

                <TabsContent value="text" className="space-y-4">
                  <Textarea
                    placeholder="Describe your legal issue in detail. For example: 'I bought a mobile phone online 6 months ago. It stopped working after 3 months. The company is refusing to replace it despite valid warranty. They are asking me to pay for repairs. What are my rights?'"
                    className="min-h-[200px]"
                    value={caseDescription}
                    onChange={(e) => setCaseDescription(e.target.value)}
                  />
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Consumer Issues</Badge>
                    <Badge variant="outline">Property Disputes</Badge>
                    <Badge variant="outline">Employment Issues</Badge>
                    <Badge variant="outline">Family Matters</Badge>
                    <Badge variant="outline">Criminal Cases</Badge>
                  </div>
                </TabsContent>

                <TabsContent value="voice" className="space-y-4">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
                    <Mic className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Voice Input</h3>
                    <p className="text-gray-600 mb-4">
                      Click to start recording your legal issue in Hindi, English, or other supported languages
                    </p>
                    <Button>
                      <Mic className="h-4 w-4 mr-2" />
                      Start Recording
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="document" className="space-y-4">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
                    <Upload className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Upload Documents</h3>
                    <p className="text-gray-600 mb-4">
                      Upload FIRs, agreements, court notices, WhatsApp chats, or any relevant documents
                    </p>
                    <Button>
                      <Upload className="h-4 w-4 mr-2" />
                      Choose Files
                    </Button>
                  </div>
                  <div className="text-sm text-gray-500">
                    Supported formats: PDF, JPG, PNG, DOC, DOCX (Max 10MB per file)
                  </div>
                </TabsContent>
              </Tabs>

              <div className="mt-8 flex justify-between items-center">
                <div className="text-sm text-gray-500">
                  Your first analysis is <span className="font-semibold text-green-600">FREE</span>
                </div>
                <Button
                  size="lg"
                  onClick={handleAnalyze}
                  disabled={!caseDescription.trim() || isAnalyzing}
                  className="px-8"
                >
                  {isAnalyzing ? (
                    <>
                      <Brain className="h-4 w-4 mr-2 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      Analyze Case
                      <Brain className="h-4 w-4 ml-2" />
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          {isAnalyzing && (
            <Card className="mt-8 border-blue-200 bg-blue-50">
              <CardContent className="pt-6">
                <div className="text-center">
                  <Brain className="h-12 w-12 text-blue-600 mx-auto mb-4 animate-pulse" />
                  <h3 className="text-lg font-semibold mb-2">AI is Analyzing Your Case</h3>
                  <p className="text-gray-600 mb-4">
                    Our AI is processing your case details and consulting Indian legal databases...
                  </p>
                  <Progress value={66} className="w-full max-w-md mx-auto" />
                  <div className="mt-4 text-sm text-gray-500">This usually takes 30-60 seconds</div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" onClick={() => setStep(1)}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              New Analysis
            </Button>
            <div className="flex items-center space-x-2">
              <Scale className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">CaseIQ</span>
            </div>
          </div>
          <Badge className="bg-green-100 text-green-800">Analysis Complete</Badge>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Legal Case Analysis</h1>
          <p className="text-gray-600">AI-powered insights based on Indian legal framework</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Analysis */}
          <div className="lg:col-span-2 space-y-6">
            {/* Case Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Scale className="h-6 w-6 text-blue-600 mr-2" />
                  Legal Diagnosis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Applicable Law</h3>
                    <Badge className="bg-blue-100 text-blue-800">{mockAnalysisResult.legalCategory}</Badge>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Case Type</h3>
                    <p className="text-gray-700">{mockAnalysisResult.caseType}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Recommended Forum</h3>
                    <p className="text-gray-700">{mockAnalysisResult.recommendedForum}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Success Probability */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-6 w-6 text-green-600 mr-2" />
                  Success Probability
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-4xl font-bold text-green-600">{mockAnalysisResult.successProbability}%</div>
                  <div>
                    <div className="text-sm text-gray-600">Based on similar cases</div>
                    <Progress value={mockAnalysisResult.successProbability} className="w-32" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Strengths</h4>
                    <ul className="space-y-1">
                      {mockAnalysisResult.keyFindings.map((finding, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-700">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {finding}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Potential Issues</h4>
                    <ul className="space-y-1">
                      {mockAnalysisResult.redFlags.map((flag, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-700">
                          <AlertTriangle className="h-4 w-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                          {flag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Next Steps */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-6 w-6 text-purple-600 mr-2" />
                  Recommended Next Steps
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3">
                  {mockAnalysisResult.nextSteps.map((step, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">
                        {index + 1}
                      </div>
                      <span className="text-gray-700">{step}</span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-6 w-6 text-orange-600 mr-2" />
                  Case Estimates
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="text-sm text-gray-600">Estimated Timeline</div>
                  <div className="text-lg font-semibold">{mockAnalysisResult.estimatedTime}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Estimated Cost</div>
                  <div className="text-lg font-semibold">{mockAnalysisResult.estimatedCost}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                  <div className="text-lg font-semibold text-green-600">{mockAnalysisResult.successProbability}%</div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <Card>
              <CardHeader>
                <CardTitle>Take Action</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" asChild>
                  <Link href="/documents">
                    <FileText className="h-4 w-4 mr-2" />
                    Generate Legal Documents
                  </Link>
                </Button>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href="/lawyers">
                    <Users className="h-4 w-4 mr-2" />
                    Connect with Lawyers
                  </Link>
                </Button>
                <Button variant="outline" className="w-full bg-transparent">
                  Download Report
                </Button>
              </CardContent>
            </Card>

            {/* Disclaimer */}
            <Card className="border-yellow-200 bg-yellow-50">
              <CardContent className="pt-6">
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-yellow-800">
                    <strong>Disclaimer:</strong> This AI analysis is for informational purposes only and does not
                    constitute legal advice. Please consult with a qualified lawyer for specific legal guidance.
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
