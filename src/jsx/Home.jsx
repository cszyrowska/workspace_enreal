import React from 'react';
import '../css/Home.css';
import Hero from './Hero';
import AboutEnReal from './AboutEnReal';
import Approach from './Approach';
import MonthlyIssue from './MonthlyIssue';
import Planning from './Planning';
import Plymouth from './Plymouth';
import NextStep from './NextStep';

export default function Home() {
  return <main id="main" className="home">
    <Hero />
    <Approach />
    <AboutEnReal />
    <MonthlyIssue />
    <div className="home-local"><Plymouth /></div>
    <Planning />
    <NextStep />
  </main>;
}
