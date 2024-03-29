import Header from '@/components/global/header';
import { Mdx } from '@/components/global/mdx';
import { HeroSection } from '@/components/pages/portfolio-section';
import { HOME_SECTION_INDEX } from '@/constants/app';
import { PORTFOLIO } from '@/constants/portfolio';
import { allPortfolios } from 'contentlayer/generated';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Fragment } from 'react';

export const metadata: Metadata = {
    title: `${PORTFOLIO.title.template} - Home`,
};

export default function Home() {
    const homeSection = allPortfolios.find((section) => section.index === HOME_SECTION_INDEX);

    if (!homeSection) return notFound();

    return (
        <Fragment>
            <Header />
            <main className='my-5 mr-5 ml-5 lg:ml-2 pb-5'>
                <section>
                    <HeroSection />
                </section>
                <section>
                    <div className='p-5'>
                        <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight pb-2'>Home</h3>
                        <Mdx section={homeSection} />
                    </div>
                </section>
            </main>
        </Fragment>
    );
}
