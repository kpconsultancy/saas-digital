
import React, { Suspense, lazy } from 'react';
import { LucideProps } from 'lucide-react';
import dynamicIconImports from 'lucide-react/dynamicIconImports';

const fallback = <div style={{ width: 24, height: 24 }}/>;

interface IconProps extends Omit<LucideProps, 'ref'> {
  iconName: keyof typeof dynamicIconImports;
}

const Icon = ({ iconName, ...props }: IconProps) => {
  const LucideIcon = lazy(dynamicIconImports[iconName]);

  return (
    <Suspense fallback={fallback}>
      <LucideIcon {...props} />
    </Suspense>
  );
};

export default Icon;
