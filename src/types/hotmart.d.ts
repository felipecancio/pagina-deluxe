interface HotmartCheckoutElements {
  init: (type: "salesFunnel") => {
    mount: (selector: string) => void;
  };
}

declare const checkoutElements: HotmartCheckoutElements;
