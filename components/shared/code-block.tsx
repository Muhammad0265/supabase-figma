'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Copy, Check } from 'lucide-react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'

export function CodeBlock({ code, language = 'tsx' }: { code: string; language?: string }) {
    const [copied, setCopied] = useState(false)

    const handleCopy = async () => {
        await navigator.clipboard.writeText(code)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <Card className="relative mt-3 w-full h-72 max-w-3xl overflow-hidden border shadow-md rounded-xl">
            <CardContent className="p-0">
                <div className="relative">
                    <Button
                        size="icon"
                        variant="ghost"
                        className="absolute top-2 right-2 z-10 text-white bg-black/30 hover:bg-black/50"
                        onClick={handleCopy}
                    >
                        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </Button>

                    <SyntaxHighlighter
                        language={language}
                        style={vscDarkPlus}
                        customStyle={{
                            margin: 0,
                            padding: '1rem',
                            borderRadius: '0.75rem',
                            fontSize: '0.9rem',
                            backgroundColor: '#1e1e1e',
                        }}
                        wrapLines
                        showLineNumbers
                    >
                        {code}
                    </SyntaxHighlighter>
                </div>
            </CardContent>
        </Card>
    )
}
