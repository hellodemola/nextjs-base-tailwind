import getCurrentTime from '../utili/time';

const Index = () => {
  const { minutes, seconds, hour } = getCurrentTime();
  return (
    <div className="grid content-center h-screen border">
      <div className="flex justify-center text-center">
        <div>
          <p className="underline leading-normal">Project Setup</p>
          <h1 className="text-5xl font-bold leading-relaxed">hello world</h1>
          <h2 className="text-3xl font-light leading-normal">
            The time is
            {`${hour}:${minutes}:${seconds}`}
          </h2>
        </div>
      </div>
    </div>
  );
};
export default Index;
