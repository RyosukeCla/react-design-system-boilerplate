import { Variant } from '@vitebook/preact';
import { Button } from './button';

export default function ButtonStory() {
  return (
    <>
      <Variant name="Default">
        <Button>button</Button>
      </Variant>
    </>
  );
}
