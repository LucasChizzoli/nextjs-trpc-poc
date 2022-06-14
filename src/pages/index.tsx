import { trpc } from '../utils/trpc';

export default function IndexPage() {
  
  console.log("multiple renders!!");

  const hello = trpc.useQuery(['hello', { text: 'client' }]);
  if (!hello.data) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <p>{hello.data.greeting}</p>
    </div>
  );
};
