import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { FAQAccordion } from '@/components/sections/FAQAccordion';

export const Analytics: React.FC = () => {
	return (
		<PageLayout
			title="Analytics & Insights — One Truth for Every Channel"
			description="From big-picture growth to frame-by-frame performance, Creator OS turns raw data into decisions you can act on."
		>
			{/* Hero */}
			<div className="bg-gray-900 pb-20" style={{ paddingTop: '140px' }}>
				<div className="container mx-auto px-4">
					<div className="max-w-6xl mx-auto">
						<section className="pt-24 pb-[40px] text-center">
							<h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
								Analytics & Insights<br />
								<span
									style={{
										background: 'linear-gradient(135deg, #7BA1F8, #C084FC)',
										WebkitBackgroundClip: 'text',
										WebkitTextFillColor: 'transparent',
										backgroundClip: 'text'
									}}
									className="text-2xl md:text-4xl"
								>
									One Truth for Every Channel
								</span>
							</h1>
							<p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
								From big-picture growth to frame-by-frame performance, Creator OS turns raw data into decisions you can act on.
							</p>
							<div className="flex justify-center">
								<a href="/products/zencreator" className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl">
									Try Creator OS
								</a>
							</div>
						</section>
					</div>
				</div>
			</div>

			<div className="container mx-auto px-4 pb-20">
				<div className="max-w-6xl mx-auto">
					{/* What You Get */}
					<section id="what-you-get" className="py-[150px] bg-white">
						<h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">What You Get</h3>
						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
							{[
								['Cross-Channel Overview','Total followers, reach, views, impressions, engagement rate, watch time, CTR. Big-number tiles & trend lines'],
								['Channel Deep Dive','Platform-specific KPI sets (e.g., Saves & Shares on Instagram, Retention Curve on YouTube Shorts). Tabbed dashboards'],
								['Post-Level Drill-Down','Views, likes, comments, ER, watch-through %, clicks, top commenters. Click-through modal or table export']
							].map(([title,desc]) => (
								<div key={title as string} className="relative group h-full">
									<div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/5 to-indigo-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
									<div className="relative p-7 bg-white/90 backdrop-blur-md rounded-3xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:border-purple-200/50 h-full">
										<h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">{title as string}</h4>
										<p className="text-gray-600 leading-relaxed">{desc as string}</p>
									</div>
								</div>
							))}
						</div>
					</section>

					{/* How It Works */}
					<section id="how-it-works" className="py-[150px] bg-white">
						<h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">How It Works</h3>
						<ol className="space-y-3 list-decimal pl-6 text-gray-800">
							<li><strong>Secure API Pulls</strong> — Official APIs fetch fresh data every 10 minutes.</li>
							<li><strong>Unified Taxonomy</strong> — Creator OS normalises KPIs across platforms; “Engagement” means the same everywhere.</li>
							<li><strong>AI Insight Engine</strong> — Flags spikes, drops, best-time windows, and under-performing formats; surfaces next-step suggestions.</li>
							<li><strong>Custom Dashboards & Alerts</strong> — Drag-and-drop widgets; send Slack / email alerts when KPIs cross thresholds.</li>
							<li><strong>Export & Share</strong> — CSV, PDF, or live link for stakeholders; schedule weekly or monthly reports automatically.</li>
						</ol>
					</section>

					{/* Key Features */}
					<section id="key-features" className="py-[150px] bg-white">
						<h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">Key Features</h3>
						<div className="grid md:grid-cols-2 gap-6 items-stretch">
							{[
								['Granular to Global', (
									<ul className="list-disc list-inside text-gray-700 space-y-2">
										<li>Toggle from “All Channels • Last 90 Days” to “This Reel • Last 24 h” in two clicks.</li>
										<li>Save any filter combo as a reusable view.</li>
									</ul>
								)],
								['AI Recommendations', (
									<ul className="list-disc list-inside text-gray-700 space-y-2">
										<li>Picks winning hooks, optimal posting windows, and repeat-worthy formats.</li>
										<li>Suggests under-served audience segments based on hashtag & geo data.</li>
									</ul>
								)],
								['Campaign Tags & Filters', (
									<ul className="list-disc list-inside text-gray-700 space-y-2">
										<li>Group posts by campaign, product line, or creator.</li>
										<li>Compare A/B variants at a glance.</li>
									</ul>
								)],
								['Privacy & Security', (
									<ul className="list-disc list-inside text-gray-700 space-y-2">
										<li>OAuth tokens stored in encrypted vaults.</li>
										<li>SOC-2 infrastructure; optional VPC peering for enterprise.</li>
									</ul>
								)],
							].map(([title,content]) => (
								<div key={title as string} className="relative group h-full">
									<div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/5 to-indigo-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
									<div className="relative bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:border-purple-200/50 h-full">
										<h4 className="text-xl font-bold text-gray-900 mb-3">{title as string}</h4>
										{content as React.ReactNode}
									</div>
								</div>
							))}
						</div>
					</section>

					{/* Multi-Model Workspaces */}
					<section id="multi-model" className="py-[150px] bg-white">
						<h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">Multi-Model Workspaces — Built for Fleets of Creators</h3>
						<div className="grid md:grid-cols-2 gap-6">
							<div className="bg-white rounded-3xl p-8 border border-gray-200">
								<h4 className="text-xl font-bold text-gray-900 mb-2">Per-Model Dashboard</h4>
								<p className="text-gray-700">Only the channels that belong to that specific creator—followers, reach, ER, content mix. Fine-tune posting cadence, catch format fatigue early.</p>
							</div>
							<div className="bg-white rounded-3xl p-8 border border-gray-200">
								<h4 className="text-xl font-bold text-gray-900 mb-2">Cross-Model Roll-Up</h4>
								<p className="text-gray-700">Aggregated metrics across <em>all</em> selected creators (or a subset you pick). Board-level reporting for “Total Network” growth, reach, or revenue.</p>
							</div>
							<div className="bg-white rounded-3xl p-8 border border-gray-200">
								<h4 className="text-xl font-bold text-gray-900 mb-2">Segment Groups</h4>
								<p className="text-gray-700">Tag models into cohorts (e.g., “Fitness”, “Gaming”, “Gen Z”), then compare KPI averages side-by-side. Spot category leaders and under-performers in seconds.</p>
							</div>
						</div>
						<p className="text-gray-700 mt-6">Instant toggles let you jump from “Mila.AI on Instagram last 7 days” to “All 100 models • All channels • QTD” with two clicks. Every insight — AI recommendations, alerts, exports — works at <em>any</em> level you choose.</p>
						<blockquote className="mt-4 italic text-gray-700 border-l-4 border-gray-200 pl-4">Result: One platform, crystal-clear answers—from an individual Reel to the collective impact of your entire influencer studio.</blockquote>
					</section>

					{/* Perfect For Teams */}
					<section id="perfect-for" className="py-[150px] bg-white">
						<h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">Perfect For Teams That Need to…</h3>
						<ul className="list-disc list-inside text-gray-700 space-y-2">
							<li><strong>Replace fractured spreadsheets</strong> with a single source of truth.</li>
							<li><strong>Prove ROI</strong> to execs with conversion & revenue tie-ins.</li>
							<li><strong>Iterate content quickly</strong> using real-time feedback loops and AI tips.</li>
							<li><strong>Collaborate across roles</strong>—creatives, growth, and leadership see tailored views.</li>
						</ul>
						<div className="mt-6 flex gap-3">
							<a href="/products/zencreator" className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">Try Creator OS</a>
							<a href="https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08" target="_blank" rel="noopener noreferrer" className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">Book a Demo</a>
						</div>
					</section>

					{/* FAQ and final CTA moved to global FAQAccordion below for full-width background */}
				</div>
		</div>

		{/* Unified FAQ with full-width background including final CTA */}
		<FAQAccordion
			items={[
				{ question: 'How fresh is the data?', answer: 'API sync runs every 10 minutes; YouTube metrics every hour (API limit).' },
			]}
			cta={(
				<div className="max-w-3xl mx-auto text-center">
					<h3 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">Ready to turn data into action—without another analytics tab?</h3>
					<p className="text-gray-700 mb-8 text-lg"><strong>Connect your channels and see insights populate in under five minutes.</strong></p>
					<div className="flex flex-wrap gap-4 justify-center">
						<a href="/products/zencreator" className="bg-black text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-colors">Try Creator OS</a>
						<a href="https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08" target="_blank" rel="noopener noreferrer" className="border border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-colors">Book a Demo</a>
					</div>
				</div>
			)}
		/>
		</PageLayout>
	);
};


