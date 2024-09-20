import { type PropsWithChildren } from "react";
import "./index.css";
import { Center, styled } from "../styled-system/jsx";
import { button, loader } from "../styled-system/recipes";

// Loader component with loader recipe
const Loader = styled("span", loader);

// Button component with button slot recipe
function Button({ children }: PropsWithChildren) {
  const classes = button();

  return (
    <button>
      <Loader className={classes.loader}>{children}</Loader>
    </button>
  );
}

// you will notice that the font size from the button slot recipe base styles overrides
// the font size from the loader recipe base which is the correct behavior.
//
// However the color from the button slot recipe variant doesn't override the color from
// the loader recipe variant, and this is the issue
//
// If you look at CSS layers, the layering is:
// recipe base < slot recipe base < slot recipe variant < recipe variant
//
// But this is how it should be:
// recipe base < recipe variant < slot recipe base < slot recipe variant
//
// so that no matter what the styles of the child component recipe is, the slot styles from the
// parent component always take the higher priority.

function App() {
  return (
    <Center h="svh">
      <Button>Loading</Button>
    </Center>
  );
}

export default App;
