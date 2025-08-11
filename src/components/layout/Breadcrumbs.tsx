import React from 'react';
import { useLocation } from 'react-router-dom';

type Crumb = { label: string; href: string };

const LABEL_MAP: Record<string, string> = {
  products: 'Products',
  zencreator: 'ZenCreator',
  zencomfy: 'ZenComfy',
  services: 'Services',
  technologies: 'Technologies',
  tech: 'Technologies',
  pricing: 'Pricing',
  'content-creation': 'Content Creation',
  'publishing-hub': 'Publishing Hub',
  analytics: 'Analytics & Insights',
  'account-management': 'Account Management',
  instagram: 'Instagram',
  threads: 'Threads',
  twitter: 'Twitter (X)',
  facebook: 'Facebook',
  youtube: 'YouTube',
  'run-comfyui-online': 'Run ComfyUI in the Cloud',
  'comfyui-to-webapp': 'ComfyUI Workflow as Web App',
};

function humanize(segment: string): string {
  return LABEL_MAP[segment] || segment
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

export const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  let path = location.pathname;

  // Normalize aliases
  if (path.startsWith('/zencreator')) path = path.replace('/zencreator', '/products/zencreator');
  if (path.startsWith('/zencomfy')) path = path.replace('/zencomfy', '/products/zencomfy');

  const parts = path.split('/').filter(Boolean);

  // Do not render on home
  if (parts.length === 0) return null;

  const crumbs: Crumb[] = [{ label: 'Home', href: '/' }];
  let acc = '';
  for (const segment of parts) {
    acc += `/${segment}`;
    crumbs.push({ label: humanize(segment), href: acc });
  }

  return (
    <nav aria-label="Breadcrumb" className="container mx-auto px-4">
      <ol className="flex flex-wrap items-center gap-1 text-sm py-3 text-gray-600">
        {crumbs.map((c, idx) => (
          <li key={c.href} className="flex items-center">
            {idx < crumbs.length - 1 ? (
              <a href={c.href} className="hover:text-gray-900">{c.label}</a>
            ) : (
              <span className="text-gray-800 font-medium">{c.label}</span>
            )}
            {idx < crumbs.length - 1 && <span className="mx-2 text-gray-400">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
};


