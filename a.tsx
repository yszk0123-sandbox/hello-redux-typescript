import * as React from 'react';
import { render } from 'react-dom';

interface ForProps {
  items: string[];
  children: (item: string, index?: number) => React.ReactNode;
}

function For({ items, children }: ForProps) {
  return <>{items.map(children)}</>;
}

interface Props {
  items: string[];
}

function ForExample({ items }: Props) {
  return (
    <For items={items}>
      {item => (
        <span key={item}>Hello, {item}!</span>
      )}
    </For>
  );
}

function MapExample({ items }: Props) {
  return (
    <>
      {items.map(item => (
        <span key={item}>Hello, {item}!</span>
      ))}
    </>
  );
}

export default function main() {
  const items = ['one', 'two', 'three']

  render(
    <div>
      <ForExample items={items} />
      <MapExample items={items} />
    </div>,
    document.getElementById('app'),
  );
}
