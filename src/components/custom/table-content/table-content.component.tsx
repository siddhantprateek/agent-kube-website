import slugify from 'slugify';
import { cn } from '@/lib/utils';

type BlockContent = {
  _type: string;
  style?: string;
  children?: Array<{ text?: string; _type: string }>;
};

type TreeNode = {
  text: string;
  slug: string;
  children?: TreeNode[];
};

function nestHeadings(blocks: BlockContent[]): TreeNode[] {
  const treeNodes: TreeNode[] = [];
  const stack: { node: TreeNode; level: number }[] = [];

  blocks.forEach((block) => {
    if (!block.style?.startsWith('h') || !block.children) return;

    const level = parseInt(block.style.replace('h', ''), 10);
    const text = block.children.map((child) => child.text || '').join(' ') || 'Untitled';
    
    const treeNode: TreeNode = {
      slug: slugify(text.toLowerCase()),
      text,
      children: [],
    };

    while (stack.length > 0) {
      const topStack = stack[stack.length - 1];
      if (topStack && topStack.level < level) break;
      stack.pop();
    }

    if (stack.length > 0) {
      const parentNode = stack[stack.length - 1]?.node;
      if (parentNode && !parentNode.children) {
        parentNode.children = [];
      }
      parentNode?.children?.push(treeNode);
    } else {
      treeNodes.push(treeNode);
    }
    
    stack.push({ node: treeNode, level });
  });

  return treeNodes;
}

function RenderToc({
  elements,
  level = 1,
}: {
  elements: TreeNode[];
  level?: number;
}) {
  return (
    <ul
      className={cn('space-y-2 text-sm', {
        'ml-4 list-disc space-y-1': level > 1,
        'space-y-3 border-l pl-4': level === 1,
      })}
    >
      {elements.map((el) => (
        <li
          key={el.text}
          className={cn('hover:text-primary transition-colors', {
            '[&:first-child]:mt-2': level > 1,
          })}
        >
          <a href={`#${el.slug}`} className="hover:underline">
            {el.text}
          </a>
          {el.children && <RenderToc elements={el.children} level={level + 1} />}
        </li>
      ))}
    </ul>
  );
}

export function TableOfContents({ content }: { content: BlockContent[] }) {
  const headings = content.filter(block => 
    block.style?.startsWith('h') && block._type === 'block'
  );

  if (headings.length === 0) {
    return null;
  }

  return (
    <nav className="sticky top-4 w-64 hidden lg:block">
      <h4 className="font-semibold mb-4">Table of Contents</h4>
      <RenderToc elements={nestHeadings(headings)} />
    </nav>
  );
}

export default TableOfContents;