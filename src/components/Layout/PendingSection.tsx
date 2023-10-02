import React, { PropsWithChildren } from "react";

type PendingSectionProps = { loading: boolean; error: string } & PropsWithChildren;

const PendingSection: React.FunctionComponent<PendingSectionProps> = ({ children: Component, loading, error }) => {
  if (loading) {
    Component = <div className="flex justify-center">Loading...</div>;
  }

  if (error) {
    Component = <div className="flex justify-center">{error}</div>;
  }

  return <>{Component}</>;
};

export default PendingSection;
