import type { Page } from '@open-slide/core';

const Cover: Page = () => (
  <div className="flex h-full w-full flex-col items-center justify-center gap-8">
    <h1 className="text-[140px] font-bold tracking-tight">Hola</h1>
    <p className="text-[48px] opacity-60">slides.jorge5.dev</p>
  </div>
);

export default [Cover] satisfies Page[];
export const meta = { title: 'Hola' };
