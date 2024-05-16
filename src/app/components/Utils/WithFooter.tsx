import Link from 'next/link';
import React from 'react';

const withFooter = (WrappedComponent: React.ComponentType<{ nestedComponent: React.ReactNode }>) => {
  return ({ nestedComponent }: { nestedComponent: React.ReactNode }) => (
    <div>
      <WrappedComponent nestedComponent={nestedComponent}/>
      <Link href="/Testing/Home">Home</Link>
      <Link href="/Testing/Whishlist">Whishlist</Link>
      <Link href="/Testing/Message">Message</Link>
      <Link href="/Testing/Chat">Chat</Link>
    </div>
  );
};

export default withFooter;
