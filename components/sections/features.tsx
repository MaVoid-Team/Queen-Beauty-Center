'use client'

import { useLocale } from '@/components/locale-provider'
import { Award, Sparkles, Users, Crown } from 'lucide-react'

export function FeaturesSection() {
  const { t } = useLocale()

  const features = [
    {
      icon: Award,
      title: t.features.experience.title,
      description: t.features.experience.description,
    },
    {
      icon: Sparkles,
      title: t.features.quality.title,
      description: t.features.quality.description,
    },
    {
      icon: Users,
      title: t.features.team.title,
      description: t.features.team.description,
    },
    {
      icon: Crown,
      title: t.features.atmosphere.title,
      description: t.features.atmosphere.description,
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {t.features.title}
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group text-center p-6 rounded bg-card border border-border transition-all duration-300 hover:border-primary/50"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 mb-4 rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon size={24} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
