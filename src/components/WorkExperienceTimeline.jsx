import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import koanLogo from '@/images/logos/koanLogo.png'
import walmartLogo from '@/images/walmartLogo.jpg'
import icfLogo from '@/images/logos/icf.png'
import image1 from '@/images/photos/image-1.png'

export function WorkExperienceTimeline() {
    const data = [
        {
            title: "Senior Software Engineer(Frontend Lead)",
            company: "Walmart Global Tech",
            logo: walmartLogo,
            duration: 'May, 2020 - Present',
            content: (
                <div>
                    <p
                        className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        • I work as a Lead Frontend Engineer, where I design and create large-scale web and mobile applications
                        using JavaScript. I also lead a team of developers, helping them learn and grow.
                    </p>
                    <p
                        className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        • I have designed and built Walmart’s Survey Insights web application from scratch using ReactJS, Redux &
                        Amcharts. Designed and developed reusable data visualisation components library in React, which is now
                        available as an NPM Library for other Walmart teams to use. This library has reduced development effort
                        significantly and is currently in use at Walmart Luminate (https://www.walmartluminate.com).
                    </p>
                    <p
                        className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        • Developed Walmart’s Associate appreciation app URock using React Native. Store Owners/Managers use
                        this app to appreciate their associates.</p>
                    <p
                        className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        • Proud to have received Bravo & Excellence Awards for my contributions.</p>
                    {/* <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="https://assets.aceternity.com/templates/startup-1.webp"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                        <Image
                            src="https://assets.aceternity.com/templates/startup-2.webp"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                        <Image
                            src="https://assets.aceternity.com/templates/startup-3.webp"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                        <Image
                            src="https://assets.aceternity.com/templates/startup-4.webp"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                    </div> */}
                </div>
            ),
        },
        {
            title: "Lead Full Stack Enginner(Tech Lead)",
            company: "ICF Next",
            duration: 'Jan, 2014 - Apr, 2020',
            logo: icfLogo,
            content: (
                <div>
                    <p
                        className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        Worked as a Tech Lead for Amway Team (Oﬀshore), designed and built more than 100 web components
                        using PolymerJS as a modular solution for Amway’s Core Product Mybiz.
                    </p>
                    <p
                        className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        • Designed and built REST APIs for Amway’s business calculations using NodeJS as backend with ExpressJS.
                    </p>
                    <p
                        className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        • Have been involved in scaling & managing teams of up to 15 Developers.</p>
                    <p
                        className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        Have provided JavaScript-based web solutions for more than 8 clients like McDonald’s, Amway etc.</p>
                    <p
                        className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        Invited by Amway to their headquarters in US to be part of their Technical Design meet-up in 2018.</p>
                    {/* <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="https://assets.aceternity.com/pro/hero-sections.png"
                            alt="hero template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                        <Image
                            src="https://assets.aceternity.com/features-section.png"
                            alt="feature template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                        <Image
                            src="https://assets.aceternity.com/pro/bento-grids.png"
                            alt="bento template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                        <Image
                            src="https://assets.aceternity.com/cards.png"
                            alt="cards template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                    </div> */}
                </div>
            ),
        },
        {
            title: "Frontend Developer",
            company: "Koan Digital Solutions Pvt. Ltd.",
            duration: 'Jul, 2013 - Dec, 2014',
            logo: koanLogo,
            content: (
                <div>
                    <p
                        className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                        • Worked as a user interface designer & developer.
                    </p>
                    <p
                        className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                        • Worked with technologies like AngularJS, jQuery, WordPress, PhoneGap & Facebook Canvas Apps.
                    </p>

                    <p
                        className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                        • Developed a Facebook Canvas App game which was played by almost 50,000 users. Was a consultant on
                        multiple projects during this time.
                    </p>


                    {/* <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="https://assets.aceternity.com/pro/hero-sections.png"
                            alt="hero template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                        <Image
                            src="https://assets.aceternity.com/features-section.png"
                            alt="feature template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                        <Image
                            src="https://assets.aceternity.com/pro/bento-grids.png"
                            alt="bento template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                        <Image
                            src="https://assets.aceternity.com/cards.png"
                            alt="cards template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                    </div> */}
                </div>
            ),
        },
    ];
    return (
        (<div className="w-full">
            <Timeline data={data} />
        </div>)
    );
}
