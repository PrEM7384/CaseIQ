"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, FileText, Download, Edit, Zap, CheckCircle, Clock, Star } from "lucide-react"
import Link from "next/link"

export default function DocumentsPage() {
  const [selectedDocument, setSelectedDocument] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedDocument, setGeneratedDocument] = useState("")

  const documentTypes = [
    {
      id: "legal-notice-reply",
      title: "Legal Notice Reply",
      description: "Respond to legal notices professionally",
      price: "₹199",
      category: "Response Documents",
      icon: "📄",
    },
    {
      id: "consumer-complaint",
      title: "Consumer Complaint",
      description: "File complaints with consumer forums",
      price: "₹149",
      category: "Consumer Protection",
      icon: "🛡️",
    },
    {
      id: "rent-agreement",
      title: "Rent Agreement",
      description: "Comprehensive rental agreements",
      price: "₹299",
      category: "Property Documents",
      icon: "🏠",
    },
    {
      id: "rti-application",
      title: "RTI Application",
      description: "Right to Information requests",
      price: "₹99",
      category: "Government Applications",
      icon: "📋",
    },
    {
      id: "employment-contract",
      title: "Employment Contract",
      description: "Job offer and employment agreements",
      price: "₹249",
      category: "Employment Documents",
      icon: "💼",
    },
    {
      id: "nda-agreement",
      title: "NDA Agreement",
      description: "Non-disclosure agreements",
      price: "₹199",
      category: "Business Documents",
      icon: "🤝",
    },
  ]

  const handleGenerate = async () => {
    setIsGenerating(true)
    // Simulate document generation
    setTimeout(() => {
      setGeneratedDocument(`
CONSUMER COMPLAINT
Under Section 35 of the Consumer Protection Act, 2019

Before the District Consumer Disputes Redressal Commission
[District Name]

Complaint No: ___________
Date: ${new Date().toLocaleDateString("en-IN")}

BETWEEN:

[Your Name]
S/o [Father's Name]
R/o [Your Address]
Mobile: [Your Mobile]
Email: [Your Email]
                                                    ... COMPLAINANT

VERSUS

[Company Name]
Through its [Designation]
Address: [Company Address]
                                                    ... OPPOSITE PARTY

COMPLAINT UNDER SECTION 35 OF THE CONSUMER PROTECTION ACT, 2019

MOST RESPECTFULLY SHOWETH:

1. That the Complainant is a consumer within the meaning of Section 2(7) of the Consumer Protection Act, 2019.

2. That on [Date of Purchase], the Complainant purchased [Product/Service] from the Opposite Party for a consideration of Rs. [Amount].

3. That the said product/service was found to be defective/deficient as [describe the defect/deficiency].

4. That despite several representations, the Opposite Party has failed to redress the grievance of the Complainant.

5. That the act of the Opposite Party amounts to unfair trade practice and deficiency in service.

PRAYER:

In view of the above facts and circumstances, it is most respectfully prayed that this Hon'ble Commission may be pleased to:

a) Direct the Opposite Party to replace/repair the defective product;
b) Direct the Opposite Party to pay compensation of Rs. [Amount] for mental agony and harassment;
c) Direct the Opposite Party to pay the cost of this complaint;
d) Pass any other order as this Hon'ble Commission may deem fit.

Place: [City]                                      [Your Signature]
Date: ${new Date().toLocaleDateString("en-IN")}                                       [Your Name]
                                                   COMPLAINANT

VERIFICATION:
I, [Your Name], the Complainant above named, do hereby verify that the contents of the above complaint are true and correct to the best of my knowledge and belief and nothing material has been concealed therefrom.

Verified at [City] on this ${new Date().getDate()}th day of ${new Date().toLocaleDateString("en-IN", { month: "long" })}, ${new Date().getFullYear()}.

                                                   [Your Signature]
                                                   [Your Name]
                                                   COMPLAINANT
      `)
      setIsGenerating(false)
    }, 2000)
  }

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
              <FileText className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Legal Documents</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">AI-Generated Legal Documents</h1>
          <p className="text-gray-600">Get professionally drafted legal documents tailored to your case</p>
        </div>

        {!generatedDocument ? (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Document Selection */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Choose Document Type</CardTitle>
                  <CardDescription>Select the type of legal document you need</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {documentTypes.map((doc) => (
                      <Card
                        key={doc.id}
                        className={`cursor-pointer transition-colors hover:border-blue-300 ${
                          selectedDocument === doc.id ? "border-blue-500 bg-blue-50" : ""
                        }`}
                        onClick={() => setSelectedDocument(doc.id)}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between mb-2">
                            <div className="text-2xl">{doc.icon}</div>
                            <Badge variant="outline">{doc.price}</Badge>
                          </div>
                          <h3 className="font-semibold mb-1">{doc.title}</h3>
                          <p className="text-sm text-gray-600 mb-2">{doc.description}</p>
                          <Badge variant="secondary" className="text-xs">
                            {doc.category}
                          </Badge>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {selectedDocument && (
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Document Details</CardTitle>
                    <CardDescription>Provide specific information for your document</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="basic" className="w-full">
                      <TabsList>
                        <TabsTrigger value="basic">Basic Info</TabsTrigger>
                        <TabsTrigger value="details">Case Details</TabsTrigger>
                        <TabsTrigger value="preferences">Preferences</TabsTrigger>
                      </TabsList>

                      <TabsContent value="basic" className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="name">Your Full Name</Label>
                            <Input id="name" placeholder="Enter your full name" />
                          </div>
                          <div>
                            <Label htmlFor="address">Address</Label>
                            <Input id="address" placeholder="Your complete address" />
                          </div>
                          <div>
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input id="phone" placeholder="Your phone number" />
                          </div>
                          <div>
                            <Label htmlFor="email">Email Address</Label>
                            <Input id="email" type="email" placeholder="Your email address" />
                          </div>
                        </div>
                      </TabsContent>

                      <TabsContent value="details" className="space-y-4">
                        <div>
                          <Label htmlFor="case-summary">Case Summary</Label>
                          <Textarea
                            id="case-summary"
                            placeholder="Provide a brief summary of your case or situation"
                            className="min-h-[100px]"
                          />
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="amount">Amount Involved (if any)</Label>
                            <Input id="amount" placeholder="₹ 0" />
                          </div>
                          <div>
                            <Label htmlFor="date">Incident Date</Label>
                            <Input id="date" type="date" />
                          </div>
                        </div>
                      </TabsContent>

                      <TabsContent value="preferences" className="space-y-4">
                        <div>
                          <Label htmlFor="language">Document Language</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select language" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="english">English</SelectItem>
                              <SelectItem value="hindi">Hindi</SelectItem>
                              <SelectItem value="bengali">Bengali</SelectItem>
                              <SelectItem value="marathi">Marathi</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="urgency">Urgency Level</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select urgency" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="normal">Normal (2-3 days)</SelectItem>
                              <SelectItem value="urgent">Urgent (24 hours)</SelectItem>
                              <SelectItem value="immediate">Immediate (2 hours)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Zap className="h-5 w-5 text-yellow-500 mr-2" />
                    AI Features
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Legal compliance check
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Case-specific customization
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Multi-language support
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Professional formatting
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="h-5 w-5 text-blue-500 mr-2" />
                    Delivery Time
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Standard</span>
                      <span className="font-semibold">2-3 days</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Urgent</span>
                      <span className="font-semibold">24 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Immediate</span>
                      <span className="font-semibold">2 hours</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-500 mr-2" />
                    Quality Guarantee
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-gray-600">
                  All documents are reviewed by legal experts and come with a satisfaction guarantee. Free revisions
                  within 7 days.
                </CardContent>
              </Card>

              {selectedDocument && (
                <Button size="lg" className="w-full" onClick={handleGenerate} disabled={isGenerating}>
                  {isGenerating ? (
                    <>
                      <Zap className="h-4 w-4 mr-2 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      Generate Document
                      <FileText className="h-4 w-4 ml-2" />
                    </>
                  )}
                </Button>
              )}
            </div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Generated Document */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center">
                      <FileText className="h-6 w-6 text-green-600 mr-2" />
                      Generated Document
                    </span>
                    <Badge className="bg-green-100 text-green-800">Ready for Review</Badge>
                  </CardTitle>
                  <CardDescription>
                    Your AI-generated legal document is ready. Review and customize as needed.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-white border rounded-lg p-6 font-mono text-sm whitespace-pre-wrap max-h-96 overflow-y-auto">
                    {generatedDocument}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Actions Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Document Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit Document
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    <FileText className="h-4 w-4 mr-2" />
                    Generate Another
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Next Steps</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-semibold mr-3 mt-0.5">
                      1
                    </div>
                    <span>Review the document carefully</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-semibold mr-3 mt-0.5">
                      2
                    </div>
                    <span>Make necessary customizations</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-semibold mr-3 mt-0.5">
                      3
                    </div>
                    <span>Print and sign the document</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-semibold mr-3 mt-0.5">
                      4
                    </div>
                    <span>Submit to relevant authority</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-yellow-200 bg-yellow-50">
                <CardContent className="pt-6">
                  <div className="text-sm text-yellow-800">
                    <strong>Note:</strong> This is an AI-generated document. Please review carefully and consider
                    consulting with a lawyer for complex cases.
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
