import { ArrowRight, Sparkles } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-mindstash-brown via-mindstash-stone to-mindstash-brown">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="flex justify-center mb-6">
          <div className="bg-mindstash-cream/20 p-3 rounded-full">
            <Sparkles className="w-8 h-8 text-mindstash-cream" />
          </div>
        </div>

        <h2 className="text-4xl lg:text-5xl font-bold text-mindstash-cream leading-tight">
          Ready to organize your
          <span className="block">digital life?</span>
        </h2>

        <p className="text-xl text-mindstash-cream/80 max-w-2xl mx-auto leading-relaxed">
          Join thousands of users who have already transformed how they save and
          share their favorite content online.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <button className="bg-mindstash-cream text-mindstash-brown px-8 py-4 rounded-lg hover:bg-mindstash-sage hover:text-mindstash-cream transition-all duration-300 flex items-center space-x-2 group font-medium">
            <span>Get Started for Free</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="border-2 border-mindstash-cream/50 text-mindstash-cream px-8 py-4 rounded-lg hover:border-mindstash-cream hover:bg-mindstash-cream hover:text-mindstash-brown transition-all duration-300 font-medium">
            View Pricing
          </button>
        </div>

        <p className="text-sm text-mindstash-cream/60 pt-4">
          No credit card required • Free plan available forever
        </p>
      </div>
    </section>
  );
};

export default CTA;
