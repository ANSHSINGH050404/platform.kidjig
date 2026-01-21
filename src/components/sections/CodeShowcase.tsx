"use client";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

const CODE_EXAMPLES = {
  javascript: `const kidjig = require('@kidjig/sdk');\nconst client = new kidjig.Client();\n\nawait client.chat.completions.create({\n  model: "gpt-4",\n  messages: [{ role: "user", content: "Hello!" }]\n});`,
  python: `import kidjig\nclient = kidjig.Client()\n\nclient.chat.completions.create(\n    model="claude-3",\n    messages=[{"role": "user", "content": "Hi!"}]\n)`,
};

export default function CodeShowcase() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Integrate in seconds</h2>
        <p className="text-muted-foreground">
          Standardized API calls across all major providers.
        </p>
      </div>

      <Card className="border-border bg-card/50 overflow-hidden">
        <Tabs defaultValue="javascript">
          <div className="flex items-center justify-between bg-muted/50 px-4 border-b border-border">
            <TabsList className="bg-transparent border-none">
              <TabsTrigger
                value="javascript"
                className="data-[state=active]:bg-background"
              >
                Node.js
              </TabsTrigger>
              <TabsTrigger
                value="python"
                className="data-[state=active]:bg-background"
              >
                Python
              </TabsTrigger>
            </TabsList>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => copyToClipboard(CODE_EXAMPLES.javascript)}
            >
              {copied ? (
                <Check className="w-4 h-4" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </Button>
          </div>

          {Object.entries(CODE_EXAMPLES).map(([lang, code]) => (
            <TabsContent
              key={lang}
              value={lang}
              className="p-6 font-mono text-sm text-blue-600 dark:text-blue-300"
            >
              <pre>
                <code>{code}</code>
              </pre>
            </TabsContent>
          ))}
        </Tabs>
      </Card>
    </section>
  );
}
