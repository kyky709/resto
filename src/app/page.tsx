import {
  Hero,
  Presentation,
  SignatureDishes,
  GalleryPreview,
  Testimonials,
  ReservationWidget,
} from '@/components/sections';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Presentation />
      <SignatureDishes />
      <GalleryPreview />
      <Testimonials />
      <ReservationWidget />
    </>
  );
}
