import { Code, Zap, TestTube, Rocket, CheckCircle2 } from 'lucide-react';

const deploymentSteps = [
  {
    icon: Code,
    title: 'Development',
    description: 'Clean, scalable code written with best practices',
    color: 'primary',
  },
  {
    icon: TestTube,
    title: 'Testing',
    description: 'Rigorous quality assurance and bug fixes',
    color: 'secondary',
  },
  {
    icon: Zap,
    title: 'Optimization',
    description: 'Performance tuning and code optimization',
    color: 'accent',
  },
  {
    icon: Rocket,
    title: 'Deployment',
    description: 'Seamless launch to production servers',
    color: 'primary',
  },
  {
    icon: CheckCircle2,
    title: 'Support',
    description: 'Ongoing maintenance and updates',
    color: 'secondary',
  },
];

const DeploymentProcess = () => {
  return (
    <section id="process" className="py-24 relative overflow-hidden particle-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold">
            <span className="gradient-text">Our Deployment</span>
            <br />
            Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From concept to launch, we follow a proven process that ensures success
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-primary -translate-y-1/2 -z-10" />

          {deploymentSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="glass p-6 rounded-3xl text-center hover:scale-105 transition-all duration-300 group h-full">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-${step.color}/20 flex items-center justify-center glow-${step.color} group-hover:animate-pulse-glow`}>
                    <Icon className={`w-8 h-8 text-${step.color}`} />
                  </div>
                  
                  <div className={`w-8 h-8 mx-auto mb-4 rounded-full bg-gradient-${step.color} flex items-center justify-center font-bold text-white`}>
                    {index + 1}
                  </div>

                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="glass p-8 rounded-3xl inline-block glow-primary">
            <div className="flex items-center gap-6 flex-wrap justify-center">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">48hrs</div>
                <div className="text-sm text-muted-foreground mt-1">Avg. Deployment</div>
              </div>
              <div className="h-12 w-px bg-border hidden sm:block" />
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">99.9%</div>
                <div className="text-sm text-muted-foreground mt-1">Uptime</div>
              </div>
              <div className="h-12 w-px bg-border hidden sm:block" />
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">24/7</div>
                <div className="text-sm text-muted-foreground mt-1">Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeploymentProcess;
