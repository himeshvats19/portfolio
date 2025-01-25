import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export const metadata = {
  title: 'Blogs',
  description:
    'I write Blogs on Tech, Formula 1 Racing, Games & Music.',
}

export default function Speaking() {
  return (
    <SimpleLayout
      title="Tech Blogs, Music Videos & more"
      intro="I write Blogs on Tech, Make Music Videos on Youtube and discuss about Formula 1, Videos Games & Code on Reddit."
    >
      <div className="space-y-20">
        <SpeakingSection title="Tech Blogs">
          <Appearance
            href="https://medium.com/@himeshvats19/javascript-functions-5d592a070505"
            title="JavaScript — Functions"
            description="…You will need to know this…at least"
            event="Medium"
            cta="Read More"
          />
          <Appearance
            href="https://medium.com/@himeshvats19/class-based-inheritance-prototypes-in-javascript-9e05e31fe9"
            title="Class based Inheritance & Prototypes in JavaScript"
            description="Does JavaScript has classes? Well Yes, but not really..."
            event="Medium"
            cta="Read More"
          />
          <Appearance
            href="https://medium.com/@himeshvats19/scopes-closures-in-javascript-ac210b8410fb"
            title="Scopes & Closures in JavaScript"
            description="Not sure if my function or a function inside my function..."
            event="Medium"
            cta="Read More"
          />
          <Appearance
            href="https://medium.com/@himeshvats19/callbacks-promises-cbf7716d6b4d"
            title="Callbacks & Promises"
            description="Promise me, you will read it till the time you hear back..."
            event="Medium"
            cta="Read More"
          />
          <Appearance
            href="https://medium.com/@himeshvats19/es6-features-javascript-4a9caf8aa74d"
            title="ES6 Features — JavaScript"
            description="ES6, Please Please Please"
            event="Medium"
            cta="Read More"
          />

        </SpeakingSection>
        <SpeakingSection title="Music Videos">
          <Appearance
            href="https://www.youtube.com/watch?v=Jr5xzTbfs4k"
            title="Club Mix"
            description=""
            event="Youtube"
            cta="Listen to my Music"
          />
          <Appearance
            href="https://www.youtube.com/watch?v=0z7iDSLpniQ"
            title="Saathiya [Bollywood, LoFi, Chill, Trap Mix] - Himesh Vats"
            description=""
            event="Youtube"
            cta="Listen to my Music"
          />

        </SpeakingSection>
      </div>
    </SimpleLayout>
  )
}
