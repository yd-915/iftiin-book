import * as React from "react";
import Mash from "@getmash/client-sdk";

import useSiteMetdata from "../queries/useSiteMetadata";

type MashContextValue = {
  mash: Mash | null;
  ready: boolean;
};

const MashContext = React.createContext<MashContextValue>({
  mash: null,
  ready: false,
});

export default function MashProvider(props: React.PropsWithChildren<{}>) {
  const [mash, setMash] = React.useState<Mash | null>(null);
  const [ready, setReadyStatus] = React.useState(false);

  const metadata = useSiteMetdata();

  React.useEffect(() => {
    const _mash = new Mash({
      earnerID: metadata.mash.earnerID,
    });
    _mash.init().then(() => {
      setMash(_mash);
      setReadyStatus(true);
    });
    // Required to support web components
    // @ts-ignore
    window.Mash = _mash;
  }, []);

  return <MashContext.Provider value={{ mash, ready }}>{props.children}</MashContext.Provider>;
}

export function useMash() {
  const ctx = React.useContext(MashContext);
  return ctx;
}
