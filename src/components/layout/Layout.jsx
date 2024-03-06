import React from "react";
import PrimaryHeader from "./PrimaryHeader";
import SecondaryHeader from "./SecondaryHeader";
import PrimaryFooter from "./PrimaryFooter";
import SecondaryFooter from "./SecondaryFooter";

function Layout({ children }) {
  return (
    <div className="parent">
      <PrimaryHeader />
      <SecondaryHeader />
      <main className="min-h-[68vh]">{children}</main>
      <PrimaryFooter />
      <SecondaryFooter />
    </div>
  );
}

export default Layout;
