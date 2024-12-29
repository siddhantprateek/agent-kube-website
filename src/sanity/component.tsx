import React, { useState } from "react";
import { BlockImage, CodeBlock, Table } from "@/types/blogs";
import { PortableTextComponents } from "@portabletext/react";
// import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { Prism, SyntaxHighlighterProps } from 'react-syntax-highlighter';
const SyntaxHighlighter = (Prism as any) as React.FC<SyntaxHighlighterProps>;
import { atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { CSSProperties } from 'react';
import { Copy, Check } from 'lucide-react';
import { LinkPreview } from "@/components/ui/link-preview";
export const SanityComponent: Partial<PortableTextComponents> = {
  types: {
    image: ({ value }) => {
      const typedValue = value as BlockImage;
      if (!typedValue.asset?.url) {
        return null;
      }

      return (
        <figure className="my-8">
          <img
            src={typedValue.asset.url}
            alt="Blog post image"
            className="rounded-lg w-full"
          />
        </figure>
      );
    },
    code: ({ value }) => {
      const typedValue = value as CodeBlock;
      const [copied, setCopied] = useState(false);

      const customStyle: CSSProperties = {
        padding: '1rem',
        borderRadius: '0.5rem',
        background: 'transparent'
      };

      const handleCopy = async () => {
        try {
          await navigator.clipboard.writeText(typedValue.code || '');
          setCopied(true);
          setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
        } catch (err) {
          console.error('Failed to copy code:', err);
        }
      };

      return (
        <div className="my-6 bg-gray-300 border border-gray-400 rounded-xl relative group">
          <button
            onClick={handleCopy}
            className="absolute top-2 right-2 p-2 rounded-lg bg-gray-300/80 hover:bg-gray-600 text-black hover:text-white"
            aria-label="Copy code"
          >
            {copied ? (
              <Check className="w-4 h-4" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>
          <SyntaxHighlighter
            language={typedValue.language || 'text'}
            style={atomOneLight}
            customStyle={customStyle}
            wrapLines={true}
          >
            {typedValue.code || ''}
          </SyntaxHighlighter>
        </div>
      );
    },
    table: ({ value }) => {
      const typedValue = value as Table;
      return (
        <div className="my-6 overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-300">
            <tbody className="divide-y divide-gray-500">
              {typedValue.rows.map((row, rowIndex) => (
                <tr key={row._key || rowIndex}>
                  {row.cells.map((cell, cellIndex) => {
                    if (rowIndex === 0) {
                      return (
                        <th
                          key={cellIndex}
                          className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          {cell}
                        </th>
                      );
                    }
                    return (
                      <td key={cellIndex} className="px-6 py-4 whitespace-nowrap text-sm">
                        {cell}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc ml-10 mb-2">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal ml-4 mb-2">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold mt-6 mb-3">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-bold mt-5 mb-2">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-bold mt-4 mb-2">{children}</h4>
    ),
    normal: ({ children }) => <p className="mb-4">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-200 pl-4 my-4 italic">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ value, children }) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined;
      return (
        <LinkPreview
          url={value?.href}
        >
          <a
            href={value?.href}
            target={target}
            rel={target === '_blank' ? 'noopener noreferrer' : undefined}
            className="text-blue-600 hover:underline"
          >
            {children}
          </a>
        </LinkPreview>
      );
    },
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="bg-gray-100 rounded px-1 py-0.5">{children}</code>
    ),
  },
};