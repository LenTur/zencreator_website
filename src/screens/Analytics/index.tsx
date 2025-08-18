import React from 'react';
import { CreditCard, ShieldCheck, Rocket, Headset } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';
import { FAQAccordion } from '@/components/sections/FAQAccordion';

export const Analytics: React.FC = () => {
	return (
		<PageLayout
			title="Analytics & Insights — One Truth for Every Channel"
			description="From big-picture growth to frame-by-frame performance, Creator OS turns raw data into decisions you can act on."
		>
			{/* Hero */}
			<div className="container mx-auto px-4" style={{ paddingTop: '180px' }}>
				<div className="max-w-[1200px] mx-auto">
					<div className="bg-[#0F172A] rounded-3xl border border-white/10 min-h-[60vh] flex items-center justify-center">
						<section className="pt-24 pb-[40px] text-center text-white w-full px-6">
							<h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
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
					<section id="what-you-get" className="py-[100px] bg-white mt-20 md:mt-24">
						<h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 text-center">What You Get</h3>
						<div className="max-w-[1120px] mx-auto flex flex-col gap-6">
							{[
								{ title: 'Cross-Channel Overview', description: 'Total followers, reach, views, impressions, engagement rate, watch time, CTR. Big-number tiles & trend lines', reverse: false },
								{ title: 'Channel Deep Dive', description: 'Platform-specific KPI sets (e.g., Saves & Shares on Instagram, Retention Curve on YouTube Shorts). Tabbed dashboards', reverse: true },
								{ title: 'Post-Level Drill-Down', description: 'Views, likes, comments, ER, watch-through %, clicks, top commenters. Click-through modal or table export', reverse: false }
							].map((item, index) => (
								<div key={index} className="p-6 md:p-8">
									<div className={`grid lg:grid-cols-2 gap-12 items-center ${item.reverse ? 'lg:grid-flow-col-dense' : ''}`}>
										{/* Visual */}
										<div className={item.reverse ? 'lg:col-start-2' : ''}>
											{item.title === 'Cross-Channel Overview' ? (
												<img src="/images/zencreator/analytics/cross-channel-overview.png" alt="Cross-Channel Overview" className="rounded-2xl max-w-[392px] w-auto h-auto shadow-lg" />
											) : item.title === 'Channel Deep Dive' ? (
												<img src="/images/zencreator/analytics/Channel%20Deep%20Dive.png" alt="Channel Deep Dive" className="rounded-2xl max-w-[392px] w-auto h-auto shadow-lg" />
											) : item.title === 'Post-Level Drill-Down' ? (
												<img src="/images/zencreator/analytics/Post-Level%20Drill-Down.png" alt="Post-Level Drill-Down" className="rounded-2xl max-w-[392px] w-auto h-auto shadow-lg" />
											) : null}
										</div>

										{/* Text */}
										<div className={item.reverse ? 'lg:col-start-1' : ''}>
											<h4 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight">{item.title}</h4>
											<p className="text-gray-600 text-lg leading-relaxed">{item.description}</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</section>

					{/* How It Works */}
					<section id="how-it-works" className="py-[100px] bg-white">
						<h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 text-center">How It Works</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
							{[
								{ title: 'Secure API Pulls', desc: 'Official APIs fetch fresh data every 10 minutes.', img: '' },
								{ title: 'Unified Taxonomy', desc: 'Creator OS normalises KPIs across platforms; “Engagement” means the same everywhere.', img: '' },
								{ title: 'AI Insight Engine', desc: 'Flags spikes, drops, best-time windows and under-performing formats; surfaces next-step suggestions.', img: '' },
								{ title: 'Dashboards & Alerts', desc: 'Drag-and-drop widgets; send Slack / email alerts when KPIs cross thresholds.', img: '' },
								{ title: 'Export & Share', desc: 'CSV, PDF, or live link; schedule weekly or monthly reports automatically.', img: '' },
							].map((item,i)=> {
								const pos = i;
								const positionClass =
									pos === 0 ? 'lg:col-span-2 lg:col-start-1' :
									pos === 1 ? 'lg:col-span-2 lg:col-start-3' :
									pos === 2 ? 'lg:col-span-2 lg:col-start-5' :
									pos === 3 ? 'lg:col-span-2 lg:col-start-2' :
									'lg:col-span-2 lg:col-start-4';

								return (
									<div key={item.title} className={`${positionClass}`}>
										<div className="relative rounded-3xl p-6 border border-gray-200 bg-white shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
											<div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold shadow-md">{i+1}</div>
											<div className="mb-4 rounded-2xl overflow-hidden">
												{item.img ? (
													<img src={item.img} alt={item.title} className="w-full h-40 object-cover" />
												) : (
													<div className="w-full h-40 bg-gradient-to-br from-gray-100 to-gray-200" />
												)}
											</div>
											<h4 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h4>
											<p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
										</div>
									</div>
								);
							})}
						</div>
					</section>

					{/* Key Features */}
					<section id="key-features" className="py-[100px] bg-white">
						<h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 text-center">Key Features</h3>
						<div className="grid md:grid-cols-2 gap-6">
							{[
								{ icon: '⚡', title: 'Granular to Global', bullets: [
									'Toggle from “All Channels • Last 90 Days” to “This Reel • Last 24 h” in two clicks.',
									'Save any filter combo as a reusable view.',
								]},
								{ icon: '🧠', title: 'AI Recommendations', bullets: [
									'Picks winning hooks, optimal posting windows, and repeat-worthy formats.',
									'Suggests under-served audience segments based on hashtag & geo data.',
								]},
								{ icon: '🏷️', title: 'Campaign Tags & Filters', bullets: [
									'Group posts by campaign, product line, or creator.',
									'Compare A/B variants at a glance.',
								]},
								{ icon: '🔒', title: 'Privacy & Security', bullets: [
									'OAuth tokens stored in encrypted vaults.',
									'SOC-2 infrastructure; optional VPC peering for enterprise.',
								]},
							].map((card, idx) => (
								<div key={card.title} className="relative bg-[#0F172A] rounded-3xl p-8 border border-white/10 shadow-xl text-white">
									<div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-xl mb-4">
										<span>{card.icon}</span>
									</div>
									<h4 className="text-2xl font-bold mb-3">{card.title}</h4>
									<ul className="list-disc list-inside text-white/80 space-y-2">
										{card.bullets.map((b) => (
											<li key={b}>{b}</li>
										))}
									</ul>
									<div className="mt-4 text-purple-200 font-semibold">{String(idx+1).padStart(2,'0')}</div>
								</div>
							))}
						</div>
					</section>

					{/* Multi-Model Workspaces */}
					<section id="multi-model" className="py-[100px] bg-white">
						<h3 className="sr-only">Multi-Model Workspaces — Built for Fleets of Creators</h3>
						<div className="grid gap-8 md:grid-cols-2">
							{/* Intro/CTA card (top-left) */}
							<div className="rounded-3xl p-8 bg-[#0F172A] text-white border border-white/10 shadow-xl min-h-[420px] flex flex-col justify-between">
								<div>
									<h4 className="text-3xl md:text-4xl font-black leading-tight mb-4">Multi-Model Workspaces<br />Built for Fleets of Creators</h4>
									<p className="text-white/80">One control room for every creator, cohort and the entire network. Drill from roll‑ups to post detail in two clicks.</p>
								</div>
								<div className="flex gap-3 pt-6">
									<a href="https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08" target="_blank" rel="noopener noreferrer" className="bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">Book a Demo</a>
									<a href="/products/zencreator" className="border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition-colors">Try Creator OS</a>
								</div>
							</div>

							{/* Per-Model Dashboard */}
							<div className="group rounded-3xl p-8 bg-white border border-gray-200 shadow-xl min-h-[420px] flex flex-col">
								<div className="rounded-2xl overflow-hidden mb-6 border border-gray-200 bg-gradient-to-b from-white to-gray-50">
									<div className="flex items-center gap-1 p-2 px-3 border-b border-gray-200/70 bg-white/80">
										<span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
										<span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
										<span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
									</div>
									<div className="p-3">
										<img src="/images/zencreator/analytics/per-model-dashboard.png" alt="Per-Model Dashboard" className="w-full h-[240px] object-contain transition-transform duration-500 group-hover:scale-[1.03]" />
									</div>
								</div>
								<h4 className="text-xl font-bold mb-2 text-gray-900">Per-Model Dashboard</h4>
								<p className="text-gray-700">Channels, reach, ER, content mix — fine‑tune posting cadence and catch format fatigue early.</p>
							</div>

							{/* Cross-Model Roll-Up */}
							<div className="group rounded-3xl p-8 bg-white border border-gray-200 shadow-xl min-h-[420px] flex flex-col">
								<div className="rounded-2xl overflow-hidden mb-6 border border-gray-200 bg-gradient-to-b from-white to-gray-50">
									<div className="flex items-center gap-1 p-2 px-3 border-b border-gray-200/70 bg-white/80">
										<span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
										<span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
										<span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
									</div>
									<div className="p-3">
										<img src="/images/zencreator/analytics/cross-model-rollup.png" alt="Cross-Model Roll-Up" className="w-full h-[240px] object-contain transition-transform duration-500 group-hover:scale-[1.03]" />
									</div>
								</div>
								<h4 className="text-xl font-bold mb-2 text-gray-900">Cross-Model Roll-Up</h4>
								<p className="text-gray-700">Aggregated metrics across creators — board‑level reporting for growth, reach and revenue.</p>
							</div>

							{/* Segment Groups */}
							<div className="group rounded-3xl p-8 bg-white border border-gray-200 shadow-xl min-h-[420px] flex flex-col">
								<div className="rounded-2xl overflow-hidden mb-6 border border-gray-200 bg-gradient-to-b from-white to-gray-50">
									<div className="flex items-center gap-1 p-2 px-3 border-b border-gray-200/70 bg-white/80">
										<span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
										<span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
										<span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
									</div>
									<div className="p-3">
										<img src="/images/zencreator/analytics/segment-groups.png" alt="Segment Groups" className="w-full h-[240px] object-contain transition-transform duration-500 group-hover:scale-[1.03]" />
									</div>
								</div>
								<h4 className="text-xl font-bold mb-2 text-gray-900">Segment Groups</h4>
								<p className="text-gray-700">Cohorts (e.g., “Fitness”, “Gaming”, “Gen Z”) with side‑by‑side KPI averages. Spot leaders in seconds.</p>
							</div>
						</div>
					</section>

					{/* Perfect For Teams */}
					<section id="perfect-for" className="py-[100px] bg-white">
						<h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 text-center">Shared Advantages</h3>
						<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
							{([
								['Unified Billing','One invoice, usage broken down by product.', CreditCard],
								['SOC-2 Infrastructure','Same secure cloud backbone for both platforms.', ShieldCheck],
								['Rapid Roadmap','Monthly feature drops pushed automatically.', Rocket],
								['Dedicated Success Team','Onboarding, best‑practice workshops, 24×7 priority support on enterprise tiers.', Headset],
							] as const).map(([title,desc,Icon]) => (
								<div key={title} className="bg-[#0F172A] rounded-3xl p-7 border border-white/10 shadow-xl text-white">
									<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center mb-4">
										<Icon className="w-5 h-5 text-purple-700" />
									</div>
									<h4 className="text-lg font-bold mb-2">{title}</h4>
									<p className="text-white/80 leading-relaxed">{desc}</p>
								</div>
							))}
						</div>
					</section>

					{/* FAQ and final CTA moved to global FAQAccordion below for full-width background */}
				</div>
		</div>

		{/* FAQ only */}
		<FAQAccordion
			items={[
				{ question: 'How fresh is the data?', answer: 'API sync runs every 10 minutes; YouTube metrics every hour (API limit).' },
			]}
		/>

		{/* Separate CTA section — dark card on light gradient background */}
		<section className="py-[150px] bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
			<div className="max-w-6xl mx-auto px-4">
				<div className="bg-[#0F172A] text-white rounded-3xl p-12 md:p-16 text-center border border-white/10 shadow-2xl">
					<div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold mb-6 bg-white/10 border border-white/20">Start in minutes</div>
					<h3 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">Ready to turn data into action—without another analytics tab?</h3>
					<p className="text-white/80 mb-8 text-lg max-w-3xl mx-auto"><strong>Connect your channels and see insights populate in under five minutes.</strong></p>
					<div className="flex flex-wrap gap-4 justify-center">
						<a href="/products/zencreator" className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors">Try Creator OS</a>
						<a href="https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors">Book a Demo</a>
						<a href="mailto:info@zencreator.pro?subject=Analytics%20question" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors">Contact us</a>
					</div>
				</div>
			</div>
		</section>
		</PageLayout>
	);
};


