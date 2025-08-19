import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/layout/ScrollToTop";
import { Home, MacbookAir, Products, CreatorOS as ZenCreator, ZenComfy, Services, Technologies, Pricing, ContentCreationSuite, PublishingHub, PublishingInstagram, PublishingThreads, PublishingTwitter, PublishingFacebook, PublishingYouTube, Analytics, AccountManagement, RunComfyUIOnline, WorkflowAsWebApp, AIFaceGeneration, AIFaceSwapping, AIUpscaling, AIGenerationPrompt, AIGenerationReference, AIVideo, AICarousel, DatingProfilesService, PhotoShootsService, FullFunnelMarketing, PerformanceMarketing, ExperientialMarketing, CreativeProjects, BrandAmbassador, AIInfluencers, AboutUs } from "./screens";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/zencreator" element={<MacbookAir />} />
        <Route path="/products/zencreator/overview" element={<ZenCreator />} />
        <Route path="/products/zencreator/content-creation" element={<ContentCreationSuite />} />
        {/* Disabled Content Creation Tools */}
        <Route path="/products/zencreator/content-creation/ai-face-generation" element={<AIFaceGeneration />} />
        <Route path="/products/zencreator/content-creation/ai-face-swapping" element={<AIFaceSwapping />} />
        <Route path="/products/zencreator/content-creation/ai-upscaling" element={<AIUpscaling />} />
        <Route path="/products/zencreator/content-creation/ai-generation-prompt" element={<AIGenerationPrompt />} />
        <Route path="/products/zencreator/content-creation/ai-generation-reference" element={<AIGenerationReference />} />
        <Route path="/products/zencreator/content-creation/dating-profiles" element={<DatingProfilesService />} />
        <Route path="/products/zencreator/content-creation/video-generation" element={<AIVideo />} />
        <Route path="/products/zencreator/content-creation/carousel-generation" element={<AICarousel />} />
        <Route path="/products/zencreator/content-creation/photo-shoot" element={<PhotoShootsService />} />
        <Route path="/products/zencreator/publishing-hub" element={<PublishingHub />} />
        {/* Disabled Content Publishing Tools */}
        <Route path="/products/zencreator/publishing-hub/instagram" element={<PublishingInstagram />} />
        <Route path="/products/zencreator/publishing-hub/threads" element={<PublishingThreads />} />
        <Route path="/products/zencreator/publishing-hub/twitter" element={<PublishingTwitter />} />
        <Route path="/products/zencreator/publishing-hub/facebook" element={<PublishingFacebook />} />
        <Route path="/products/zencreator/publishing-hub/youtube" element={<PublishingYouTube />} />
        <Route path="/products/zencreator/analytics" element={<Analytics />} />
        <Route path="/products/zencreator/account-management" element={<AccountManagement />} />
        <Route path="/products/zencomfy" element={<ZenComfy />} />
        <Route path="/products/zencomfy/comfy-ui-cloud" element={<RunComfyUIOnline />} />
        <Route path="/products/zencomfy/workflow-as-app" element={<WorkflowAsWebApp />} />
        {/* ZenComfy marketing landing shortcuts */}
        <Route path="/run-comfyui-online" element={<RunComfyUIOnline />} />
        <Route path="/comfyui-to-webapp" element={<WorkflowAsWebApp />} />
        <Route path="/zencreator" element={<ZenCreator />} />
        <Route path="/zencomfy" element={<ZenComfy />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/ai-influencers" element={<AIInfluencers />} />
        <Route path="/services/ai-influencer" element={<AIInfluencers />} />
        <Route path="/services/dating-profiles-generation" element={<DatingProfilesService />} />
        <Route path="/services/photo-shoots-generation" element={<PhotoShootsService />} />
        <Route path="/services/full-funnel-marketing" element={<FullFunnelMarketing />} />
        <Route path="/services/performance-marketing" element={<PerformanceMarketing />} />
        <Route path="/services/experiential-marketing" element={<ExperientialMarketing />} />
        <Route path="/services/creative-projects" element={<CreativeProjects />} />
        <Route path="/services/brand-ambassador" element={<BrandAmbassador />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/tech" element={<Technologies />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
