'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Result() {
  const [showPreview, setShowPreview] = useState(true)
  const generatedCode = decodeURIComponent(searchParams.code)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Generated Design</h1>
      <div className="flex justify-between mb-4">
        <div>
          <Button
            onClick={() => setShowPreview(true)}
            variant={showPreview ? "default" : "outline"}
          >
            Preview
          </Button>
          <Button
            onClick={() => setShowPreview(false)}
            variant={!showPreview ? "default" : "outline"}
            className="ml-2"
          >
            Code
          </Button>
        </div>
        <Link href="/">
          <Button variant="outline">New Design</Button>
        </Link>
      </div>
      <div className="border rounded-lg p-4">
        {showPreview ? (
          <div dangerouslySetInnerHTML={{ __html: generatedCode }} />
        ) : (
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
            <code>{generatedCode}</code>
          </pre>
        )}
      </div>
    </div>
  )
}

