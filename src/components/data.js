import fbeforeImage from '../assets/fbefore.jpeg';
import fafterImage from '../assets/fafter.jpeg';
import beforeImage from '../assets/before.jpeg';
import afterImage from '../assets/after.jpeg';
import saadbeforeImage from '../assets/saadbefore.jpeg';
import saadafterImage from '../assets/saadafter.jpeg';

export const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#programs', label: 'Programs' },
  { href: '#transformations', label: 'Results' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#contact', label: 'Contact' },
];

export const benefits = [
  { icon: 'target', title: 'Personalized Strategy', text: 'Training and nutrition built around your body type, routine, and goals.' },
  { icon: 'message-circle', title: 'Weekly Coaching Calls', text: 'Direct support, progress reviews, and clear weekly action steps.' },
  { icon: 'activity', title: 'Sustainable Results', text: 'No crash dieting, no guesswork. A method designed to last for life.' },
];

export const plans = [
  { name: 'Monthly', price: '$100', note: 'Perfect to start', featured: false },
  { name: '3 Months', price: '$275', note: 'Save 8%', featured: false },
  { name: '6 Months', price: '$560', note: 'Save 7%', featured: false },
  { name: 'Annual', price: '$900', note: 'Best Value - Save 25%', featured: true },
];

export const transformations = [
  { before: fbeforeImage, after: fafterImage, name: 'Marina K.', duration: '3 Months Program', result: 'Lost 20 kg, gained strength' },
  { before: beforeImage, after: afterImage, name: 'Khubab K.', duration: '4 Months Program', result: 'Lost 25 kg, gained strength' },
  { before: saadbeforeImage, after: saadafterImage, name: 'Saad M.', duration: '4 Months Program', result: 'Lost 18 kg, ran first 5K' },
];

export const reviews = [
  {
    name: 'Ayesha Khan',
    quote: 'This program fixed my consistency. I look better, feel stronger, and finally have a routine I can maintain.',
  },
  {
    name: 'Bilal Ahmed',
    quote: 'The calls kept me accountable and the workouts were practical. My energy and confidence improved massively.',
  },
  {
    name: 'Sana Malik',
    quote: 'Flexible nutrition changed everything. I lost fat without feeling restricted.',
  },
];
