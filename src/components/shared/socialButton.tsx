function SocialButton({ children }: { children: JSX.Element }) {
  return (
    <a className="flex justify-center items-center text-xl h-10 w-10 rounded-full bg-yellow-400 hover:scale-110 hover:bg-white hover:text-yellow-400 transition-all" href="">
      {children}
    </a>
  );
}

export default SocialButton;
