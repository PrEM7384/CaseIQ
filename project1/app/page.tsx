import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Brain, FileText, Scale, Users, Zap, CheckCircle, Star, Clock, Shield } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Scale className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">CaseIQ</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#features" className="text-gray-600 hover:text-blue-600">
              Features
            </Link>
            <Link href="#pricing" className="text-gray-600 hover:text-blue-600">
              Pricing
            </Link>
            <Link href="#how-it-works" className="text-gray-600 hover:text-blue-600">
              How it Works
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost">Sign In</Button>
            <Button asChild>
              <Link href="/analyze">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">AI-Powered Legal Analysis</Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Know Your Legal Rights
            <span className="text-blue-600"> Before</span> You Call a Lawyer
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            CaseIQ analyzes your legal situation using AI, generates comprehensive reports, and connects you with the
            right lawyers — saving time, money, and uncertainty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <Link href="/analyze">
                Analyze My Case <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent">
              Watch Demo
            </Button>
          </div>
          <div className="mt-12 flex items-center justify-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Free First Analysis
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Multi-language Support
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Verified Lawyers
            </div>
          </div>
        </div>
      </section>

      {/* Core AI Tools */}
      <section id="features" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Powered by Advanced AI Tools</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our AI understands legal language, analyzes documents, predicts outcomes, and matches you with the right
              legal experts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <Brain className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Legal Language AI</CardTitle>
                <CardDescription>
                  Understands plain English and Indian languages, mapping problems to legal contexts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Labor law, criminal, property cases</li>
                  <li>• Hindi, Bengali, Marathi, Tamil support</li>
                  <li>• Voice and text input</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <FileText className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Document Analyzer</CardTitle>
                <CardDescription>
                  Extracts facts, parties, dates from FIRs, agreements, notices, and chats
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• OCR for scanned documents</li>
                  <li>• Fraud detection</li>
                  <li>• Missing clause identification</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <Zap className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Outcome Predictor</CardTitle>
                <CardDescription>Estimates resolution time, success chances, and best legal routes</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Trained on Indian case law</li>
                  <li>• Cost estimation</li>
                  <li>• Court vs tribunal guidance</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <FileText className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>Auto-Drafter</CardTitle>
                <CardDescription>Generates legal drafts, replies, complaints, and agreements</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Legal notice replies</li>
                  <li>• Consumer complaints</li>
                  <li>• RTI applications</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <Users className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle>AI Matchmaker</CardTitle>
                <CardDescription>Connects you with 3 relevant lawyers after AI analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Pre-analyzed case briefs</li>
                  <li>• Domain expertise matching</li>
                  <li>• Quality scoring</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <Star className="h-12 w-12 text-yellow-600 mb-4" />
                <CardTitle>Lawyer Quality Analyzer</CardTitle>
                <CardDescription>Scores lawyers based on past judgments and domain experience</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Indian Kanoon integration</li>
                  <li>• Success rate analysis</li>
                  <li>• Specialization scoring</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How CaseIQ Works</h2>
            <p className="text-xl text-gray-600">Get legal clarity in 3 simple steps</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-2xl font-semibold mb-4">Submit Your Case</h3>
              <p className="text-gray-600">
                Describe your legal issue by typing, speaking, or uploading documents. Our AI understands multiple
                Indian languages.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-2xl font-semibold mb-4">AI Analysis</h3>
              <p className="text-gray-600">
                Get a comprehensive case report with legal diagnosis, success chances, timeline, costs, and recommended
                legal routes.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-2xl font-semibold mb-4">Take Action</h3>
              <p className="text-gray-600">
                Download legal drafts, try mediation options, or connect with matched lawyers who receive pre-analyzed
                case briefs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* USPs */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose CaseIQ?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No Wrong Lawyer</h3>
              <p className="text-gray-600 text-sm">
                AI matches you with lawyers who specialize in your specific legal domain
              </p>
            </div>

            <div className="text-center">
              <FileText className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Pre-checked Documents</h3>
              <p className="text-gray-600 text-sm">
                Get AI-generated legal drafts and clear direction before meeting lawyers
              </p>
            </div>

            <div className="text-center">
              <Brain className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Multi-language Support</h3>
              <p className="text-gray-600 text-sm">
                Available in Hindi, Bengali, Marathi, Tamil with voice input support
              </p>
            </div>

            <div className="text-center">
              <Clock className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Honest AI Opinion</h3>
              <p className="text-gray-600 text-sm">
                Get unbiased analysis with no incentive to overcomplicate your case
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Transparent Pricing</h2>
            <p className="text-xl text-gray-600">Pay only for what you need</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader className="text-center">
                <CardTitle>AI Case Report</CardTitle>
                <div className="text-3xl font-bold text-blue-600">₹29</div>
                <CardDescription>Free for first-time users</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Legal diagnosis</li>
                  <li>• Success probability</li>
                  <li>• Timeline & cost estimate</li>
                  <li>• Recommended legal route</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader className="text-center">
                <CardTitle>Legal Documents</CardTitle>
                <div className="text-3xl font-bold text-green-600">₹99-₹299</div>
                <CardDescription>Auto-drafted legal documents</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Legal notice replies</li>
                  <li>• Consumer complaints</li>
                  <li>• Rent agreements</li>
                  <li>• RTI applications</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader className="text-center">
                <CardTitle>Lawyer Connect</CardTitle>
                <div className="text-3xl font-bold text-purple-600">₹199</div>
                <CardDescription>Per consultation (optional)</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• 3 matched lawyers</li>
                  <li>• Pre-analyzed brief</li>
                  <li>• Quality scoring</li>
                  <li>• Direct consultation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-300 bg-blue-50 hover:border-blue-400 transition-colors">
              <CardHeader className="text-center">
                <Badge className="mb-2">For Law Firms</Badge>
                <CardTitle>Professional</CardTitle>
                <div className="text-3xl font-bold text-blue-600">₹999</div>
                <CardDescription>Per month</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Verified lead access</li>
                  <li>• AI-prepared briefs</li>
                  <li>• Client management</li>
                  <li>• Analytics dashboard</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Understand Your Legal Rights?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get your first AI case analysis free and take control of your legal situation.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6" asChild>
            <Link href="/analyze">
              Start Free Analysis <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Scale className="h-6 w-6" />
                <span className="text-xl font-bold">CaseIQ</span>
              </div>
              <p className="text-gray-400 text-sm">
                AI-powered legal analysis platform helping Indians understand their legal rights.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/analyze" className="hover:text-white">
                    Case Analysis
                  </Link>
                </li>
                <li>
                  <Link href="/documents" className="hover:text-white">
                    Document Generator
                  </Link>
                </li>
                <li>
                  <Link href="/lawyers" className="hover:text-white">
                    Find Lawyers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/help" className="hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Languages</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>English</li>
                <li>हिंदी (Hindi)</li>
                <li>বাংলা (Bengali)</li>
                <li>मराठी (Marathi)</li>
                <li>தமிழ் (Tamil)</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 CaseIQ. All rights reserved. Made with ❤️ for Indian legal system.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
